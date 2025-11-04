import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-32 px-4 pb-20">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">关于我们</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            用 AI 让创作更简单
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>我们的使命</CardTitle>
              <CardDescription>使命与愿景</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                我们致力于将先进的 AI 技术转化为简单易用的创作工具，让每个人都能通过文字描述生成精美的图像作品，释放创造力。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>核心技术</CardTitle>
              <CardDescription>技术栈</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                基于最新的生成式 AI 模型，结合 Next.js 和 Supabase 构建的现代化平台，为您提供快速、稳定、高质量的文生图服务。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>产品特色</CardTitle>
              <CardDescription>为什么选择我们</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 快速生成：几秒钟内完成创作</li>
                <li>• 高质量输出：专业级图像质量</li>
                <li>• 简单易用：只需文字描述即可</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>联系我们</CardTitle>
              <CardDescription>保持联系</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                如果您有任何问题或建议，欢迎通过支持页面与我们联系。我们期待您的反馈！
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
