"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      {navLinks?.map((link) => {
        const isActive = pathname?.startsWith(link?.href);
        return (
          <Link
            className={isActive ? "font-bold mr-4" : "text-blue-400"}
            href={link?.href}
          >
            {link?.name}
          </Link>
        );
      })}
      <h1>Inner layout for authentication</h1>
      {children}
    </div>
  );
}
