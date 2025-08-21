import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Users, Globe } from 'lucide-react';

const WisdomSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const cards = [
    {
      icon: Lightbulb,
      title: "Inner Well-being",
      description: "Nurturing emotional intelligence and self-awareness through African wisdom traditions",
      color: "bg-wisdom",
      iconColor: "text-wisdom-foreground"
    },
    {
      icon: Users,
      title: "Welcoming Community",
      description: "Building connections and belonging in our global village of learning",
      color: "bg-community",
      iconColor: "text-community-foreground"
    },
    {
      icon: Globe,
      title: "Global Citizens",
      description: "Preparing children to understand and contribute to our interconnected world",
      color: "bg-heritage",
      iconColor: "text-heritage-foreground"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-fredoka text-foreground mb-6">
              Wisdom Meets Modern Technology
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold font-baloo text-heritage mb-4">
              Bridging Worlds
            </h3>
            <p className="text-lg text-muted-foreground font-baloo leading-relaxed max-w-2xl mx-auto">
              Innovative approaches to learning that honor our past while preparing children for a bright future.
            </p>
          </motion.div>

          {/* Join the Movement */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border">
              <h3 className="text-3xl md:text-4xl font-bold font-fredoka text-foreground mb-6">
                Join the Movement
              </h3>
              <p className="text-lg text-card-foreground font-baloo mb-8 leading-relaxed">
                Be part of a community that values cultural heritage, wisdom traditions, and innovative learning approaches that prepare our children for tomorrow.
              </p>
              
              {/* Quote Block */}
              <div className="bg-gradient-wisdom rounded-2xl p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-wisdom"></div>
                <blockquote className="text-xl md:text-2xl font-semibold font-fredoka text-heritage-foreground italic leading-relaxed">
                  "If it takes a village to raise a child, it will take a Bokobokids village to raise the next generation of global citizens."
                </blockquote>
                <cite className="block mt-4 text-heritage-foreground/80 font-baloo font-medium">
                  — Bokobokids Village Philosophy
                </cite>
              </div>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <div className={`${card.color} rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-20 h-20 border-2 border-current rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-current rounded-full"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ 
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                      className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}
                    >
                      <card.icon size={32} className={card.iconColor} />
                    </motion.div>
                    
                    <h4 className={`text-2xl font-bold font-fredoka mb-4 ${card.iconColor}`}>
                      {card.title}
                    </h4>
                    
                    <p className={`font-baloo leading-relaxed ${card.iconColor}/90`}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WisdomSection;