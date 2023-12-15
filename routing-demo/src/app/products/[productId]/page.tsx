export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  console.log(params);
  return <h1>Detail about the product {params?.productId}</h1>;
}
