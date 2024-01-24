// visiting profile redirects to the home page
import { NextResponse, type NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile")
//     return NextResponse.rewrite(new URL("/hello", request.url));
// }

// // Matcher function
// export const config = {
//   matcher: "/profile",
// };

// Managing cookies and Headers
export function middleware(request: NextRequest) {
  //response object is accessed like this
  const response = NextResponse.next();
  console.log(response, "===response");

  const themePreference = request.cookies.get("theme");

  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  //   setting headers
  response.headers.set("custom-header", "custom value");

  //returning response to the route handler
  return response;
}
