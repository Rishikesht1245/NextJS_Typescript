//GET Request to hello folder results in invoking the GET Function
export async function GET() {
  return new Response("Hell world!");
}
