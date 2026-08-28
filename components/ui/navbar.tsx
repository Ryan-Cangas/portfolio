"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, User, Briefcase, Flag } from "lucide-react";

export const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Overview", icon: Shield },
    { href: "/about", label: "About", icon: User },
    { href: "/projects", label: "Projects", icon: Briefcase },
    { href: "/racing", label: "Racing & Rig", icon: Flag },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full border border-cyan-500/20 bg-zinc-950/70 backdrop-blur-md shadow-lg shadow-black/40">
        {links.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_10px_rgba(6,182,212,0.25)]"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
              }`}
            >
              <Icon size={13} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
