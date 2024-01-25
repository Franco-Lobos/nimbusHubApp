import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa/index.js";

export const EmailInput: React.FC<{ email: string, setEmail:(email: string) => void, twClass?:string}>= ({email, setEmail, twClass})=>{
    return (
        <input
            type="email"
            id="email"
            name="email"
            className={"mt-4 p-2 w-full rounded-md bg-themeWhite text-blue focus:outline-none border-2 focus:border-blue "+ twClass}
            placeholder="Password *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
    )
}

export const PasswordInput:React.FC<{ password: string, setPassword:(password: string) => void, twClass?:string}>= ({password, setPassword, twClass})=>{
    const [inputPassword, setInputPassword] = useState<boolean>(true);

    const togglePassword = () => {
        setInputPassword(!inputPassword);
    }
    const eyeClasses = `text-blue absolute top-7 bottom-7 right-8  size-6`;
    return (
        <div className="relative">
        <input
            type={inputPassword ? "password" : "text"}
            id="password"
            name="password"
            className={`
            mt-4 p-2 w-full rounded-md bg-themeWhite text-blue focus:outline-none border-2 focus:border-blue
        
            ` + twClass}
            placeholder="Email address *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
            { inputPassword 
          ? <FaEyeSlash className={eyeClasses} onClick={togglePassword}/>
          : <FaEye className={eyeClasses} onClick={togglePassword}/>
          }
        </div>
    );
}