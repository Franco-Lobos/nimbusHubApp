// src/routes/login.tsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa/index.js';
import LogoText from '~/components/icons/LogoText';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Implement your login logic here
    console.log('Logging in...');
    // Redirect to a different page after successful login
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-column flex-nowrap items-center justify-center bg-white">
      <div className="bg-iceBlue p-12 rounded shadow-md w-96 self-baseline mt-8">
        <h1 className="text-2xl font-semibold mb-6 text-black text-center mb-8">Login in to your account</h1>
            <div className="mt-2 flex flex-col gap-5">
            {/* Google login button */}
            <button
              type="button"
              className="w-full flex justify-center items-center bg-white text-gold px-4 py-2 rounded-md hover:bg-gold hover:text-white focus:outline-none "
            >
              <FaGoogle className="mr-2" />
              <span>Google</span>
            </button>
            {/* Facebook login button */}
            <button
              type="button"
              className="w-full flex justify-center items-center bg-white text-blue px-4 py-2 rounded-md hover:bg-blue hover:text-white focus:outline-none"
            >
              <FaFacebook className="mr-2" />
              <span>Facebook</span>
            </button>
          </div>
        <div className="mt-4 ">
            <div className='flex felx-row items-center justify-center gap-2 my-8'>
                <hr className='border-2 border-white  w-full h-0'></hr>
                <p className="text-sm text-blue text-center font-semibold">Or</p>
                <hr className='border-2 border-white  w-full h-0'></hr>
            </div>
          <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue"
              placeholder="Email address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue"
              placeholder="Password *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-blue text-white px-4 py-2 w-full rounded-md hover:bg-blue focus:outline-none"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        </div>
        
        </div>
    </div>
  );
}
