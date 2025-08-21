import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StoryQuestStories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stories = [
    {
      title: "Mandla's Ocean Lesson",
      content: `"Jambo!" greeted Mandla to an African Grey Parrot on the Zanzibar Coast. Mandla had come to the beach with just one goal. "I will learn about the ocean to get rich quickly!" he said. The parrot watched as Mandla ignored the beautiful water. He searched only for pearls and shells to sell. Day after day, Mandla found nothing valuable. One evening, an old fisherman shared his suya with Mandla. "What are you seeking?" he asked. "Riches from the sea," Mandla replied. The fisherman smiled. "First learn to love the sea itself. Knowledge comes before reward." Mandla began to study the tides and fish. Soon, he became the best fisherman on the coast. His nets were always full. Mandla learned that true wealth comes after understanding and patience, not from chasing money alone.`,
      description: "A young boy sitting with an old fisherman sharing a meal on the beach at sunset, with an African Grey Parrot perched nearby.",
      gradient: "from-blue-500/20 to-teal-500/20"
    },
    {
      title: "Makena's Art Gift",
      content: `Makena lived on the Serengeti Plains. Every morning, she woke up and said 'Sannu' to the rising sun. She loved to draw pictures in the dirt with sticks. One day, a large elephant watched Makena draw. 'Your pictures are beautiful,' said the elephant. 'But they disappear when it rains.' Makena felt sad. The next day, the elephant brought colored clay. 'Try this instead,' it said. Makena used the clay to make colorful drawings on tree bark. Soon, everyone in her village wanted her art. She even drew pictures on bowls they used for Jollof Rice. Makena's talent brought joy to many people. 'When you share what you love,' said the elephant, 'your gift grows bigger and stronger.'`,
      description: "A young girl named Makena drawing colorful pictures on tree bark while a friendly elephant watches over her on the golden Serengeti Plains.",
      gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
      title: "Amara's Journey",
      content: `Amara lived in a small village on the Zanzibar Coast. Every morning, she walked along the white sandy beach. 'Jambo!' she greeted the fishermen as they returned with their catch. One day, Amara found a strange bottle under a tall Baobab tree. Inside was a map of the world! That night, while eating fufu with her family, Amara announced, 'I will travel the world someday.' Her grandmother smiled. 'The world is big, little one.' Amara looked at the map every day. She planted African Daisies in the shape of different countries. Years passed. Amara worked hard and saved money. Finally, she packed her bags and set off. She visited mountains, deserts, and cities. But when her journey ended, Amara returned to her beach. 'Jambo, beautiful home,' she whispered. She realized that seeing the world had made her love her home even more.`,
      description: "A young girl standing on a beautiful Zanzibar beach, holding a map and looking out at the ocean with African Daisies growing nearby.",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-32 right-16 w-32 h-32 border-4 border-wisdom rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-heritage/20 rounded-2xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-fredoka text-foreground mb-4">
              Featured Stories
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </motion.div>

          {/* Stories Grid */}
          <div className="space-y-16">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Story Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
                    <h3 className="text-3xl md:text-4xl font-bold font-fredoka text-foreground mb-6">
                      {story.title}
                    </h3>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-muted-foreground font-baloo leading-relaxed text-lg">
                        {story.content}
                      </p>
                    </div>
                    
                    <div className="mt-8">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold font-baloo px-8 py-4 rounded-2xl transition-all duration-300 flex items-center space-x-2"
                      >
                        <BookOpen size={20} />
                        <span>Read the Story</span>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Story Illustration Description */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group"
                  >
                    <div className={`bg-gradient-to-br ${story.gradient} rounded-3xl p-12 shadow-lg border border-border min-h-[400px] flex items-center justify-center text-center`}>
                      <div className="space-y-6">
                        <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto shadow-lg">
                          <BookOpen size={32} className="text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold font-fredoka text-foreground mb-4">
                            Story Illustration
                          </h4>
                          <p className="text-muted-foreground font-baloo leading-relaxed text-lg italic">
                            {story.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-primary opacity-60">
                          <Sparkles size={16} />
                          <span className="font-baloo text-sm">AI Generated Artwork</span>
                          <Sparkles size={16} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12 border border-border shadow-lg">
              <h3 className="text-4xl md:text-5xl font-bold font-fredoka text-foreground mb-6">
                Create Your Own Story
              </h3>
              <p className="text-xl text-muted-foreground font-baloo mb-8 max-w-2xl mx-auto">
                Ready to help your child explore their emotions through personalized African stories?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-hero hover:shadow-2xl transition-all duration-300 font-bold font-baloo px-12 py-6 rounded-2xl text-lg shadow-lg"
                >
                  <Sparkles className="mr-2" size={24} />
                  Try It Now
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-hero hover:shadow-2xl transition-all duration-300 font-bold font-baloo px-12 py-6 rounded-2xl text-lg shadow-lg"
                >
                  <Sparkles className="mr-2" size={24} />
                  Create Your Own Story
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryQuestStories;