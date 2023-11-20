import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const AuthCookies = req.cookies.has(`UserAuthentication`);

  if (pathname === "/" && !AuthCookies) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname === "/login" && AuthCookies) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login"],
};
