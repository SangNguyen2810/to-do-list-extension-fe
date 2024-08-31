// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { parse } from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
  const cookies = parse(event.request.headers.get('cookie') || '');
  const token = cookies.token; // Adjust based on your cookie name


  // if (!token && event.url.pathname !== '/login') {
  //   throw redirect(302, '/login');
  // }

  return resolve(event);
};