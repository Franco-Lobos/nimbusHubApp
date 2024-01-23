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
import { SessionLocation } from '~/models/tomorrow/WeatherLocation';
import { defaultLocation } from '~/components/constants/defaults';
import { validateEmail, validatePassword } from '~/utils/inputValidations';


const colors = tailwindConfig.theme.extend.colors;

export async function action({
  request,
}: ActionFunctionArgs) {

  if (request.method === 'POST') {
    const formData = await request.formData();
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    const errors: FormErrors = {};

    const emailValidation:string | undefined = validateEmail(email)
    
    if (emailValidation) {
      errors.email = emailValidation!;
    }
    const passWordValidation = validatePassword(password)
    if (passWordValidation) {
      errors.password = passWordValidation!;
    }

    if (Object.keys(errors).length > 0) {
      return json({ errors });
    }

    const response: Response = await loginService(email,password);
    const responseBody = await response.json();
    if (response.status === 202) {
      ("LOADING...")
    } 
    if (response.status==200) {
      const session = await getSession(request.headers.get("Cookie"));
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

    return (responseBody);
  }
}

export async function loader({ request }: LoaderFunctionArgs) {

  const session = await getSession(request.headers.get("Cookie"));

  if(session.has("userId")){
    return redirect("/dashboard");
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
        <h1 className="text-2xl font-semibold mb-6 text-themeBlack text-center mb-8 dark:text-themeWhite">Log in to your account</h1>
          <AccesAuth/>
          <div className="mt-4">
            <div className='flex felx-row items-center justify-center gap-2 my-8 '>
                <hr className='border-2 border-blue dark:border-nimbusGray w-full h-0'></hr>
                <p className="text-sm text-blue text-center dark:text-nimbusGray  font-semibold"> Or </p>
                <hr className='border-2 border-blue dark:border-nimbusGray  w-full h-0'></hr>
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

      <p className="mt-4 text-blue text-center font-semibold dark:text-themeWhite ">
            {"Don't have an account? "}
            <Link to="/acces/register" prefetch="intent" className="mt-4 underline underline-offset-2 cursor-pointer hover:text-gold dark:text-iceLightblue duration-0 dark:duration-300">Register here</Link>
        </p>
      </>
  );
}
