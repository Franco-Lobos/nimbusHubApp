import { Outlet } from "@remix-run/react";

export default function Dashboard(){
    return(
        <>
            <Outlet/>
            <h1>Hello from Dashboard layout</h1>
        </>
    )
}