import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public routes
  if (
    pathname === '/unlock' ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  const museumAccess = request.cookies.get('museum_access');

  console.log(
    'Museum access cookie:',
    museumAccess?.value
  );

  // Logged in
  if (museumAccess?.value === 'granted') {
    return NextResponse.next();
  }

  // Not logged in
  return NextResponse.redirect(
    new URL('/unlock', request.url)
  );
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};