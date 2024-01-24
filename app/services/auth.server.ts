// app/services/auth.server.ts
import { Authenticator } from "remix-auth";
import { OAuth2Strategy } from "remix-auth-oauth2";
import {getSession, commitSession, userSessionStorage} from "../session"

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session

import jwt from 'jsonwebtoken';
import { externalUserAcces } from "./accesAPIService";
import { defaultLocation } from "~/components/constants/defaults";
import { SessionLocation } from "~/models/tomorrow/WeatherLocation";
const { sign, verify } = jwt;

export let authenticator  = new Authenticator(userSessionStorage);

authenticator.use(
    new OAuth2Strategy(
      {
        authorizationURL: "https://accounts.google.com/o/oauth2/v2/auth",
        tokenURL: "https://oauth2.googleapis.com/token",
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET! ,
        callbackURL: process.env.REDIRECT_URL!,
        scope: "email profile openid" // optional
        // useBasicAuthenticationHeader: false // defaults to false
      },
      async ({
        accessToken, refreshToken, extraParams, profile, context, request,
      }) => {

        const signedAccessToken =  sign(accessToken, process.env.API_DECODER!, { algorithm: 'HS256' });
        const response = await externalUserAcces(signedAccessToken,refreshToken!, extraParams.id_token);
  
        const session = await getSession(request.headers.get("Cookie"));
        const responseBody = await response.json();

        if (response.ok) {
          session.set("userId", responseBody.user._id);
          session.set("userName", responseBody.user.userName);
          session.set("location", [defaultLocation as SessionLocation]);
          session.set("ip", responseBody.ipAddress == '::ffff:127.0.0.1' ? "46.172.250.35" : responseBody.ipAddress);

          const commitedSession:string = await commitSession(session);

          const newHeaders = new Headers();
          newHeaders.append("Set-Cookie", response.headers.get("Set-Cookie")!);
          newHeaders.append("Set-Cookie", commitedSession);

          const newResponse = new Response(responseBody, {
            status: response.status,
            headers: newHeaders,
          });

          return newResponse;
        }
        
        return response;
      }
    ),
    // this is optional, but if you setup more than one OAuth2 instance you will
    // need to set a custom name to each one
    "Google"
  );