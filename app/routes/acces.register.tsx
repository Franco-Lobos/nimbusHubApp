// src/routes/login.tsx

import { useNavigate} from 'react-router-dom';
import { Link } from '@remix-run/react';
import { useState } from 'react';

import AccesForm from '~/components/widgets/AccesForm';
import AccesAuth from '~/components/widgets/AccesAuth';

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [agree, setAgree] = useState(false);

  const handleAgreeChange = () => {
    setAgree(!agree);
  };

  const handleRegister = async () => {
    // Implement your login logic here
    if (agree) {
      console.log('Registering in...', email, password);
      // Redirect to a different page after successful login
      //navigate('/dashboard');
    } else {
      alert('Please agree to the Terms of Service and Privacy Policy.');
    }
  };

  return (
      <>
      <div className='px-8 mt-24 lg:px-36'>
        <h1 className="text-2xl font-semibold mb-6 text-themeBlack text-center mb-8">Create account</h1>
          <AccesAuth/>
          <div className="mt-4 ">
            <div className='flex felx-row items-center justify-center gap-2 my-8'>
                <hr className='border-2 border-blue  w-full h-0'></hr>
                <p className="text-sm text-blue text-center font-semibold">Or</p>
                <hr className='border-2 border-blue  w-full h-0'></hr>
            </div>
            <form>
                <AccesForm setEmail={setEmail} setPassword={setPassword} email={email} password={password}/>
                <div className="my-8 flex felx-row items-center justify-center">
                    <input
                        type="checkbox"
                        className="m-6 accent-blue p-2 focus:accent-blue "
                        checked={agree}
                        onChange={handleAgreeChange}
                    />
                    <p className="text-blue text-xs">
                        I agree to the Terms of Service and Privacy Policy, which may be updated
                        from time to time, or may have been amended by mutual agreement between
                        NimbusHub and the company subscribed to the service.
                    </p>
                </div>
                <button
                type="button"
                className="bg-blue text-iceLightblue px-4 py-2 w-full rounded-md hover:bg-themeWhite hover:text-blue"
                onClick={()=>handleRegister()}
                >
                Register
            </button>
            </form>
          </div>
      </div>
    
        <p className="mt-4 text-blue text-center font-semibold">
            {"Already have an account? "}
            <Link to="/acces" prefetch="intent" className="mt-4 underline underline-offset-2 cursor-pointer hover:text-gold">Log in!</Link>
        </p>
      </>
  );
}
