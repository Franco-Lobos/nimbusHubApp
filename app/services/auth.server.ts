// app/services/auth.server.ts
import { Authenticator } from "remix-auth";
import { OAuth2Strategy } from "remix-auth-oauth2";
import {getSession, commitSession, userSessionStorage} from "../session"

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session

import jwt from 'jsonwebtoken';
import { externalUserAuthentication } from "./accesAPIService";
import { defaultLocation } from "~/components/constants/defaults";
import { SessionLocation } from "~/models/tomorrow/WeatherLocation";
import { OAuth2Client } from "google-auth-library";
import { redirect } from "@remix-run/node";
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
        
        const session =await getSession(request.headers.get('Cookie'));
        console.log("SIGNED-TOKEN: ", session.get('oauth2State'));
        console.log("acces-TOKEN: ", accessToken);
        const oauthCode = session.data['oauth2:state'];
        const signedOAuth2Token =  sign(oauthCode!, process.env.API_DECODER!, { algorithm: 'HS256' });

        const signedAccessToken =  sign(accessToken, process.env.API_DECODER!, { algorithm: 'HS256' });
        const response = await externalUserAuthentication(signedAccessToken,refreshToken!, extraParams.id_token, signedOAuth2Token);

        if(response.ok){
          const client = new OAuth2Client();
            const ticket = await client.verifyIdToken({
                idToken: extraParams.id_token!,
                audience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
            });

            const payload = ticket.getPayload();
            console.log("payload", payload);
        }
      
         return response;
      }
    ),
    // this is optional, but if you setup more than one OAuth2 instance you will
    // need to set a custom name to each one
    "Google"
  );

function setCookie(arg0: string, arg1: string, arg2: {
  expires: Date; // expires in 24 hours
  path: string;
}) {
  throw new Error("Function not implemented.");
}
