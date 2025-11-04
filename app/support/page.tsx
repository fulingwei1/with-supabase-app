import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-32 px-4 pb-20">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">支持中心</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我们随时为您提供帮助
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>常见问题</CardTitle>
              <CardDescription>快速找到答案</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">如何使用文生图功能？</h3>
                <p className="text-sm text-muted-foreground">
                  只需输入文字描述，系统会在几秒钟内生成对应的图像作品。支持多种风格和主题。
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">生成的图像可以商用吗？</h3>
                <p className="text-sm text-muted-foreground">
                  根据您的订阅计划，生成的作品可用于个人或商业用途。请查看我们的使用条款了解更多详情。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>联系支持</CardTitle>
              <CardDescription>需要更多帮助？</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                如果您的问题在常见问题中找不到答案，或者需要技术支持，请通过以下方式联系我们：
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>邮箱：</strong> support@example.com
                </p>
                <p className="text-sm">
                  <strong>响应时间：</strong> 24 小时内
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>帮助文档</CardTitle>
              <CardDescription>了解更多功能</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                查看我们的完整文档，了解如何使用所有功能。
              </p>
              <Button variant="outline" asChild>
                <Link href="#">查看文档</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>反馈建议</CardTitle>
              <CardDescription>帮助我们改进</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                您的反馈对我们非常重要，帮助我们持续改进产品体验。
              </p>
              <Button variant="outline" asChild>
                <Link href="#">提交反馈</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
