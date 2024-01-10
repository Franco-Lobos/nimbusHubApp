// src/routes/login.tsx
import {  FaCheckCircle } from 'react-icons/fa/index.js';
import LogoIcon from '~/components/icons/LogoIcon';
import LogoText from '~/components/icons/LogoText';
import { Link } from '@remix-run/react';
import LoginImage from '~/components/images/LoginImage';
import { Outlet } from "@remix-run/react";

export default function Acces() {

  const LoginImageProps ={
    containerProps: {className:"w-full p-24"},
    text1Props: {className:"fill-themeWhite"},
    text2Props: {className:"fill-iceLightblue"},
  }

  const logoIconProps = {
    numbProps: {className:"fill-themeWhite w-20 "},  
  };
  
  const textIconProps = {
    containerProps: {className:"w-24"},
    text1Props: {className:"fill-themeWhite"},
    text2Props: {className:"fill-iceLightblue"},
  };

  return (
    <>
    <div className="h-full lg:h-screen flex flex-nowrap items-center justify-center bg-iceLightblue lg:justify-start">
        
        <div className="h-full rounded w-full self-baseline lg:w-3/5">
        <nav className="py-8 bg-themeBlack lg:flex lg:justify-start lg:pl-32 pt-8">
            <Link to="/" prefetch="intent" className="inline-block max-w-content flex flex-row justify-center items-center gap-2">
                <LogoIcon {...logoIconProps} ></LogoIcon>
                <LogoText {...textIconProps} > </LogoText> 
            </Link>
        </nav>
        <Outlet/>
        </div>
      <div className="hidden lg:flex w-2/5 text-themeWhite bg-themeBlack min-h-screen flex flex-col items-center justify-center">
        <LoginImage {...LoginImageProps} ></LoginImage>
        <div className='w-full px-24'>
          <div className='w-full flex justify-start items-center text-iceBlue'>
            <FaCheckCircle className="mr-4 text-gold"></FaCheckCircle>
            <h2 className="text-xl font-semibold">Real-Time Weather Data</h2>
          </div>
          <p className="mt-2 text-gray-300 text-left">
            Access up-to-the-minute weather information for your chosen location, providing accurate and current temperature data.
          </p>

          <div className='w-full flex justify-start items-center text-iceBlue mt-6'>
            <FaCheckCircle className="mr-4 text-gold"></FaCheckCircle>
            <h2 className="text-xl font-semibold">Historical Temperature Trends</h2>
          </div>
          <p className="mt-2 text-gray-300 text-left">
            Explore temperature trends from the last few days, helping you understand historical changes and patterns.
          </p>

          <div className='w-full flex justify-start items-center text-iceBlue mt-6'>
            <FaCheckCircle className="mr-4 text-gold"></FaCheckCircle>
            <h2 className="text-xl font-semibold">Accurate Weather Forecast</h2>
          </div>
          <p className="mt-2 text-gray-300 text-left">
            Plan ahead with confidence using Nimbus Hub's reliable weather forecast, ensuring you are prepared for upcoming conditions.
          </p>
        </div>
      </div>

    </div>
    </>
  );
}
