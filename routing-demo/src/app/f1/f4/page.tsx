import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>F4 Page</h1>
      <div>
        <Link href={"/about"} style={{ marginRight: "10px" }}>
          About
        </Link>
        <Link href="/f1/f3">F3</Link>
      </div>
    </div>
  );
};
export default page;
