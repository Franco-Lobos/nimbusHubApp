import { DailyItem } from "~/models/WeatherDaily";
import { SunIcon, CloudIcon,CloudSunIcon,  SnowIcon, RainIcon  } from "~/components/images/status/icons";
import { useEffect, useState } from "react";
import clsx from 'clsx';


const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const ForecastDailyCard : React.FC<{ dailyItem: DailyItem, today?:boolean,  minTempWeek:number,  maxTempWeek:number }> = ({ dailyItem, today=false, minTempWeek, maxTempWeek }) => {
    const code = dailyItem.values.weatherCodeMax;
    let selectedComponent;
    const marginLeft = Math.round((dailyItem.values.temperatureMin - minTempWeek) * 100 / (maxTempWeek - minTempWeek));
    const marginRight = Math.round((maxTempWeek - dailyItem.values.temperatureMax) * 100 / (maxTempWeek - minTempWeek));

    switch (code) {
        case 1000:
            const sunColor = 'gold';
          selectedComponent = <SunIcon containerProps={{ className: "fill-"+sunColor + " stroke-gold stroke-4 " }} sunClasses={"fill-"+sunColor}  coreSunClasses={"fill-"+sunColor}/>;
          break;
        case 1100:
        case 1101:
          selectedComponent = <CloudSunIcon containerProps={{ className: "" }} cloudClasses={"fill-snowGray stroke-snowGray stroke-4"} sunClasses={"fill-gold stroke-gold stroke-4"}/>;
          break;
        case 1102:
        case 1001:
          selectedComponent = <CloudIcon containerProps={{ className: "" }} cloudClasses={"fill-snowGray stroke-snowGray stroke-4"} />;
          break;
        case 4000:
        case 4001:
        case 4200:
        case 4201:
          selectedComponent = <RainIcon containerProps={{ className: "" }}  cloudClasses={"fill-snowGray stroke-snowGray stroke-4"} waterClasses={"fill-iceBlue stroke-iceBlue stroke-4"} />;
          break;
        case 5000:
        case 5001:
        case 5100:
        case 5101:
            selectedComponent = <SnowIcon containerProps={{ className: "" }}   cloudClasses={"fill-snowGray stroke-snowGray stroke-4"} snowClasses={"fill-snowGray stroke-snowGray stroke-4"}/>;
        break;
        // Add more cases as needed
      
        default:
          selectedComponent = <CloudIcon containerProps={{ className: "" }} cloudClasses={"fill-snowGray stroke-snowGray stroke-4"} />;
          break;
    }

    return(
        <li key={dailyItem.time} className="mb-4 p-2 flex flex-row justify-between items-center">
            <p className="text-lg text-blue font-semibold lex-1 w-24">
            <span className="text-blue/60">{""}{new Date(dailyItem.time).getDate()}{" "}</span>
              {today ? "Today" : weekday[new Date(dailyItem.time).getDay()]}
            </p>
            <div className="w-20">
              {selectedComponent}
            </div>
            <div className="flex felx-row justify-between flex-1 w-20 items-center">
              <p className="text-lg text-blue/60 font-semibold flex-1 text-center">{Math.round(dailyItem.values.temperatureMin)}°</p>
              <div className="bg-blue/40 w-24 h-1 rounded-md ">
              <div className={`bg-gold h-1 rounded-md w-auto`} style={{marginLeft: marginLeft + "%", marginRight: marginRight + "%"}}></div>

              </div>
              <p className="text-lg text-blue font-semibold flex-1 text-center">{Math.round(dailyItem.values.temperatureMax)}°</p>
            </div>
            {/* Add more details as needed */}
        </li>
    )
}

export default ForecastDailyCard;