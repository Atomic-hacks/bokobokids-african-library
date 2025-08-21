import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, ArrowRight, Users, BookOpen, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StoryQuestHero = () => {
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
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const steps = [
    {
      number: "01",
      title: "Share Thoughts",
      description: "Children express what they're feeling or thinking in just 1-2 sentences.",
      icon: Heart,
      color: "bg-heritage"
    },
    {
      number: "02", 
      title: "Generate Story",
      description: "BokoboBot creates a personalized African story addressing their specific emotions.",
      icon: Sparkles,
      color: "bg-primary"
    },
    {
      number: "03",
      title: "Learn & Reflect", 
      description: "Each story contains valuable lessons that help children process their feelings constructively.",
      icon: BookOpen,
      color: "bg-wisdom"
    }
  ];

  return (
    <div ref={ref} className="py-20 bg-gradient-to-b from-background via-card/20 to-secondary/10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 right-20 w-40 h-40 border-4 border-heritage rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-32 left-10 w-20 h-20 bg-secondary/30 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-gradient-hero text-primary-foreground px-6 py-3 rounded-full mb-8 shadow-lg"
            >
              <Sparkles size={20} />
              <span className="font-bold font-baloo">BokoboBot StoryQuest</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold font-fredoka text-foreground mb-8 leading-tight"
            >
              A magical journey of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-hero">
                social-emotional learning
              </span>{' '}
              through personalized African stories
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground font-baloo mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              If it takes a village to raise a child, it will take a{' '}
              <span className="text-heritage font-semibold">Bokobokids village</span>{' '}
              to raise the next generation of{' '}
              <span className="text-primary font-semibold">global citizens</span>.
            </motion.p>
          </div>

          {/* Value Proposition Card */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 mb-20 shadow-lg text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-fredoka text-foreground mb-6">
              Empower Children Through Personalized Stories
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-baloo leading-relaxed max-w-3xl mx-auto mb-8">
              BokoboBot StoryQuest transforms children's thoughts and feelings into meaningful tales with valuable life lessons, helping them navigate emotions and develop social skills.
            </p>
            <Button
              size="lg"
              className="bg-gradient-hero hover:shadow-2xl transition-all duration-300 font-bold font-baloo px-12 py-6 rounded-2xl text-lg shadow-lg"
            >
              <Sparkles className="mr-2" size={24} />
              Try It Now
            </Button>
          </motion.div>

          {/* How It Works Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-fredoka text-foreground mb-4">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="bg-card border border-border rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold font-fredoka text-lg shadow-lg`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon size={32} className="text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold font-fredoka text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-baloo leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight size={24} className="text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StoryQuestHero;