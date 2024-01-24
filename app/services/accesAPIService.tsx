import { config as dotenvConfig } from 'dotenv';

dotenvConfig();


export const externalUserAcces = async (accesToken: string, refreshToken: string,  tokenId: string) => {
  const tomorrowUrl = `${process.env.AUTH_URL}/google`; 

  const data = await fetch(tomorrowUrl, {
      method: 'POST', 
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify({
          "accesToken": accesToken,
          "refreshToken":refreshToken,
          "tokenId":tokenId,
      }),
      credentials: 'include'
  })

  return data;
}


export const loginService = async (email: string, password: string) => {
    const tomorrowUrl = `${process.env.AUTH_URL}/login`; 

    const data = await fetch(tomorrowUrl, {
        method: 'POST', 
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({
            "email": email,
            "password":password,
        }),
        credentials: 'include'
    })

    return data;
}


export const registerService = async (email: string, password: string) => {
  const tomorrowUrl = `${process.env.AUTH_URL}/register`;

    const data = await fetch(tomorrowUrl, {
        method: 'POST', 
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({
          "email": email,
          "username": email,
          "password":password,
        }),
        credentials: 'include'
    })

  return data.json();
}