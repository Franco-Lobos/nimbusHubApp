import type { LinksFunction, MetaFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css";
import ThemeProvider, { useTheme } from './theme/themeProvider';

import ToggelButton from './theme/toggleButton';
import './tailwind.css';
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";


import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useOutlet,
  useRouteError,
} from "@remix-run/react";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => {
  return [
    { title: "NinmbusHub" },
    { name: "description", content: "Welcome to NimbusHub!" },
  ];
};


export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}


function App() {
  const { theme, toggleTheme} = useTheme();
  const outlet = useOutlet();

  return (
    <html lang="en" className={clsx(theme) }>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning={true} >
        <AnimatePresence  initial={false}>
          <motion.main
            key={"main"}
            initial={{ x: "-10%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            exit={{ y: "-10%", opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {outlet}
          </motion.main>
        </AnimatePresence>
        <ToggelButton></ToggelButton>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function Root() {

  return (
    <ThemeProvider>
        <App></App>
    </ThemeProvider>
  );
}

export default Root;
