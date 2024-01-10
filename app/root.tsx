import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css";


import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ReactNode } from "react";
import LogoIcon from "./components/icons/LogoIcon";
import LogoText from "./components/icons/LogoText";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => {
  return [
    { title: "NinmbusHub" },
    { name: "description", content: "Welcome to NimbusHub!" },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
}


function Layout({children}: {children: ReactNode}){
  return(
    <div className="h-screen overflow-hidden">
      <main className="h-full">
      {children}
      </main>
    </div>
  )
}
