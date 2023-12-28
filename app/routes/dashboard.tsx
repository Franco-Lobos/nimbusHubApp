import { Outlet } from "@remix-run/react";

export default function Dashboard(){
    return(
        <>
            <h1>Hello from Dashboard layout</h1>
            <Outlet/>
        </>
    )
}