"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Wallet, Image as ImageIcon } from "lucide-react";

export function ImageGenerationPage() {
  const [prompt, setPrompt] = useState("");
  const [points, setPoints] = useState(5);
  const [images, setImages] = useState<any[]>([]); // 存储生成的图片

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      return;
    }
    // 这里添加生成图片的逻辑
    console.log("生成图片:", prompt);
    // 模拟生成图片
    // 暂时先不实现
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* 顶部输入区域 */}
      <div className="mb-8">
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex-1 min-w-[300px]">
            <Input
              type="text"
              placeholder="输入您的提示词，例如：一只可爱的猫咪坐在窗台上"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-12 text-base"
              onKeyDown={(e) => {
                if (e.key === "Enter" && prompt.trim()) {
                  handleGenerate();
                }
              }}
            />
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-md border">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-semibold text-base">{points}</span>
              <span className="text-sm text-muted-foreground">点数</span>
            </div>
            <Button variant="outline" className="gap-2">
              <Wallet className="w-4 h-4" />
              充值
            </Button>
            <Button 
              onClick={handleGenerate}
              disabled={!prompt.trim()}
              className="gap-2"
              size="lg"
            >
              <ImageIcon className="w-4 h-4" />
              生成图片
            </Button>
          </div>
        </div>
      </div>

      {/* 图片展示区域 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {images.length === 0 ? (
          // 占位卡片 - 提示用户生成图片，默认显示4个
          <>
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="aspect-square border-dashed">
                <CardContent className="flex flex-col items-center justify-center h-full p-6">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <ImageIcon className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-center text-muted-foreground text-sm font-medium">
                    还没有生成图片
                  </p>
                  <p className="text-center text-muted-foreground text-xs mt-2">
                    在上方输入提示词开始创作
                  </p>
                </CardContent>
              </Card>
            ))}
          </>
        ) : (
          // 显示生成的图片
          images.map((image, index) => (
            <Card key={index} className="aspect-square overflow-hidden p-0">
              <CardContent className="p-0 h-full">
                <img
                  src={image.url}
                  alt={`生成的图片 ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
