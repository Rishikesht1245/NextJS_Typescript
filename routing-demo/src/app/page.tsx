// route file should be named page.tsx

import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Welcome Home</h1>
      <Link href={"/blog"}>Blog</Link>
    </>
  );
};
export default Home;
