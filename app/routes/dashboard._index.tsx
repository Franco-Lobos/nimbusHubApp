import { type LoaderFunctionArgs, type MetaFunction, redirect, ActionFunctionArgs} from "@remix-run/node";
import { WeatherLocation, isWeatherLocation } from "~/models/WeatherLocation";
import { locationService } from "~/services/userLocationAPIService";
import { commitSession, getSession } from "~/session";

import { Link } from 'react-router-dom';
import { useLoaderData } from "@remix-run/react";
import LogoIcon from "~/components/icons/LogoIcon";
import { cardStyleClass, mainBg } from "~/components/constants/styles";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import LocationSelector from "~/components/widgets/dashboard/location/locationSelector";
import { ICity } from "country-state-city";

export const meta: MetaFunction = () => {
  return [
    { title: "NinmbusHub" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({
  request,
}: ActionFunctionArgs) {
  const session = await getSession( request.headers.get("Cookie") );
  const formData = await request.formData();
  const rawLocation: ICity = JSON.parse(String(formData.get("location")));

  const locationToPush: WeatherLocation = {
    "lat": parseFloat(String(rawLocation.latitude)),
    "lon": parseFloat(String(rawLocation.latitude)),
    "name": String(rawLocation.name +", " +rawLocation.stateCode + ", "+ rawLocation.countryCode),
    "type": "administrative"
  }

  if(session.has("location")){
    const allLocations: WeatherLocation[] = session.get("location")!;
    let flag = false;

    allLocations.forEach((loc, index) => {
      if(locationToPush.name == loc.name){ // if i use lat and long may be different for a rounded location error
        allLocations.splice(index, 1); // 2nd parameter means remove one item only  
        return;
      }
    });
    allLocations.push(locationToPush);
    session.set("location", allLocations);
    return redirect('/dashboard/realTime/forecast', { headers: { 'set-cookie': await commitSession(session) } })
  
  }
  else{
    session.set("location", [locationToPush]);
  }
  return{}
}

export async function loader({
  request,
}: LoaderFunctionArgs) {
  
  const session = await getSession(request.headers.get("Cookie"));
  if(!session.has("userId")){
    return redirect("/acces/login");
  }

  if(session.has("ip")){
    const sessionIp: string = session.get("ip")!;
    const sessionNewLocation: any = await locationService(sessionIp);

    if(isWeatherLocation(sessionNewLocation)){
      if(session.has("location")){
        const allLocations: WeatherLocation[] = session.get("location")!;
        let flag = false;
        allLocations.forEach(loc => {
          if(sessionNewLocation.name == loc.name){ // if i use lat and long may be different for a rounded location error
              flag=true;
              return;
            }
          }
        );
        if(!flag){
          allLocations.push(sessionNewLocation);
          session.set("location", allLocations);
          return redirect('/dashboard/forecast/realTime', { headers: { 'set-cookie': await commitSession(session) } })
        }
        return allLocations;
      }
    }
    else{
      console.log("no location:" , sessionNewLocation)
    }
   }
  return{}
};


export default function DashboardIndex() {
  const data =  useLoaderData<typeof loader>();
  const location = data as WeatherLocation[];
  const lastLocation = location[location.length-1] ?? {name: "No location"};

  const [selectedModal, setSelectedModal] = useState<Boolean>(true); //default false
  const [redirectioned, setRedirecitoned] = useState<Boolean>(true); //default false
  return (
    <div className={mainBg}>
      {/* Main Content */}
      <AnimatePresence>
      {redirectioned && (
        <motion.div
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale:1}}
            exit={{opacity: 0, scale: 0, y:-200}}
            transition={{ duration: 0.3, delay:0 }}
            // initial={{ x: 0, opacity: 0, scale: 0.8}}
            // animate={{y:0, x:0, opacity: 1, scale:1}}
            // exit={{ y: -400 , opacity: 0}}
            // transition={{ duration: 0.3, delay:0 }}
            >
        <div className={`
        flex-1 flex flex-col overflow-hidden px-6 items-start`
        }>
          <div className="flex items-center justify-start py-12 flex-col w-full ">
            <LogoIcon numbProps={{className:"fill-blue/60 w-2/3 dark:fill-themeWhite", style:{height: "20vh"} }}></LogoIcon>
            <div className="text-center">  
              <h1 className="text-4xl font-bold text-themeBlack dark:text-iceLightblue">Welcome</h1>
              <p className="text-lg text-blue/60  dark:text-nimbusGray font-semibold">Unveil the Atmosphere</p>
            </div>
          </div>

          
          <div className={clsx(`
            w-full flex flex-col`, 
            selectedModal
              ? "pb-24"
              : "pb-0" 
            )}>
  
            <Link to={selectedModal ? `#` :`/dashboard/realtime/forecast`} onClick={() => selectedModal ? setSelectedModal(false) : setRedirecitoned(false)}>
                <div className={`cursor-pointer bg-snowGray/0
                ${cardStyleClass}
                `}>
                  <h2 className={
                    clsx(
                    `
                    ${
                      selectedModal
                      ? "text-blue/75 dark:text-iceLightblue/60 "
                      : "text-themeBlack dark:text-themeWhite/90"
                    }
                    font-bold uppercase`
                    )}
                  >Current Location</h2>
                  <AnimatePresence>{
                    !selectedModal
                    ?
                      <motion.div
                        initial={{ height: 0, opacity: 0}}
                        animate={{ height: "min-content", opacity: 1}}
                        exit={{ height: 0 , opacity: 0}}
                      >
                    <p className={
                      `text-blue/90 dark:text-iceLightblue border-t font-semibold border-gold w-fit pr-2 py-6 mt-2`
                      }>{lastLocation.name}</p>
                  </motion.div>
                  : null
                  }</AnimatePresence>
              </div>
            </Link>
        

            <motion.div
                initial={{ scale:0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                > 
                <div className={`bg-snowGray/0
                ${cardStyleClass}
                `}>
                  <h2
                    onClick={() => setSelectedModal(!selectedModal)}
                    className={`
                      font-bold uppercase cursor-pointer
                      ${
                        selectedModal
                        ? "text-themeBlack dark:text-themeWhite/90"
                        : "text-blue/75 dark:text-iceLightblue/60 "
                      }
                  `}>Choose another location</h2>
                  <AnimatePresence>{
                      selectedModal ?
                      <motion.div
                        initial={{ height: 0, opacity: 0}}
                        animate={{ height: "min-content", opacity: 1}}
                        exit={{ height: 0 , opacity: 0}}
                      ><div className={`
                    text-themeWhite border-t  w-full pr-2 py-6 mt-2
                    ${
                      selectedModal
                      ? "border-gold"
                      : "border-iceLightblue"
                    }
                    `}
                    >
                    <LocationSelector />

                    </div>
                    </motion.div>
                    : null
                  }</AnimatePresence>
                </div>
            </motion.div>
            

                  
          </div>
        </div>
        </motion.div>
      )}
      </AnimatePresence>

    </div>
  );
}



