import { createCookie, CookieOptions } from "@remix-run/node"; // or cloudflare/deno

export const allForecastsCookie = createCookie("all-forecasts-cookie", {
  maxAge: 3_600 // 1 hour
});


export const allRealTimesCookie = createCookie("all-real-times-cookie", {
  maxAge: 3_600 // 1 minute
});



