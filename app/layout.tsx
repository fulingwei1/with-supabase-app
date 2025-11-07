import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, Info, HelpCircle, LogIn } from "lucide-react";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "AI 文生图 - 一句话生成震撼视觉",
  description: "输入灵感，AI 即刻为你打造电影级画面。用光影讲故事，用色彩定义品牌，让每次创作都成为高光时刻。",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav
            navItems={[
              {
                name: "首页",
                link: "/",
                icon: (
                  <Home className="h-4 w-4 text-neutral-500 dark:text-white" />
                ),
              },
              {
                name: "关于",
                link: "/about",
                icon: (
                  <Info className="h-4 w-4 text-neutral-500 dark:text-white" />
                ),
              },
              {
                name: "支持",
                link: "/support",
                icon: (
                  <HelpCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
                ),
              },
              {
                name: "登录",
                link: "/auth/sign-in",
                icon: (
                  <LogIn className="h-4 w-4 text-neutral-500 dark:text-white" />
                ),
                variant: "button",
              },
            ]}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
