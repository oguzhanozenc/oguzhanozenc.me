"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LuLayers3 } from "react-icons/lu";
import { HiOutlineMap } from "react-icons/hi2";
import { TbSmartHome, TbUserCircle, TbMessageChatbot } from "react-icons/tb";

import "@/styles/Navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { href: "/", label: "Home", icon: <TbSmartHome /> },
    { href: "/about", label: "About", icon: <TbUserCircle /> },
    {
      href: "/projects",
      label: "Projects",
      icon: <LuLayers3 className="stroke-2 text-[1.5rem]" />,
    },
    {
      href: "/journey",
      label: "Journey",
      icon: <HiOutlineMap className="stroke-2" />,
    },
    { href: "/contact", label: "Contact", icon: <TbMessageChatbot /> },
  ];

  return (
    <nav
      className="fixed left-1/2 transform -translate-x-1/2 z-[100] mt-8 bg-white border border-gray-200 rounded-full px-4 py-3 text-base"
      style={{ boxShadow: "#0a0a0a0f 0 1.2px 1.2px, #0a0a0a0a 0 5px 10px" }}
    >
      <div className="flex flex-row justify-center items-center transition-[width] duration-500 ease-in-out">
        <div className="flex justify-center items-center">
          {links.map(({ href, label, icon }) => {
            const isActive = pathname === href;
            const isHovered = hoveredLink === href;

            return (
              <Link
                key={href}
                href={href}
                prefetch
                className={`nav-link relative flex items-center justify-start p-2 mx-1 rounded-full transition-colors duration-300 ${
                  isActive ? "bg-[#f0f0f0]" : ""
                } hover:bg-[#f0f0f0]`}
                onMouseEnter={() => setHoveredLink(href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span
                  className={`text-[1.75rem] transition-colors ${
                    isActive ? "text-[#0a0a0a]" : "text-[#666]"
                  }`}
                >
                  {icon}
                </span>

                <span
                  className={`hovered-text ${
                    isHovered
                      ? "animate-swipeIn"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
