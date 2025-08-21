import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import WisdomSection from '@/components/WisdomSection';
import AncientWisdomSection from '@/components/AncientWisdomSection';
import FeaturedStorySection from '@/components/FeaturedStorySection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-baloo">
      <Navigation />
      
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

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
              <span className="text-lg font-bold font-fredoka text-primary-foreground">B</span>
            </div>
            <span className="text-xl font-bold font-fredoka text-foreground">
              Bokobokids
            </span>
          </div>
          <p className="text-muted-foreground font-baloo">
            Bridging ancient wisdom with modern technology for the next generation
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
