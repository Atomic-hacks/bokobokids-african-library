import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, GraduationCap, Heart, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StoryQuestAudiences = () => {
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

  const audiences = [
    {
      title: "Children",
      description: "Develop emotional intelligence and social skills through engaging stories that resonate with their experiences.",
      icon: Heart,
      color: "bg-heritage",
      gradient: "from-heritage/20 to-heritage/10"
    },
    {
      title: "Educators", 
      description: "Incorporate meaningful social-emotional learning into your curriculum with personalized story experiences.",
      icon: GraduationCap,
      color: "bg-wisdom",
      gradient: "from-wisdom/20 to-wisdom/10"
    },
    {
      title: "Parents",
      description: "Support your child's emotional development at home with stories that address their specific feelings and concerns.",
      icon: Users,
      color: "bg-primary",
      gradient: "from-primary/20 to-primary/10"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 left-32 w-40 h-40 border-4 border-primary rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, 50, 0],
            rotate: [0, 15, -15, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-32 right-20 w-28 h-28 bg-secondary/20 rounded-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* How It Works Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-fredoka text-foreground mb-4">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </motion.div>

          {/* Target Audiences */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${audience.gradient} rounded-3xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full`}>
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-20 h-20 ${audience.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <audience.icon size={32} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold font-fredoka text-foreground mb-4">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground font-baloo leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary/5 via-secondary/5 to-heritage/5 rounded-3xl p-12 mb-20 border border-border shadow-lg text-center"
          >
            <h3 className="text-4xl md:text-5xl font-bold font-fredoka text-foreground mb-6">
              Start Your Child's Emotional Learning Journey Today
            </h3>
            <p className="text-xl text-muted-foreground font-baloo mb-8 max-w-4xl mx-auto leading-relaxed">
              Join thousands of children, parents, and educators who are using BokoboBot StoryQuest to foster emotional intelligence through the magic of personalized storytelling.
            </p>
            <Button
              size="lg"
              className="bg-gradient-hero hover:shadow-2xl transition-all duration-300 font-bold font-baloo px-12 py-6 rounded-2xl text-lg shadow-lg"
            >
              <Sparkles className="mr-2" size={24} />
              Create Your Own Story
            </Button>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-fredoka text-foreground mb-4">
              What People Are Saying
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-lg">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    <Star size={24} className="text-yellow-500 fill-current mx-1" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-card-foreground font-baloo italic text-center leading-relaxed mb-8">
                "I just wanted to tell you how beautiful and well thought out the application is. I'm fascinated, I really am. I think it's amazing. Combining text, illustration and audio is really exciting. The illustrations are beautiful and the length of the text is ideal so that the moral is not lost."
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold font-fredoka text-primary-foreground">P</span>
                </div>
                <cite className="block text-foreground font-semibold font-baloo text-lg">
                  Pilar L.
                </cite>
                <p className="text-muted-foreground font-baloo">
                  A mother user
                </p>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-br from-heritage/10 via-primary/10 to-wisdom/10 rounded-3xl p-12 border-2 border-gradient-hero shadow-xl">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="mb-8"
              >
                <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Sparkles size={32} className="text-primary-foreground" />
                </div>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold font-fredoka text-foreground mb-6">
                Ready to Begin the Magic?
              </h3>
              <p className="text-lg text-muted-foreground font-baloo mb-8 max-w-2xl mx-auto">
                Transform your child's emotions into beautiful African stories that teach, heal, and inspire.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-hero hover:shadow-2xl transition-all duration-300 font-bold font-baloo px-12 py-6 rounded-2xl text-lg shadow-lg group"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="mr-2"
                  >
                    <Sparkles size={24} />
                  </motion.div>
                  <span>Try It Now</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryQuestAudiences;