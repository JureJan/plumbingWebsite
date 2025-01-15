import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Redirect root to default locale
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Ensure all paths have a valid locale
  const segments = pathname.split('/');
  const locale = segments[1];


    console.log("loc", locale);

  if (!['en', 'sl', 'de', 'it'].includes(locale)) {
    const newUrl = new URL(`${pathname}`, request.url); // Default to 'sl'
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}
