import { ImageGenerationPage } from "@/components/image-generation-page";
import { Hero } from "@/components/ui/hero-with-group-of-images-text-and-two-buttons";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ImageGenerationPage />
    </main>
  );
}
