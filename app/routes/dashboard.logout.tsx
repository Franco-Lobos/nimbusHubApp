import { ActionFunctionArgs, redirect } from '@remix-run/node';
import { Form, Link } from '@remix-run/react';
import { getSession, destroySession } from 'app/session'
import { buttonClass, buttonClass2, buttonClass3, cardStyleClass, mainBg, selectorStyleClass } from '~/components/constants/styles';
import { allForecastsCookie, allHistoriesCookie, allRealTimesCookie } from '~/cookies.server';

export function deleteAllCookies(cookieHeader: string | null, cookiesToDelete: string[] = []): string[] {
  const cookies: string[] = [];
  if (cookieHeader) {
    cookieHeader.split(';').forEach((cookie, index) => {
      const parts = cookie.split('=');
      const name = parts[0].trim();
      if (name) {
        cookies.push(`${name}=; Path=/; MaxAge=0; HttpOnly; Secure; SameSite=Lax`);
      }
    });
  }
  return cookies;
}

export const action = async ({
  request,
}: ActionFunctionArgs) =>{
  const allCookies = request.headers.get('Cookie')
  const session = await getSession(allCookies);
  const destroySessionLogin: string = await destroySession(session);

  const updatedCookies = deleteAllCookies(allCookies);
  console.log(updatedCookies)
  const headers = new Headers()
  headers.append('Set-Cookie', destroySessionLogin)

  updatedCookies.forEach((cookie) => {
    headers.append('Set-Cookie', cookie)
  })

  return redirect("/", {
    headers
  });
};

export default function LogoutRoute() {
  return (
    <div className={`${mainBg} $flex flex-row items-center justify-start pt-28 px-6 lg:justify-center lg-py:0`}>
      <div className={` ${cardStyleClass} w-full mt-36 py-8 px-10 lg:w-1/2 lg:m-0`}>
        <p className='
        text-center font-semibold text-themeBlack dark:text-themeWhite text-xl
        border-b-2 pb-2 border-gold dark:border-gold uppercase
        '>Are you sure you want to log out?</p>
        <div className='flex flex-col items-center justify-center w-full gap-14  mt-12'>
          <Form method="post" className={`${buttonClass2}`}>
            <button>Logout</button>
          </Form>
          <Link to="/dashboard" className={`${buttonClass3} `}>Never mind</Link>
        </div>
      </div>
    </div>
  );
}
