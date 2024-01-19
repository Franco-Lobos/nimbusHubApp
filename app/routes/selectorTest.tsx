import {  type LoaderFunctionArgs, type MetaFunction ,redirect} from "@remix-run/node";
import { getSession } from "~/session";
import LocationSelector from "~/components/widgets/dashboard/location/locationSelector";


export  const Test = () => {
    return <div className="overfllow-scroll">
        <LocationSelector />
        </div>
}
export default Test