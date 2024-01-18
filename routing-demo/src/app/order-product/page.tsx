"use client";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();

  //   On clicking navigate to the home page
  const handleClick = () => {
    console.log("Placing your order");
    //Push method is used to change the route
    router.push("/");
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
};
export default page;
