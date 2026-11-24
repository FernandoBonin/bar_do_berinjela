import { HeroSection } from '@/components/HeroSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { HeritageTimeline } from '@/components/HeritageTimeline';

export default function HomePage() {
  return (
    <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 lg:py-12 flex flex-col gap-10 md:gap-12 lg:gap-16">
      <HeroSection />
      <FeaturedProducts />
      <HeritageTimeline />
    </main>
  );
}
