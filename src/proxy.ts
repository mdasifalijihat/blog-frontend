import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { userService } from "./services/user.service";
import { Roles } from "./constants/roles";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  let isAuthenticated = false;
  let isAdmin = false;
  const { data } = await userService.getSession();
  if (data) {
    isAuthenticated = true;
    isAdmin = data.user.role === Roles.admin;
  }

  //   user is not authenticated at all
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  //   user is authenticated but role admin
  // user cant not visit user dashboarde
  if (isAdmin && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }

  //   user is authenticated and role admin
  // user cant not visit user admin-dashboarde
  if (!isAdmin && pathname.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  console.log(pathname);
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
  ],
};
