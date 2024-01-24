// app/routes/auth/github/callback.tsx
import { LoaderFunction, json, redirect } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";
import { commitSession, getSession } from "~/session";
import jwt from 'jsonwebtoken';
import { externalUserLogin } from "~/services/accesAPIService";
import { defaultLocation } from "~/components/constants/defaults";
import { SessionLocation } from "~/models/tomorrow/WeatherLocation";
const { sign, verify } = jwt;


export let loader: LoaderFunction = async ({ request }) => {
  try{

    const session = await getSession(request.headers.get("Cookie"));
    console.log("SESSION-DATA: ", session.data);
    const tokenToSign = session.data['oauth2:state'];
    const signedOAuth2Token =  sign(tokenToSign!, process.env.API_DECODER!, { algorithm: 'HS256' });
    console.log("SIGNED TOKEN: ", signedOAuth2Token);

    const response = await externalUserLogin(signedOAuth2Token);
    const responseBody = await response.json();
    if (response.status === 202) {
      ("LOADING...")
    } 

    if (response.ok) {
      session.set("userId", responseBody.user._id);
      session.set("userName", responseBody.user.userName);
      session.set("location", [defaultLocation as SessionLocation]);
      session.set("ip", responseBody.ipAddress == '::ffff:127.0.0.1' ? "46.172.250.35" : responseBody.ipAddress);

      const commitedSession:string = await commitSession(session);

      const newHeaders = new Headers();
      newHeaders.append("Set-Cookie", response.headers.get("Set-Cookie")!);
      newHeaders.append("Set-Cookie", commitedSession);

      // const newResponse = new Response(responseBody, {
      //   status: response.status,
      //   headers: newHeaders,
      // });
      return redirect('/dashboard', { headers: newHeaders})
      // return newResponse.json();
    }

    return (responseBody);

  }catch(error){
    console.error('Error creating user:', error);
    return json({ status: 'error', message: 'Failed to create user' }, { status: 500 });
  }

};