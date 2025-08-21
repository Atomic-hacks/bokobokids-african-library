import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Drama, Palette, Music, Sparkles } from 'lucide-react';

const AncientWisdomSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: {
      opacity: 1,
      rotateY: 0
    }
  };

  const cards = [
    {
      icon: Drama,
      title: "Sacred Masks & Sculptures",
      emoji: "🎭",
      description: "Discover the spiritual significance and artistic mastery of traditional African masks and sculptures",
      gradient: "from-heritage to-wisdom",
      bgPattern: "geometric"
    },
    {
      icon: Palette,
      title: "Traditional Pottery & Crafts",
      emoji: "🏺",
      description: "Learn the ancient techniques and cultural stories behind beautiful African pottery and crafts",
      gradient: "from-accent to-secondary",
      bgPattern: "circular"
    },
    {
      icon: Music,
      title: "Musical Instruments",
      emoji: "🎵",
      description: "Explore the rhythms and melodies that have carried African stories for generations",
      gradient: "from-primary to-community",
      bgPattern: "wave"
    },
    {
      icon: Sparkles,
      title: "African Patterns",
      emoji: "✨",
      description: "Understand the symbolic meanings and mathematical beauty of traditional African patterns",
      gradient: "from-muted to-accent",
      bgPattern: "diamond"
    }
  ];

  const getPatternStyles = (pattern: string) => {
    switch (pattern) {
      case 'geometric':
        return 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)';
      case 'circular':
        return 'radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px), radial-gradient(circle at 75% 75%, currentColor 2px, transparent 2px)';
      case 'wave':
        return 'repeating-linear-gradient(90deg, transparent, transparent 15px, currentColor 15px, currentColor 30px)';
      case 'diamond':
        return 'repeating-conic-gradient(from 0deg, transparent 0deg 45deg, currentColor 45deg 90deg, transparent 90deg 135deg, currentColor 135deg 180deg)';
      default:
        return '';
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 border-4 border-heritage rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-24 h-24 border-4 border-wisdom rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div 
            variants={cardVariants}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold font-fredoka text-foreground mb-6">
              Ancient Wisdom
            </h2>
            <p className="text-xl text-muted-foreground font-baloo leading-relaxed">
              Connecting modern children to timeless African knowledge, traditions, and cultural treasures that have shaped civilizations for thousands of years.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group perspective-1000"
              >
                <div className={`relative bg-gradient-to-br ${card.gradient} rounded-3xl p-8 h-80 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer`}>
                  {/* Background Pattern */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: getPatternStyles(card.bgPattern),
                      backgroundSize: '30px 30px'
                    }}
                  />
                  
                  {/* Card Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon and Emoji */}
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        animate={{ 
                          rotate: hoveredCard === index ? 360 : 0,
                          scale: hoveredCard === index ? 1.1 : 1
                        }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 bg-background/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                      >
                        <card.icon size={24} className="text-background" />
                      </motion.div>
                      <span className="text-4xl">{card.emoji}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold font-fredoka text-background mb-4 leading-tight">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-background/90 font-baloo leading-relaxed flex-grow">
                      {card.description}
                    </p>

                    {/* Hover Effect Indicator */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: hoveredCard === index ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                      className="h-1 bg-background/40 rounded-full mt-4"
                    />
                  </div>

                  {/* Animated Corner Elements */}
                  <motion.div
                    animate={{ 
                      scale: hoveredCard === index ? [1, 1.2, 1] : 1,
                      rotate: hoveredCard === index ? [0, 180, 360] : 0
                    }}
                    transition={{ duration: 2, repeat: hoveredCard === index ? Infinity : 0 }}
                    className="absolute top-4 right-4 w-6 h-6 border-2 border-background/30 rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      scale: hoveredCard === index ? [1, 1.1, 1] : 1,
                      rotate: hoveredCard === index ? [0, -90, -180] : 0
                    }}
                    transition={{ duration: 1.5, repeat: hoveredCard === index ? Infinity : 0, delay: 0.5 }}
                    className="absolute bottom-4 left-4 w-4 h-4 bg-background/20 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Living Heritage Text */}
          <motion.div
            variants={cardVariants}
            className="text-center"
          >
            <div className="inline-block bg-gradient-wisdom rounded-2xl px-8 py-4 shadow-lg">
              <h3 className="text-2xl font-bold font-fredoka text-heritage-foreground">
                Living Heritage
              </h3>
              <p className="text-heritage-foreground/90 font-baloo mt-2">
                Preserving the past, inspiring the future
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AncientWisdomSection;