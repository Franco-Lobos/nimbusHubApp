// src/routes/login.tsx
import {  FaCheckCircle } from 'react-icons/fa/index.js';
import LogoIcon from '~/components/icons/LogoIcon';
import LogoText from '~/components/icons/LogoText';
import { Link } from '@remix-run/react';
import LoginImage from '~/components/images/LoginImage';
import { Outlet } from "@remix-run/react";
import { cardStyleClass, mainBg } from '~/components/constants/styles';

export default function Acces() {

  const LoginImageProps ={
    containerProps: {className:"w-full p-24"},
    text1Props: {className:"fill-themeWhite"},
    text2Props: {className:"fill-iceLightblue"},
  }

  const logoIconProps = {
    numbProps: {className:" w-20 fill-blue/60  dark:fill-themeWhite delay-0 duration-0 transition-none"},  
  };
  
  const textIconProps = {
    containerProps: {className:"w-24 "},
    text1Props: {className:"fill-themeBlack dark:fill-themeWhite  "},
    text2Props: {className:"fill-themeBlack/80 dark:fill-iceLightblue "},
  };

  return (
    <>
      <div className={ `
        h-screen flex flex-nowrap items-center justify-center bg-iceLightblue lg:justify-start
        pb-12 lg:p-0 
        ${mainBg}`}>
        <div className={`
        h-full rounded w-full self-baseline lg:w-3/5
        ${cardStyleClass} lg:p-0 lg:m-0 lg:rounded-none
        `}>
        <nav className={`
            py-8 lg:flex lg:justify-start lg:pl-32 pt-8
            lg:bg-themeWhite dark:lg:bg-themeBlack
          `}>
            <Link to="/" prefetch="intent" className="
            inline-block max-w-content flex flex-row justify-center items-center gap-2
            ">
                <LogoIcon {...logoIconProps} ></LogoIcon>
                <LogoText {...textIconProps} > </LogoText> 
            </Link>
        </nav>
        <Outlet/>
          </div>
          <div className="hidden bg-themeWhite lg:flex w-2/5 text-themeWhite dark:bg-themeBlack min-h-screen flex flex-col items-center justify-center">
        <LoginImage {...LoginImageProps} ></LoginImage>
        <div className='w-full px-24'>
          <div className='w-full flex justify-start items-center'>
            <FaCheckCircle className="mr-4 text-gold"></FaCheckCircle>
            <h2 className="text-xl font-semibold text-themeBlack dark:text-iceBlue">Real-Time Weather Data</h2>
          </div>
          <p className="mt-2 text-left  text-blue dark:text-themeWhite">
            Access up-to-the-minute weather information for your chosen location, providing accurate and current temperature data.
          </p>

          <div className='w-full flex justify-start items-center mt-6'>
            <FaCheckCircle className="mr-4 text-gold"></FaCheckCircle>
            <h2 className="text-xl font-semibold text-themeBlack dark:text-iceBlue">Historical Temperature Trends</h2>
          </div>
          <p className="mt-2 text-left  text-blue dark:text-themeWhite">
            Explore temperature trends from the last few days, helping you understand historical changes and patterns.
          </p>

          <div className='w-full flex justify-start items-center mt-6'>
            <FaCheckCircle className="mr-4 text-gold"></FaCheckCircle>
            <h2 className="text-xl font-semibold text-themeBlack dark:text-iceBlue">Accurate Weather Forecast</h2>
          </div>
          <p className="mt-2 text-left text-blue dark:text-themeWhite">
            Plan ahead with confidence using Nimbus Hub's reliable weather forecast, ensuring you are prepared for upcoming conditions.
          </p>
        </div>
        </div>
      </div>
    </>
  );
}
