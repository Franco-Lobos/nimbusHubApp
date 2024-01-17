// src/routes/login.tsx

import { Link} from '@remix-run/react';
import { useEffect, useState } from 'react';

import { FormErrors } from '~/components/widgets/formErrorInterface';
import { EmailInput, PasswordInput } from '~/components/widgets/formInput';
import AccesAuth from '../components/widgets/accesAuth'

import { ActionFunctionArgs, LoaderFunctionArgs, createCookieSessionStorage, isSession, redirect } from "@remix-run/node";
import {json, useActionData, Form, useNavigate} from '@remix-run/react';
import { loginService } from '~/services/accesAPIService';
import Swal from 'sweetalert2'
import tailwindConfig from 'tailwind.config';
import { commitSession, getSession } from '~/session';
import { WeatherLocation } from '~/models/WeatherLocation';



const colors = tailwindConfig.theme.extend.colors;

export async function action({
  request,
}: ActionFunctionArgs) {


  if (request.method === 'POST') {
    const formData = await request.formData();
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    const errors: FormErrors = {};

    if (!email.includes("@")) {
      errors.email = "Invalid email address";
    }

    if (password.length < 6) {
      errors.password =
        "Password should be at least 6 characters";
    }

    if (Object.keys(errors).length > 0) {
      return json({ errors });
    }

    const response: Response = await loginService(email,password);
    const responseBody = await response.json();
    const userId = responseBody._id;

    if (response.status==200) { //response?._id && response?.authentication?.sessionToken
      const storage =createCookieSessionStorage({
        cookie:{
          name: process.env.NIMBUS_HUB_SESSION,
          expires: new Date(Date.now() + 12 * 60 * 60 * 1000), // also 12 hours
          httpOnly: true,
          secure: true,
        }
      });

      const defaultLocation: WeatherLocation = {
        "lat": 40.71272659301758,
        "lon": -74.00601196289062,
        "name": "City of New York, New York, United States",
        "type": "administrative"
      }
      const session = await storage.getSession();
      session.set("userId", userId);
      session.set("userName", responseBody.userName);
      session.set("location", [defaultLocation]);

      // Commit the session with an expiration time and signing
      const sessionOptions = { expires: new Date(Date.now() + 12 * 60 * 60 * 1000), signed: true };
      const commitedSession = await commitSession(session, sessionOptions); // await storage.commitSession(session, { expires: new Date(Date.now() + 12 * 60 * 60 * 1000 ) }); // Expires in 12 hour

      response.headers.append("Set-Cookie", commitedSession);

      return response;
    }

    return (responseBody);
  }
}

export async function loader({ request }: LoaderFunctionArgs) {

  const session = await getSession(request.headers.get("Cookie"));

  if(session.has("userId")){
    return redirect("/dashboard/forecast/realtime");
  }
  return json({ errors: {}, authentication: {} });
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const actionData = useActionData<typeof action>(); 

  const incorrectFieldMsg = 'text-blue font-semibold p-2 text-xs ';

  useEffect(() => {
    if(actionData?.error){
        Swal.fire({
          toast: true,
          position: "bottom",
          title: actionData?.error,
          icon: 'error',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          customClass:{
              title: "text-blue", 
              timerProgressBar: "bg-gold",
          },
          background: colors.themeWhite,
          footer: "Don't have an account? <a class='text-blue underline' href='/acces/register'>Register here</a>"
      })
    }
  }, [actionData]);

  return (
      <>
      <div className='px-8 mt-12 lg:px-36'>
        <h1 className="text-2xl font-semibold mb-6 text-themeBlack text-center mb-8">Log in to your account</h1>
          <AccesAuth/>
          <div className="mt-4">
            <div className='flex felx-row items-center justify-center gap-2 my-8 '>
                <hr className='border-2 border-blue  w-full h-0'></hr>
                <p className="text-sm text-blue text-center font-semibold">Or</p>
                <hr className='border-2 border-blue  w-full h-0'></hr>
            </div>
            <Form method='post'>
                <p>
                  <EmailInput 
                    email={email}
                    setEmail={setEmail}
                    twClass={actionData?.errors?.email ? "border-2 border-gold" :""}
                  />
                  {actionData?.errors?.email ? (
                    <span className={incorrectFieldMsg}>{actionData?.errors.email}</span>
                  ) : null}
                </p>
                <p>
                <PasswordInput
                  password={password}
                  setPassword={setPassword}
                  twClass={actionData?.errors?.password ? "border-2 border-gold" :""}
                />   
                {actionData?.errors?.password ? (
                    <span className={incorrectFieldMsg}>{actionData?.errors.password}</span>
                  ) : null}
                </p> 
              <button
              type="submit"
              className="mt-8 bg-blue text-iceLightblue px-4 py-2 w-full rounded-md hover:bg-themeWhite hover:text-blue"
              >
              Login
              </button>
            </Form>
          </div>
      </div>

      <p className="mt-4 text-blue text-center font-semibold">
            {"Don't have an account? "}
            <Link to="/acces/register" prefetch="intent" className="mt-4 underline underline-offset-2 cursor-pointer hover:text-gold">Register here</Link>
        </p>
      </>
  );
}
