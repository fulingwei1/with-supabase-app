"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (password !== repeatPassword) {
      setError("两次输入的密码不一致");
      setIsLoading(false);
      return;
    }

    try {
      // 检查环境变量是否在客户端可用
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY;
      
      if (!supabaseUrl || !supabaseKey) {
        setError("Supabase 环境变量未配置。请检查 .env.local 文件并重启开发服务器。");
        setIsLoading(false);
        return;
      }

      // 先测试网络连接（可选，如果失败会继续尝试注册）
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5秒超时
        
        const testResponse = await fetch(`${supabaseUrl}/rest/v1/`, {
          method: 'HEAD',
          headers: {
            'apikey': supabaseKey,
          },
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
        
        if (!testResponse.ok && testResponse.status !== 404) {
          throw new Error(`连接测试失败: ${testResponse.status}`);
        }
      } catch (testError: unknown) {
        if (testError instanceof Error && testError.name === 'AbortError') {
          setError("连接超时。无法访问 Supabase 服务器，请检查：1) 网络连接 2) 是否需要配置代理/VPN 3) 防火墙设置");
          setIsLoading(false);
          return;
        } else if (testError instanceof TypeError || (testError instanceof Error && (testError.message.includes('fetch') || testError.message.includes('Failed to fetch')))) {
          setError("无法连接到 Supabase 服务器。可能原因：1) 网络连接问题 2) 需要代理/VPN 3) DNS 解析失败。请检查网络设置或联系网络管理员。");
          setIsLoading(false);
          return;
        } else {
          // 连接测试失败，但继续尝试注册（可能是认证端点不同）
          console.warn("连接测试警告:", testError);
        }
      }

      const supabase = createClient();
      
      // 尝试注册
      const { error, data } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/protected`,
        },
      });
      
      if (error) {
        // Supabase 返回的错误
        console.error("Supabase 错误:", error);
        if (error.message.includes("fetch") || error.message.includes("network") || error.message.includes("Failed to fetch")) {
          setError("网络连接失败。可能原因：1) 网络连接问题 2) 需要代理/VPN 3) Supabase 服务暂时不可用。请检查网络连接或稍后重试。");
        } else if (error.message.includes("Invalid API key") || error.message.includes("JWT")) {
          setError("配置错误，请检查 Supabase 环境变量配置");
        } else if (error.message.includes("User already registered")) {
          setError("该邮箱已被注册，请直接登录");
        } else {
          setError(error.message);
        }
        setIsLoading(false);
        return;
      }

      // 注册成功
      router.push("/auth/sign-up-success");
    } catch (error: unknown) {
      // 捕获其他类型的错误（如环境变量未配置、网络错误等）
      console.error("注册错误:", error);
      if (error instanceof Error) {
        if (error.message.includes("环境变量未配置") || error.message.includes("URL 格式不正确")) {
          setError(error.message);
        } else if (error.message.includes("Failed to fetch") || error.message.includes("fetch") || error.name === "TypeError") {
          setError("网络连接失败。请检查：1) 网络连接是否正常 2) 是否能访问 Supabase 服务 3) 是否需要配置代理/VPN");
        } else {
          setError(error.message || "发生未知错误，请稍后重试");
        }
      } else {
        setError("发生未知错误，请稍后重试");
      }
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">注册</CardTitle>
          <CardDescription>创建新账户</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">邮箱</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">密码</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="请输入密码"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="repeat-password">确认密码</Label>
                </div>
                <Input
                  id="repeat-password"
                  type="password"
                  placeholder="请再次输入密码"
                  required
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "注册中..." : "注册"}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              已有账户？{" "}
              <Link href="/auth/sign-in" className="underline underline-offset-4">
                登录
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
