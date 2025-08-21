import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Heart } from 'lucide-react';

const Footer = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' },
    { icon: Mail, href: '#', color: 'hover:text-green-500' }
  ];

  return (
    <footer ref={ref} className="bg-gradient-to-b from-card/30 to-background border-t border-border relative overflow-hidden">
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
          className="absolute top-10 left-20 w-32 h-32 border-4 border-heritage rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -15, 15, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 right-32 w-24 h-24 bg-secondary/20 rounded-full"
        />
        <motion.div
          animate={{ 
            x: [0, 30, -30, 0],
            scale: [1, 0.8, 1.1, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-32 right-10 w-16 h-16 bg-primary/20 rounded-2xl"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-12"
        >
          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold font-fredoka text-primary-foreground">B</span>
              </div>
              <span className="text-2xl font-bold font-fredoka text-foreground">
                Bokobokids
              </span>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold font-fredoka text-foreground mb-4">
                About
              </h3>
              <p className="text-muted-foreground font-baloo leading-relaxed text-lg">
                We are a platform of storytellers using the arts to promote African descendant heritage and foster inner well-being in children of all ages.
              </p>
            </div>
          </motion.div>

          {/* Products Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold font-fredoka text-foreground mb-6">
              Products
            </h3>
            <div className="space-y-4">
              <motion.a
                href="#"
                whileHover={{ x: 10 }}
                className="block text-muted-foreground hover:text-heritage transition-colors font-baloo text-lg group"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-heritage rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span>The legend of the first rainbow</span>
                </div>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ x: 10 }}
                className="block text-muted-foreground hover:text-heritage transition-colors font-baloo text-lg group"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-heritage rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span>The lady of the sea</span>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Follow Us Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold font-fredoka text-foreground mb-6">
              Follow us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ 
                    scale: 1.2,
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 bg-card hover:bg-muted border border-border rounded-full flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 shadow-sm hover:shadow-md`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground font-baloo">
              <span>&copy; 2024. All rights reserved. With</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>from Bokobokids Village.</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-muted-foreground hover:text-primary transition-colors font-baloo"
              >
                Contact
              </motion.a>
              <span className="text-muted-foreground">|</span>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-muted-foreground hover:text-primary transition-colors font-baloo"
              >
                Privacy Policy
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-hero"></div>
    </footer>
  );
};

export default Footer;