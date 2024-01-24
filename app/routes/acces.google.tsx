import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export async function action({
  request,
}: ActionFunctionArgs) {

  if (request.method === 'POST') {
    try {

      return authenticator.authenticate('Google', request, {
        successRedirect: "/dashboard",
        failureRedirect: "/acces/login",
      });
   
    } catch (error) {
      console.error('Error creating user:', error);
      return json({ status: 'error', message: 'Failed to create user' }, { status: 500 });
    }
  }
};