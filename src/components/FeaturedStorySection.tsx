import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingCart, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bookImage from '@/assets/book-winds-napata.jpg';

const FeaturedStorySection = () => {
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

  const bookVariants = {
    hidden: { opacity: 0, x: -100, rotateY: -15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
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
        >
          {/* Section Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold font-fredoka text-foreground mb-4">
              Featured Story
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </motion.div>

          {/* Book Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Book Image */}
            <motion.div
              variants={bookVariants}
              className="relative group"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 transform rotate-6"></div>
                <img
                  src={bookImage}
                  alt="The Winds of Napata book cover"
                  className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-background"
                />
                
                {/* Floating Rating */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -top-4 -right-4 bg-wisdom text-wisdom-foreground rounded-2xl p-3 shadow-lg z-20"
                >
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="fill-current" />
                    <span className="font-bold font-baloo text-sm">4.9</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Book Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div>
                <motion.h3 
                  variants={itemVariants}
                  className="text-4xl md:text-5xl font-bold font-fredoka text-foreground mb-2"
                >
                  The Winds of Napata
                </motion.h3>
                <motion.p 
                  variants={itemVariants}
                  className="text-xl text-heritage font-semibold font-baloo"
                >
                  by Dr. Kheftusa Akhiba Ankh
                </motion.p>
              </div>

              <motion.div
                variants={itemVariants}
                className="space-y-4"
              >
                <p className="text-lg text-muted-foreground font-baloo leading-relaxed">
                  Journey through ancient Nubian kingdoms where children discover the power of their heritage and identity. This captivating tale weaves together history, culture, and adventure in a story that speaks to young hearts.
                </p>
                
                <p className="text-lg text-muted-foreground font-baloo leading-relaxed">
                  Perfect for children aged 8-12, this beautifully illustrated book helps young readers understand their place in the world while celebrating the rich tapestry of African culture and wisdom.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-foreground font-baloo">Cultural Identity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span className="text-foreground font-baloo">Historical Adventure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-heritage rounded-full"></div>
                    <span className="text-foreground font-baloo">Beautiful Illustrations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-wisdom rounded-full"></div>
                    <span className="text-foreground font-baloo">Educational Value</span>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <Button
                  size="lg"
                  className="bg-heritage hover:bg-heritage/90 text-heritage-foreground font-semibold font-baloo px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                >
                  <ShoppingCart size={20} />
                  <span>Buy the Book</span>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold font-baloo px-8 py-4 rounded-2xl transition-all duration-300 flex items-center space-x-2"
                >
                  <BookOpen size={20} />
                  <span>Read Preview</span>
                </Button>
              </motion.div>

              {/* Author Quote */}
              <motion.div
                variants={itemVariants}
                className="bg-card border border-border rounded-2xl p-6 mt-8"
              >
                <blockquote className="text-card-foreground font-baloo italic text-lg leading-relaxed">
                  "Every child deserves to see themselves reflected in the stories they read, to understand their heritage, and to dream of their limitless potential."
                </blockquote>
                <cite className="block mt-3 text-muted-foreground font-semibold font-baloo">
                  — Dr. Kheftusa Akhiba Ankh
                </cite>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedStorySection;