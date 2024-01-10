import { FaFacebook, FaGoogle } from 'react-icons/fa/index.js';

export default function AccesAuth(){
    return(
        <div className="mt-2 flex flex-col gap-8">
        {/* Google login button */}
        <button
          type="button"
          className="w-full flex justify-start items-center bg-white text-gold px-12 py-2 rounded-md hover:bg-gold hover:text-white focus:outline-none "
        >
          <FaGoogle className="mr-4" />
          <span>Continue whit Google</span>
        </button>
        {/* Facebook login button */}
        <button
          type="button"
          className="w-full flex justify-start items-center bg-white text-blue px-12 py-2 rounded-md hover:bg-blue hover:text-white focus:outline-none"
        >
          <FaFacebook className="mr-4" />
          <span>Continue whit Facebook</span>
        </button>
      </div>
    )
}