import { type LoaderFunctionArgs, type MetaFunction, redirect} from "@remix-run/node";
import { Outlet } from 'react-router-dom';
import Navigator from "~/components/widgets/dashboard/navigator";
import { getSession } from "~/session";

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

  return {};
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


