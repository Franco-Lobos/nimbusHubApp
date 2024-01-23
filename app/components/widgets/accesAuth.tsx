import { FaFacebook, FaGoogle } from 'react-icons/fa/index.js';

export default function AccesAuth(){
    return(
        <div className="mt-2 flex flex-col gap-8">
        {/* Google login button */}
        <button
          type="button"
          className={`
          w-full flex justify-start items-center  text-gold px-8 py-2 rounded-md hover:bg-gold hover:text-white focus:outline-none
          bg-themeBlack text-themeWhite hover:bg-themeBlack/60
          `}
        >
          <FaGoogle className="mr-4 fill-gold"  style={{ fontSize: '20px' }}/>
          <span className='text-themeWhite/80'>Continue whit Google</span>
        </button>
        {/* Facebook login button */}
        <button
          type="button"
          className={`
            w-full flex justify-start items-center  text-blue px-8 py-2 rounded-md hover:bg-blue hover:text-white focus:outline-none
            bg-themeBlack text-themeWhite hover:bg-themeBlack/60
            `}
        >
          <FaFacebook className="mr-4 fill-iceBlue"  style={{ fontSize: '20px' }}/>
          <span className='text-themeWhite/80'>Continue whit Facebook</span>
        </button>
      </div>
    )
}