import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-32 px-4 pb-20">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-4">
          <Badge variant="outline" className="mb-4">支持中心</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            我们随时为您提供帮助
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            快速找到答案，或联系我们的支持团队
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">常见问题</CardTitle>
              <CardDescription>快速找到答案</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <h3 className="font-semibold text-base">如何使用文生图功能？</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  只需输入文字描述，系统会在几秒钟内生成对应的图像作品。支持多种风格和主题。
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base">生成的图像可以商用吗？</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  根据您的订阅计划，生成的作品可用于个人或商业用途。请查看我们的使用条款了解更多详情。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">联系支持</CardTitle>
              <CardDescription>需要更多帮助？</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                如果您的问题在常见问题中找不到答案，或者需要技术支持，请通过以下方式联系我们：
              </p>
              <div className="space-y-2 pt-2">
                <p className="text-sm">
                  <strong className="text-foreground">邮箱：</strong>{" "}
                  <span className="text-muted-foreground">support@example.com</span>
                </p>
                <p className="text-sm">
                  <strong className="text-foreground">响应时间：</strong>{" "}
                  <span className="text-muted-foreground">24 小时内</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">帮助文档</CardTitle>
              <CardDescription>了解更多功能</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                查看我们的完整文档，了解如何使用所有功能。
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="#">查看文档</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">反馈建议</CardTitle>
              <CardDescription>帮助我们改进</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                您的反馈对我们非常重要，帮助我们持续改进产品体验。
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="#">提交反馈</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
