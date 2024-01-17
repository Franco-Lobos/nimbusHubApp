import { type LoaderFunctionArgs, type MetaFunction, redirect} from "@remix-run/node";
import { Outlet } from 'react-router-dom';
import Navigator from "~/components/widgets/dashboard/navigator";
import { WeatherLocation, isWeatherLocation } from "~/models/WeatherLocation";
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
    const sessionNewLocation: any = await locationService(sessionIp);

    if(isWeatherLocation(sessionNewLocation)){
      if(session.has("location")){
        const allLocations: WeatherLocation[] = session.get("location")!;
        console.log(allLocations)
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
      }
    }
    else{
      console.log("no location:" , sessionNewLocation)
    }
 
    return {};
  }
};

export default function Dashboard() {
  
  return (
    <div className="flex h-screen bg-themeWhite flex-col lg:flex-row">
    {/* Main Content */}
    <div className="flex-1 flex flex-col overflow-hidden  overflow-x-hidden overflow-y-auto px-6">
      <Outlet />
    </div>
    <Navigator />

  </div>
  );
}


