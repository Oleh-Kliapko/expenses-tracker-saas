"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/modules/constants";

export default function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="flex items-center border-b border-white/10 py-2">
      <Link href={routes[0].path}>
        <Image src="/logo.png" alt="Logo" width={25} height={25} priority />
      </Link>

      <nav className="ml-auto mr-8">
        <ul className="flex gap-2 text-xs">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={`px-2 py-1 hover:text-white transition text-white/100 rounded-sm ${
                  route.path === pathname ? "bg-black/10" : ""
                }`}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <LogoutLink className="text-white/70 text-[12px] ml-[10px]">
        Logout
      </LogoutLink>
    </header>
  );
}
