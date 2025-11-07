"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, Info, HelpCircle, LogIn } from "lucide-react";

export function FloatingNavWrapper() {
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
    {
      name: "登陆",
      link: "/auth/sign-in",
      icon: <LogIn className="h-4 w-4 text-neutral-500 dark:text-white" />,
      variant: "button" as const,
    },
  ];

  return <FloatingNav navItems={navItems} />;
}
