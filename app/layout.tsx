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
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
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
    <html lang="en" suppressHydrationWarning>
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
                name: "登陆",
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
