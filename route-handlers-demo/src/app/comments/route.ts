import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  //query is the name given in url for the query params
  const query = searchParams.get("query");

  const filteredComments = query
    ? comments?.filter((comment) => comment?.text?.includes(query))
    : comments;
  return Response.json(filteredComments);
}

//The next request provide convenient methods for managing query params for ease.
export async function POST(request: Request) {
  // request.json returns the data which we sent in body
  const comment = await request.json();
  console.log(comment, "===comment");
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
