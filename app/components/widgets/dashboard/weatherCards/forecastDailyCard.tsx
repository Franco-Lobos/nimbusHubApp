import { DailyItem } from "~/models/tomorrow/WeatherDaily";
import { SunIcon, CloudIcon,CloudSunIcon,  SnowIcon, RainIcon  } from "~/components/images/status/icons";
import { useEffect, useState } from "react";
import clsx from 'clsx';
import { motion } from "framer-motion";
import { mainBg } from "~/components/constants/styles";


const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const ForecastDailyCard : React.FC<{ dailyItem: DailyItem,  minTempWeek:number,  maxTempWeek:number, indx:number }> = ({ dailyItem,  minTempWeek, maxTempWeek, indx }) => {
    const code = dailyItem.values.weatherCodeMax;
    let selectedComponent;
    const marginLeft = Math.round((dailyItem.values.temperatureMin - minTempWeek) * 100 / (maxTempWeek - minTempWeek));
    const marginRight = Math.round((maxTempWeek - dailyItem.values.temperatureMax) * 100 / (maxTempWeek - minTempWeek));

    switch (code) {
        case 1000:
          const sunColor = 'fill-gold dark:fill-yellow';
          selectedComponent = <SunIcon containerProps={{ className: sunColor + " stroke-gold stroke-4 dark:fill-yellow" }} sunClasses={sunColor}  coreSunClasses={sunColor}/>;
            break;
        case 1100:
        case 1101:
          selectedComponent = <CloudSunIcon containerProps={{ className: "" }} cloudClasses={"fill-snowGray stroke-snowGray stroke-4 dark:fill-themeWhite/80 dark:stroke-themeWhite/80"} sunClasses={"fill-gold stroke-gold stroke-4  dark:fill-yellow dark: stroke-yellow "}/>;
          break;
        case 1102:
        case 1001:
          selectedComponent = <CloudIcon containerProps={{ className: "" }} cloudClasses={"fill-snowGray stroke-snowGray stroke-4 dark:fill-themeWhite/80 dark:stroke-themeWhite/80"} />;
          break;
        case 4000:
        case 4001:
        case 4200:
        case 4201:
          selectedComponent = <RainIcon containerProps={{ className: "" }}  cloudClasses={"fill-snowGray stroke-snowGray stroke-4 dark:fill-themeWhite/80 dark:stroke-themeWhite/80"} waterClasses={"fill-iceBlue stroke-iceBlue stroke-4 dark:fill-iceLightblue dark:stroke-iceLightblue"} />;
          break;
        case 5000:
        case 5001:
        case 5100:
        case 5101:
          selectedComponent = <SnowIcon containerProps={{ className: "" }}   cloudClasses={"fill-snowGray stroke-snowGray stroke-4 dark:fill-themeWhite/80 dark:stroke-themeWhite/80"} snowClasses={"fill-snowGray stroke-snowGray stroke-4 dark:fill-iceBlue dark:stroke-iceBlue"}/>;
          break;
        // Add more cases as needed
      
        default:
          selectedComponent = <CloudIcon containerProps={{ className: "" }} cloudClasses={"fill-snowGray stroke-snowGray stroke-4 dark:fill-themeWhite/80 dark:stroke-themeWhite/80"} />;
          break;
    }

    return(
        <motion.li
          initial={{ height: 0, opacity: 0}}
          animate={{ height: "min-content", opacity: 1}}
          transition ={{duration: 0.05, delay: 0.4 + indx * 0.05 }}
          key={dailyItem.time}
        >
        <li key={dailyItem.time} className={clsx(
          indx==0 || indx==-1  ? `bg-themeWhite/25 dark:bg-iceLightblue/20 rounded-lg border-b border-gold` : "",
          `
          mb-4 p-2 flex flex-row justify-between items-center lg:flex-col lg:items-center
          lg:w-[15vw]`)}>
            <p className={clsx(
              `flex flex-col items-start pl-4 lg:items-center lg:p-0
              text-lg text-blue lg:text-center dark:text-themeWhite/90 font-semibold lex-1 w-24`,
              indx==0 || indx==-1 ? `text-themeBlack  dark:text-themeWhite/90` : `text-themeBlack/70  dark:text-nimbusGray/70`
              )}>
            <span className={clsx(
              `text-blue/60  dark:text-nimbusGray/90 pr-2 lg:p-0`,
              )}>{new Date(dailyItem.time).getDate()}{" "}</span>
              {indx==0 ? "Today" : indx==-1 ? "Yesterday": weekday[new Date(dailyItem.time).getDay()]}
            </p>
            <div className="w-20 lg:w-min">
              {selectedComponent}
            </div>
            <div className="">
              <div className="flex felx-row justify-between flex-1 items-center w-full pb-2">
                <p className="text-lg text-blue/60 dark:text-nimbusGray/90 font-semibold flex-1 text-left text-sm">{Math.round(dailyItem.values.temperatureMin)}°</p>
                {/* <div className="lg:hidden bg-blue/40 w-24 h-1 rounded-md dark:bg-iceLightblue/40 mx-2">
                  <div className={`bg-gold h-1 rounded-md w-auto`} style={{marginLeft: marginLeft + "%", marginRight: marginRight + "%"}}></div>
                </div> */}
                <p className="text-lg text-blue dark:text-themeWhite/90 font-semibold flex-1 text-right text-sm">{Math.round(dailyItem.values.temperatureMax)}°</p>
              </div>

              <div className="bg-blue/40 w-24 h-1 rounded-md dark:bg-iceLightblue/40 mx-2">
                  <div className={`bg-gold h-1 rounded-md w-auto`} style={{marginLeft: marginLeft + "%", marginRight: marginRight + "%"}}></div>
                </div>
              </div>
            {/* Add more details as needed */}
        </li>
        </motion.li>
    )
}

export default ForecastDailyCard;