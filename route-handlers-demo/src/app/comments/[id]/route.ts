import { comments } from "../data";

export async function GET(
  // If we are not using the request parameter, we can add underscore so that it wont show like inactive
  _request: Request,
  //destructuring params from context , context will be received based on the folder name [id]
  { params }: { params: { id: string } }
) {
  const comment = comments.find((item) => item?.id === parseInt(params?.id))!;
  return Response.json(comment);
}
