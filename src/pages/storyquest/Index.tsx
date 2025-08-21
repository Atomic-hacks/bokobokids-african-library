import StoryQuestAudiences from "@/components/storyquest/AudienceTestimonials";
import StoryQuestStories from "@/components/storyquest/FeaturedStories";
import StoryQuestHero from "@/components/storyquest/hero";

const StoryQuestPage = () => {
  return (
    <div className="min-h-screen">
      <StoryQuestHero />
      <StoryQuestStories />
      <StoryQuestAudiences />
    </div>
  );
};

export default StoryQuestPage;
