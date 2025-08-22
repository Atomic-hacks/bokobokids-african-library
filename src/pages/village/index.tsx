import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingBag, Heart, Users, BookOpen, Sparkles, Waves, Rainbow } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VillageComponent = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MovementSection />
      <FeaturedBookSection />
      <BookCatalogSection />
    </div>
  );
};

const HeroSection = () => {
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

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background via-card/20 to-secondary/10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
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
          className="absolute top-20 right-20 w-40 h-40 border-4 border-heritage rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-wisdom/20 rounded-2xl"
        />
        <motion.div
          animate={{ 
            x: [0, 40, 0],
            scale: [1, 0.8, 1.1, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 right-12 w-16 h-16 bg-primary/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h1 className="text-6xl md:text-8xl font-bold font-fredoka text-foreground mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-hero">
                Bokobokids
              </span>{' '}
              Village
            </h1>
            <p className="text-2xl md:text-3xl font-semibold font-baloo text-heritage mb-8">
              Discover the world of african ancient wisdom
            </p>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </motion.div>

          {/* Village Philosophy */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-heritage/20 via-primary/10 to-wisdom/20 rounded-3xl p-8 md:p-12 mb-12 border border-border shadow-lg"
          >
            <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} className="text-primary-foreground" />
            </div>
            <p className="text-xl md:text-2xl text-foreground font-baloo leading-relaxed max-w-4xl mx-auto">
              If it takes a village to raise a child, it will take a Bokobokids village to raise the next generation of global citizens.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
          >
            <Button
              size="lg"
              className="bg-heritage hover:bg-heritage/90 text-heritage-foreground font-bold font-baloo px-12 py-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-xl"
            >
              <ShoppingBag size={24} className="mr-3" />
              Go Shopping
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const MovementSection = () => {
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

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden">
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
          className="absolute top-32 left-20 w-32 h-32 border-4 border-primary rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, 50, 0],
            x: [0, -30, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-40 right-16 w-28 h-28 bg-wisdom/20 rounded-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary/10 via-secondary/10 to-heritage/10 rounded-3xl p-12 md:p-16 shadow-xl border border-border text-center"
          >
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
                <Heart size={32} className="text-primary-foreground" />
              </div>
            </motion.div>
            
            <p className="text-xl md:text-2xl text-foreground font-baloo leading-relaxed italic">
              Joining the Bokobokids movement means joining a welcoming community of families who desire to empower children with{' '}
              <span className="text-primary font-bold">indestructible tools</span>{' '}
              to promote inner well being.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedBookSection = () => {
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
          className="absolute top-20 right-32 w-36 h-36 border-4 border-heritage rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, -20, 20, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 left-24 w-20 h-20 bg-primary/20 rounded-2xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Book Title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-fredoka text-foreground mb-4">
              <em>"The Winds of Napata"</em>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold font-baloo text-heritage">
              and Its Modern Relevance
            </h3>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Book Description */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 mb-12 shadow-lg"
          >
            <div className="prose prose-xl max-w-none">
              <p className="text-lg md:text-xl text-muted-foreground font-baloo leading-relaxed mb-6">
                Dr. Kheftusa Akhiba Ankh's <em>The Winds of Napata</em> is a poignant tale that weaves African history, culture, and identity into an immersive narrative designed to inspire and empower. Through the lens of a young boy, Mark, and his journey of self-discovery between modern-day Manchester and his ancestral African roots, the book merges dreams, folklore, and historical insights to illuminate the legacy of ancient African civilizations.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground font-baloo leading-relaxed mb-6">
                Set against the backdrop of historical kingdoms like Napata and Mali, the story rekindles pride in African heritage while addressing the dislocation caused by colonialism and modern societal challenges.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground font-baloo leading-relaxed">
                This book is a compelling tool for young boys and men, particularly those grappling with identity and purpose in a world that often overlooks their potential. Its themes of self-awareness, rites of passage, and cultural resilience resonate deeply in today's context, where over 7 million men in the U.S. face unemployment and societal marginalization. By rekindling a connection to history, <em>The Winds of Napata</em> offers a pathway for personal growth, a reminder of inherent worth, and a call to rediscover one's roots as a source of strength.
              </p>
            </div>
          </motion.div>

          {/* Buy Book Button */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold font-baloo px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              <BookOpen size={20} className="mr-2" />
              Buy Book
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const BookCatalogSection = () => {
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

  const books = [
    {
      title: "The Lady of the Sea",
      description: "is an inspiring, epic adventure. Your child will dive into a world of magic and mystery.",
      icon: Waves,
      gradient: "from-heritage to-wisdom",
      color: "bg-heritage"
    },
    {
      title: "The Legend of the First Rainbow",
      description: "Where folklore meets science! Ignite your child's curiosity with this captivating tale — a timeless legend passed down through generations.",
      icon: Rainbow,
      gradient: "from-primary to-secondary",
      color: "bg-primary"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 left-20 w-32 h-32 border-4 border-wisdom rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -50, 0],
            rotate: [0, 25, -25, 0]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-32 right-20 w-24 h-24 bg-heritage/20 rounded-3xl"
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
            <h2 className="text-4xl md:text-5xl font-bold font-fredoka text-foreground mb-6">
              See our growing catalog of books such as…
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </motion.div>

          {/* Books Grid */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {books.map((book, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${book.gradient} rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-20 h-20 border-2 border-current rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-current rounded-full"></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ 
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                      className={`w-20 h-20 ${book.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}
                    >
                      <book.icon size={32} className="text-white" />
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold font-fredoka text-background mb-4">
                      <em>"{book.title}"</em>
                    </h3>
                    
                    {/* Description */}
                    <p className="text-background/90 font-baloo leading-relaxed text-lg">
                      {book.description}
                    </p>

                    {/* Hover Effect Indicator */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                      className="h-1 bg-background/40 rounded-full mt-6"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-br from-heritage/10 via-primary/10 to-wisdom/10 rounded-3xl p-8 md:p-12 border border-border shadow-lg max-w-4xl mx-auto">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="mb-6"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Sparkles size={24} className="text-primary-foreground" />
                </div>
              </motion.div>
              
              <p className="text-lg md:text-xl text-muted-foreground font-baloo leading-relaxed">
                Discover more magical stories that connect children to their{' '}
                <span className="text-heritage font-semibold">ancient wisdom</span>{' '}
                and help them grow into confident{' '}
                <span className="text-primary font-semibold">global citizens</span>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VillageComponent;