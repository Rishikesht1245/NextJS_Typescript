import { notFound } from "next/navigation";

const page = ({
  params,
}: {
  params: { reviewId: string; productId: string };
}) => {
  if (parseInt(params?.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review for {params?.productId} is {params?.reviewId}
    </div>
  );
};
export default page;
