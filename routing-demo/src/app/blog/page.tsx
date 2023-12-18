import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "blog",
  },
};

const page = () => {
  return <div>My Blog</div>;
};
export default page;
