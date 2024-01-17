// app/sessions.ts
import { createCookieSessionStorage } from '@remix-run/node';
import {WeatherLocation} from './models/WeatherLocation';


type SessionData = {
  userId: string;
  userName: string;
  location: WeatherLocation[];
  ip:string;
  // Add any other session data you need
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    cookie: {
      name: process.env.NIMBUS_HUB_SESSION || '__session',
      httpOnly: true,
      secure: true,
      sameSite: 'lax', // Adjust as needed
      secrets: ["s3cret1"],
    },
  });

export { getSession, commitSession, destroySession };