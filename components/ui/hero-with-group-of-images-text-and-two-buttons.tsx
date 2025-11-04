import Image from "next/image";
import { MoveRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Hero() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">全新上线</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                文字描述，AI 为你生成精美图像
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                只需输入文字描述，即可在几秒内生成高质量、个性化的图像作品。无论是创意设计、营销素材还是艺术创作，让 AI 成为你最得力的创作伙伴。
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                联系客服 <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                立即体验 <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-muted rounded-md aspect-square relative overflow-hidden">
              <Image
                src="/images/feat1.png"
                alt="hero-1"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-muted rounded-md row-span-2 relative overflow-hidden">
              <Image
                src="/images/feat3.png"
                alt="hero-3"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-muted rounded-md aspect-square relative overflow-hidden">
              <Image
                src="/images/feat2.png"
                alt="hero-2"
                fill
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
