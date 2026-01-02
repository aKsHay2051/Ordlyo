import { NextResponse, type NextRequest } from 'next/server';
import { getSession } from '@/app/actions';
 
export async function middleware(request: NextRequest) {
  const session = await getSession();
 
  // If the user is not authenticated and is trying to access a protected route,
  // redirect them to the login page.
  if (!session && request.nextUrl.pathname.startsWith('/admin/leads')) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // If the user is authenticated and tries to access the login page,
  // redirect them to the leads page.
  if (session && request.nextUrl.pathname.startsWith('/admin/login')) {
      return NextResponse.redirect(new URL('/admin/leads', request.url));
  }
 
  return NextResponse.next();
}
 
export const config = {
  matcher: ['/admin/login', '/admin/leads'],
};
