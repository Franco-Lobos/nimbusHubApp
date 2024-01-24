import { ActionFunctionArgs, json } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export async function action({
  request,
}: ActionFunctionArgs) {

  if (request.method === 'POST') {
    try {
    const email = 'cachitodesal@gmail.com';

    return authenticator.authenticate('Google', request)

    //   const newUser = await createUser(data);
      return json({ status: 'success', data: "HI FROM GOOGLE AUTH" });     
    } catch (error) {
      console.error('Error creating user:', error);
      return json({ status: 'error', message: 'Failed to create user' }, { status: 500 });
    }
  }
};