import HeroCarousel from "@/components/HeroCarousel";
import WisdomSection from "@/components/WisdomSection";
import AncientWisdomSection from "@/components/AncientWisdomSection";
import FeaturedStorySection from "@/components/FeaturedStorySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-baloo">
      <main>
        {/* Hero Section */}
        <section id="home">
          <HeroCarousel />
        </section>

        {/* Wisdom Meets Technology */}
        <WisdomSection />

        {/* Ancient Wisdom */}
        <AncientWisdomSection />

        {/* Featured Story */}
        <FeaturedStorySection />
      </main>
    </div>
  );
};

export default Index;
