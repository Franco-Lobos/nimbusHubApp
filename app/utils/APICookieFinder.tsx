export function apiCookieFinder(cookieHeader: string | null): boolean {
    let flag: boolean = false;
    
    if (cookieHeader) {
      cookieHeader.split(';').forEach((cookie) => {
        const parts = cookie.split('=');
        const name = parts[0].trim();
        if (name == process.env.API_NIMBUS_AUTH!) {
          flag = true;
        }
      });
    }
    return flag;
  }