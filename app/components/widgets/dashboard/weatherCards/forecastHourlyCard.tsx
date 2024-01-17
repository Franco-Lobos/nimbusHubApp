import { HourlyItem } from "~/models/WeatherHourly";
import { SunIcon, CloudIcon,CloudSunIcon,  SnowIcon, RainIcon  } from "~/components/images/status/icons";

const ForecastHourlyCard : React.FC<{ hourlyItem: HourlyItem }> = ({ hourlyItem }) => {
    const code = hourlyItem.values.weatherCode;
    let selectedComponent;

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
          selectedComponent = null; // Handle unknown weather codes
          break;
    }


    return(
        <li key={hourlyItem.time} className="mb-4 p-2 flex flex-col justify-center items-center">
            <p className="text-lg text-blue font-semibold">{new Date(hourlyItem.time).getHours().toString()}</p>
            {selectedComponent}
            <p className="text-lg text-blue  font-semibold">{hourlyItem.values.temperature}°</p>
            {/* Add more details as needed */}
        </li>
    )
}

export default ForecastHourlyCard;