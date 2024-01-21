import { createCookie, CookieOptions } from "@remix-run/node"; // or cloudflare/deno

export const allForecastsCookie = createCookie("all-forecasts-cookie", {
  maxAge: 2_1600 // 6 hours
});


