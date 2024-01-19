import Card from "@/components/Card";
import Link from "next/link";

const page = () => {
  return (
    <Card>
      <div>Notifications</div>
      <Link href={"/complex-dashboard/archived"}>Archived Notifications</Link>
    </Card>
  );
};
export default page;
