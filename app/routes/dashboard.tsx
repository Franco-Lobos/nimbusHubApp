import { type LoaderFunctionArgs, type MetaFunction, redirect, TypedResponse} from "@remix-run/node";
import { Outlet } from 'react-router-dom';
import Navigator from "~/components/widgets/dashboard/navigator";
import { allForecastsCookie } from "~/cookies.server";
import { TomorrowLocation, SessionLocation, isWeatherLocation } from "~/models/tomorrow/WeatherLocation";
import { locationService } from "~/services/userLocationAPIService";
import { commitSession, getSession } from "~/session";

export const meta: MetaFunction = () => {
  return [
    { title: "NinmbusHub" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({
  request,
}: LoaderFunctionArgs) {
  
  const session = await getSession(request.headers.get("Cookie"));
  if(!session.has("userId")){
    return redirect("/acces/login");
  }

  if(session.has("ip")){
    const sessionIp: string = session.get("ip")!;
    const sessionNewLocation: TomorrowLocation  = await locationService(sessionIp)!;
    console.log("DASHBOARD: ", sessionNewLocation)

    if(isWeatherLocation(sessionNewLocation)){
      if(session.has("location")){
        const allLocations: SessionLocation[] = session.get("location")!;
        let flag = false;

        let index = 0;
        while(index < allLocations.length){
          if(sessionNewLocation.name == allLocations[index].name){ // if i use lat and long may be different for a rounded location error
            flag=true;
            break;
          }
          index++;
        }

        if(!flag){
          allLocations.push(sessionNewLocation);
          session.set("location", allLocations);
          return redirect('/dashboard', { headers: { 'set-cookie': await commitSession(session) } })
        }
      }
      else{
        session.set("location", [sessionNewLocation]);
        return redirect('/dashboard', { headers: { 'set-cookie': await commitSession(session) } })
      }
    }
    else{
      console.log("no location:" , sessionNewLocation)
    }
   }
  return{}
};


export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
        {/* Rest of your content */}
        <Outlet />
      </div>
  );
}



