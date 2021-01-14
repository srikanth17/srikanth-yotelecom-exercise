import { RegisterRequest, UserRequest } from '../types/types';

export const registerCustomer = async (data: RegisterRequest) => {
  const res = await fetch(
    'https://api.dev.unaro.co.uk/v3/api/contact/register',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        authority: 'api.dev.unaro.co.uk',
        accept: 'application/json, text/plain, */*',
        api_key: 'pk_live_FGHJYYTALAek2rwZ0ZHbrTDj00skByotel',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
        'content-type': 'application/json;charset=UTF-8',
        origin: 'https://track.dev.unaro.co.uk',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        referer: 'https://track.dev.unaro.co.uk/',
        'accept-language':
          'ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6,es;q=0.5',
      },
      body: JSON.stringify(data),
    }
  );
  return res;
};

export const authenticate = async (data: UserRequest) => {
  const res = await fetch(
    'https://api.dev.unaro.co.uk/v3/api/user/authenticate',
    {
      method: 'POST',
      headers: {
        authority: 'api.dev.unaro.co.uk',
        accept: 'application/json, text/plain, */*',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
        'content-type': 'application/json;charset=UTF-8',
        origin: 'https://dashboard.dev.unaro.co.uk',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        referer: 'https://dashboard.dev.unaro.co.uk/',
        'accept-language':
          'ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6,es;q=0.5',
      },
      body: JSON.stringify(data),
    }
  );
  return res;
};

export const getCustomers = async (token: string) => {
  const res = await fetch(
    'https://api.dev.unaro.co.uk/v3/api/organisations/355d3529-a6c1-470b-983a-845b604a3976/contacts?size=16&page=0&name=&type=&sort=forename',
    {
      method: 'GET',
      headers: {
        authority: 'api.dev.unaro.co.uk',
        accept: 'application/json, text/plain, */*',
        authorization: `Bearer ${token}`,
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
        origin: 'https://dashboard.dev.unaro.co.uk',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        referer: 'https://dashboard.dev.unaro.co.uk/',
        'accept-language':
          'ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6,es;q=0.5',
      },
    }
  );
  return res;
};
