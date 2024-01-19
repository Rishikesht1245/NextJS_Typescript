import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const page = ({
  params,
}: {
  params: { reviewId: string; productId: string };
}) => {
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Error loading product review");
  // }
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
