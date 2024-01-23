// src/routes/login.tsx

import { useEffect, useState } from 'react';

import { EmailInput, PasswordInput } from '~/components/widgets/formInput';
import AccesAuth from '../components/widgets/accesAuth'
import { ActionFunctionArgs } from "@remix-run/node";

import {json, useActionData, Form, Link, useNavigate} from '@remix-run/react';
import Swal from 'sweetalert2';
import { FormErrors } from '~/components/widgets/formErrorInterface';
import { registerService } from '~/services/accesAPIService';
import tailwindConfig from 'tailwind.config';
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


    if(!formData.get("terms")){
      errors.terms =
        "You must agree to the terms and conditions";
    }

    if (Object.keys(errors).length > 0) {
      return json({ errors });
    }

    const response = await registerService(email,password);
    return (response);
  }
}


export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const actionData = useActionData<typeof action>(); 
  console.log(actionData);
  const navigate = useNavigate();


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
    else if(actionData?.authentication){
      Swal.fire({
        position: "center",
        title: "Welcome to NimbusHub!",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        customClass:{
            title: "text-blue", 
            timerProgressBar: "bg-gold",
            icon: "bg-iceLightblue"
        },
        background: colors.themeWhite,
        footer: "You will be redirected to <a class='text-blue underline' href='/acces/register'>Login Page</a>"
      }).then(()=>{
        navigate("/acces/login");
      })

    }
     
  }, [actionData]);



  const [agree, setAgree] = useState(false);

  const handleAgreeChange = () => {
    setAgree(!agree);
  };

  return (
      <>
      <div className='px-8 mt-12 lg:px-36'>
        <h1 className="text-2xl font-semibold mb-6 text-themeBlack text-center">Create account</h1>
          <AccesAuth/>
          <div className="mt-4 ">
            <div className='flex felx-row items-center justify-center gap-2 my-8'>
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
                    <span className='text-blue font-semibold p-2 text-xs'>{actionData?.errors.email}</span>
                  ) : null}
                </p>
                <p>
                <PasswordInput
                  password={password}
                  setPassword={setPassword}
                  twClass={actionData?.errors?.password ? "border-2 border-gold" : ""}
                />   
                {actionData?.errors?.password ? (
                    <span className='text-blue font-semibold p-2 text-xs'>{actionData?.errors.password}</span>
                  ) : null}
                </p>     
                <div className={'my-8'}>
                  <div className={actionData?.errors?.terms ? 'flex felx-row items-center justify-center border-b-2 border-gold pb-2 ' : 'flex felx-row items-center justify-center'}>
                    <input
                        type="checkbox"
                        className= {'m-2 p-2  accent-blue cursor-pointer'} 
                        checked={agree}
                        name="terms"
                        onChange={handleAgreeChange}
                    />
                    <p className={'text-blue text-xs '}>
                        I agree to the Terms of Service and Privacy Policy, which may be updated
                        from time to time, or may have been amended by mutual agreement between
                        NimbusHub and the company subscribed to the service.
                    </p>
                  </div>
                  {actionData?.errors?.terms ? (
                    <span className='text-blue font-semibold p-2 text-xs'>{actionData?.errors.terms}</span>
                  ) : null}
      
                </div>
                
                <button
                  type="submit"
                  className="bg-blue text-iceLightblue px-4 py-2 w-full rounded-md hover:bg-themeWhite hover:text-blue"
                  >
                  Register
                </button>
            </Form>
          </div>
      </div>
    
        <p className="mt-4 text-blue text-center font-semibold dark:text-themeWhite">
            {"Already have an account? "}
            <Link to="/acces/login" prefetch="intent" className="mt-4 underline underline-offset-2 cursor-pointer hover:text-gold dark:text-iceLightblue">Log in!</Link>
        </p>
      </>
  );
}
