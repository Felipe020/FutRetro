"use client";

import { Home, LayoutDashboard, Menu, ScrollText, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LinksSidebar = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/produtos", label: "Produtos", icon: ScrollText },
  { href: "/", label: "Página inicial", icon: Home },
];

export default function AdminSidebar() {
  const [isAdminSidebarOpen, setIsAdminSidebarOpen] = useState(false);

  const toggleAdminSidebar = () => setIsAdminSidebarOpen(!isAdminSidebarOpen);

  return (
    <div>
      <div className="bg-[#911F27] sm:hidden flex items-center justify-between px-3 py-4">
        <div className="flex items-center gap-2">
          <Image
            src={"/logo/logo_transparent.png"}
            alt="Logo"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </div>
        <Menu className="w-8 h-8 text-[#F2EBD5]" onClick={toggleAdminSidebar} />
      </div>
      <aside
        className={`fixed top-0 left-0 z-40 w-full sm:w-72 h-screen transition-transform ${
          isAdminSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 bg-[#911F27]`}
      >
        <div className="flex flex-col h-full px-3 py-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Image
                src={"/logo/logo_transparent.png"}
                alt="Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-xl font-bold text-[#F2EBD5]">FutRetro</span>
            </div>
            <X
              className="w-8 h-8 text-[#F2EBD5] sm:hidden"
              onClick={toggleAdminSidebar}
            />
          </div>
          <ul className="flex-1 space-y-8">
            {LinksSidebar.map(({ href, label, icon: Icon }, index) => (
              <li key={index}>
                <Link
                  href={href}
                  className="flex items-center px-2 py-3 rounded-lg hover:bg-white/20"
                >
                  <Icon className="w-6 h-6 text-[#F2EBD5]" />
                  <span className="ml-3 text-xl text-[#F2EBD5]">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
