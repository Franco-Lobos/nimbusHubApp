// app/routes/auth/github/callback.tsx
import { LoaderFunction, json } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";


export let loader: LoaderFunction = ({ request }) => {

  try{

    console.log("newResponse", request.headers.get("Set-Cookie"));

    return authenticator.authenticate("Google", request, {
      successRedirect: "/dashboard",
      failureRedirect: "/acces/login",
    });
  
  }catch(error){
    console.error('Error creating user:', error);
    return json({ status: 'error', message: 'Failed to create user' }, { status: 500 });
  }
};