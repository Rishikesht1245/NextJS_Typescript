import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  //   const requestHeaders = new Headers(request.headers);
  //   console.log(requestHeaders.get("Authorization"));

  //   const requestHeaders = headers();
  //   console.log(requestHeaders.get("Authorization"));

  //   Setting cookie
  cookies().set("resultPerPage", "2");

  //Reading cooke
  const results = cookies().get("resultPerPage");
  console.log(results, "===results");
  const theme = request.cookies.get("theme");
  console.log(theme);
  return new Response("<h1>Profile API Data</h1>", {
    headers: { "Content-Type": "text/html", "Set-Cookie": "theme=dark" },
  });
}
