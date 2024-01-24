// app/services/auth.server.ts
import { Authenticator } from "remix-auth";
import {  redirect } from "@remix-run/node";
import { OAuth2Strategy } from "remix-auth-oauth2";
import { externalUserSessionStorage } from "~/googleSession";
import {OAuth2Client} from 'google-auth-library';
// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator  = new Authenticator(externalUserSessionStorage);

import jwt from 'jsonwebtoken';
import { ExternalUser } from "~/models/sessions/externalUser";
import { externalUserAcces } from "./accesAPIService";
const { sign, verify } = jwt;


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

        const { email, name} = extraParams;
        const signedAccessToken =  sign(accessToken, process.env.API_DECODER!, { algorithm: 'HS256' });
        const signedRefreshToken =  sign(refreshToken!, process.env.API_DECODER!, { algorithm: 'HS256' });
        const signedTokenId =  sign(extraParams.tokenId, process.env.API_DECODER!, { algorithm: 'HS256' });
        
        const newUserData: ExternalUser = {
            email: email,
            name: name,
            authentication:{
                accessToken: signedAccessToken,
                refreshToken: signedRefreshToken,
                salt: "",
                sessionToken: "",
            }
        }
        
        const response = await externalUserAcces(newUserData, signedTokenId);

        redirect('/acces');
      }
    ),
    // this is optional, but if you setup more than one OAuth2 instance you will
    // need to set a custom name to each one
    "Google"
  );