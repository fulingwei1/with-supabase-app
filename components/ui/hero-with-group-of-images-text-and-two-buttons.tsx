import Image from "next/image";
import { MoveRight, PhoneCall } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Hero() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
          <div className="flex gap-6 flex-col">
            <div>
              <Badge variant="outline">最新文生图体验</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tight text-left font-semibold">
                一句话，生成震撼视觉
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                输入灵感，AI 即刻为你打造电影级画面。用光影讲故事，用色彩定义品牌，让每次创作都成为高光时刻。
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-3" variant="outline" asChild>
                <Link href="/auth/sign-in">
                  免费体验 <PhoneCall className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" className="gap-3" asChild>
                <Link href="/auth/sign-up">
                  立即注册 <MoveRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative rounded-md aspect-square overflow-hidden bg-muted">
              <Image
                src="/images/feat_1.jpg"
                alt="AI 生成图像示例 1"
                fill
                sizes="(min-width: 768px) 200px, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative rounded-md row-span-2 overflow-hidden bg-muted">
              <Image
                src="/images/feat_2.png"
                alt="AI 生成图像示例 2"
                fill
                sizes="(min-width: 768px) 240px, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative rounded-md aspect-square overflow-hidden bg-muted">
              <Image
                src="/images/feat_3.png"
                alt="AI 生成图像示例 3"
                fill
                sizes="(min-width: 768px) 200px, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
