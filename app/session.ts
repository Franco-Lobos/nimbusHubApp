// app/sessions.ts
import { createCookieSessionStorage } from '@remix-run/node';
import {SessionLocation} from './models/tomorrow/WeatherLocation';

type SessionData = {
  userId: string;
  userName: string;
  email: string;
  location: SessionLocation[];
  ip:string;
  oauth2State: string;
  // Add any other session data you need
};

type SessionFlashData = {
  error: string;
};

export let userSessionStorage = createCookieSessionStorage<SessionData, SessionFlashData>({
  cookie: {
    name: process.env.NIMBUS_HUB_SESSION || '__session',
    httpOnly: true,
    secure: true,
    sameSite: 'lax', // Strict
    secrets: ["s3cret1"],
    maxAge: 5 * 60* 3, // 5 minutes
    // also 12 hours
  },
});
 
    
export let { getSession, commitSession, destroySession } = userSessionStorage;
    