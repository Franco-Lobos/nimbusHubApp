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
    <>
      <nav className="py-10 bg-white">
          <Link to="/" prefetch="intent" className="inline-block max-w-content flex flex-row justify-center items-center gap-2">
              <LogoIcon className="w-20 fill-blue" ></LogoIcon>
              <LogoText className="w-24" > </LogoText> 

              {/* <LogoText className="flex-2 w-64"></LogoText> */}
          </Link>
      </nav>
      <main>
      {children}
      </main>
    </>
  )
}
