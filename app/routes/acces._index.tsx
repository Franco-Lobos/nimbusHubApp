// src/routes/login.tsx

import { useNavigate} from 'react-router-dom';
import { Link } from '@remix-run/react';
import { useState } from 'react';

import AccesForm from '~/components/widgets/AccesForm';
import AccesAuth from '~/components/widgets/AccesAuth';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Implement your login logic here
    
      console.log('Logging in...', email, password);
      // Redirect to a different page after successful login
      //navigate('/dashboard');

  };

  return (
      <>
      <div className='px-8 mt-24 lg:px-36'>
        <h1 className="text-2xl font-semibold mb-6 text-themeBlack text-center mb-8">Log in to your account</h1>
          <AccesAuth/>
          <div className="mt-4 ">
            <div className='flex felx-row items-center justify-center gap-2 my-8'>
                <hr className='border-2 border-blue  w-full h-0'></hr>
                <p className="text-sm text-blue text-center font-semibold">Or</p>
                <hr className='border-2 border-blue  w-full h-0'></hr>
            </div>
            <form>
              <AccesForm setEmail={setEmail} setPassword={setPassword} email={email} password={password}/>
              <button
              type="button"
              className="bg-blue text-iceLightblue px-4 py-2 w-full rounded-md hover:bg-themeWhite hover:text-blue"
              onClick={()=>handleLogin()}
              >
              Login
              </button>
            </form>
          </div>
      </div>

      <p className="mt-4 text-blue text-center font-semibold">
            {"Don't have an account? "}
            <Link to="/acces/register" prefetch="intent" className="mt-4 underline underline-offset-2 cursor-pointer hover:text-gold">Register here</Link>
        </p>
      </>
  );
}
