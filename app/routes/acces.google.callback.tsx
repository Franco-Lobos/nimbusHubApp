// app/routes/auth/github/callback.tsx
import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";


export let loader: LoaderFunction = ({ request }) => {

  try{
    return authenticator.authenticate("Google", request, {
      successRedirect: "/dashboard",
      // failureRedirect: "/acces",
    });
  }catch(error){
    console.error('Error creating user:', error);
    return json({ status: 'error', message: 'Failed to create user' }, { status: 500 });
  }
};