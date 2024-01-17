import { Metadata } from "next";

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params?.productId}`,
//   };
// };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params?.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

type Props = {
  params: {
    productId: string;
  };
};

export default function ProductDetails({ params }: Props) {
  console.log(params);
  return <h1>Detail about the product {params?.productId}</h1>;
}
