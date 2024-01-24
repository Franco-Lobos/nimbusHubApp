// app/routes/auth/github/callback.tsx
import { LoaderFunction, json, redirect } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";
import { commitSession, getSession } from "~/session";
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;


export let loader: LoaderFunction = async ({ request }) => {
  try{

    return authenticator.authenticate('Google', request, {
      successRedirect: "/acces/google/final",
      failureRedirect: "/acces/login",
    }
    );

    // if (response.ok) {
    //   session.set("userId", responseBody.user._id);
    //   session.set("userName", responseBody.user.userName);
    //   session.set("location", [defaultLocation as SessionLocation]);
    //   session.set("ip", responseBody.ipAddress == '::ffff:127.0.0.1' ? "46.172.250.35" : responseBody.ipAddress);

    //   const commitedSession:string = await commitSession(session);

    //   const newHeaders = new Headers();
    //   newHeaders.append("Set-Cookie", response.headers.get("Set-Cookie")!);
    //   newHeaders.append("Set-Cookie", commitedSession);

    //   return new Response(responseBody, {
    //     status: response.status,
    //     headers: newHeaders
    //   });
    // }
    
  }catch(error){
    console.error('Error creating user:', error);
    return json({ status: 'error', message: 'Failed to create user' }, { status: 500 });
  }

};