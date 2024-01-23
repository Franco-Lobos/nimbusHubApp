import { HourlyItem } from "~/models/WeatherHourly";
import { SunIcon, CloudIcon,CloudSunIcon,  SnowIcon, RainIcon  } from "~/components/images/status/icons";
import { addZeroToNumber } from "~/library/stringManagement";
import clsx from "clsx";

const ForecastHourlyCard : React.FC<{ hourlyItem: HourlyItem, index:number }> = ({ hourlyItem, index }) => {
    const code = hourlyItem.values.weatherCode;
    let selectedComponent;

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
        <li key={hourlyItem.time} className={clsx(
          index==0 ? `bg-themeWhite/25 dark:bg-iceLightblue/20 rounded-lg border-b border-gold dark:border-gold` : "",
          `
        mb-4 p-2 flex flex-col justify-center items-center lg:w-[4vw]
        `)}>
            <p className={clsx(
              `text text-blue dark:text-nimbusGray font-bold `,
              index==0 ? ` text-themeBlack dark:text-themeWhite` : `text-themeBlack/70`)}>{index==0 ? "Now" :addZeroToNumber(new Date(hourlyItem.time).getHours())}</p>
            {selectedComponent}
            <p className="text text-blue dark:text-nimbusGray font-bold">{Math.round(hourlyItem.values.temperature)}°</p>
            {/* Add more details as needed */}
        </li>
    )
}

export default ForecastHourlyCard;