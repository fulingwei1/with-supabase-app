"use client";

import { usePathname } from "next/navigation";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, Info, HelpCircle } from "lucide-react";

export function FloatingNavWrapper() {
  const pathname = usePathname();
  
  // 在首页不显示导航栏
  if (pathname === "/") {
    return null;
  }

  const navItems = [
    {
      name: "首页",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "关于",
      link: "/about",
      icon: <Info className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "支持",
      link: "/support",
      icon: <HelpCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
}
