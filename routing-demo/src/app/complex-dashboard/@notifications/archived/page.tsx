import Card from "@/components/Card";
import Link from "next/link";

const page = () => {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href={"/complex-dashboard"}>Defaukt</Link>
    </Card>
  );
};
export default page;
