import { ActionFunctionArgs, redirect } from '@remix-run/node';
import { Form, Link } from '@remix-run/react';
import { getSession, destroySession } from 'app/session'
import { buttonClass, buttonClass2, buttonClass3, cardStyleClass, mainBg, selectorStyleClass } from '~/components/constants/styles';


export const action = async ({
  request,
}: ActionFunctionArgs) =>{
  const session = await getSession(request.headers.get('Cookie'));
  const cookiesToDelete = ['NzBWWVN6kXt66yG6j7po9eQEGXD3L', 'all-forecasts-cookie', 'all-real-times-cookie', 'all-histories-cookie'];
  const deleteCookiePromises = cookiesToDelete.map(async (cookieName) => {
    // Delete cookies on the client side
    // document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    // Set a Set-Cookie header for deleting cookies on the server side
    return `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });

  // Wait for all promises to complete
  const deletedCookiesHeaders = await Promise.all(deleteCookiePromises);

  return redirect('/', {
    headers: {
      'Set-Cookie': [...deletedCookiesHeaders, await destroySession(session)].join('; '),
    },
  });
};

export default function LogoutRoute() {
  return (
    <div className={`${mainBg} $flex flex-row items-center justify-start`}>
      <div className={` ${cardStyleClass} w-full mt-36 py-8 px-10`}>
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
