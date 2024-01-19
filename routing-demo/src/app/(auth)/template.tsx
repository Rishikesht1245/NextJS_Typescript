"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./style.css";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function Template({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState("");
  const pathname = usePathname();
  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks?.map((link, index) => {
        const isActive = pathname?.startsWith(link?.href);
        return (
          <Link
            key={index}
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
