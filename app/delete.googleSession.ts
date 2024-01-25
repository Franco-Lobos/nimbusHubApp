//GOOGLE 

import { createCookieSessionStorage } from "@remix-run/node";
import { ExternalUser } from "./models/sessions/externalUser";

// app/sessions.ts
export let externalUserSessionStorage = createCookieSessionStorage<ExternalUser>({
    cookie: {
      name: "__google_session",
      httpOnly: true,
      secure: true,
      sameSite: "lax", // Strict
      secrets: ["s3cret1"],
      maxAge: 15 * 60, // 15 minutes
      // also 12 hours
    },
  });
  
  export let { getSession, commitSession, destroySession } = externalUserSessionStorage;
  