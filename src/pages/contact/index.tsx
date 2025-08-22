import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Heart,
  Users,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div
      ref={ref}
      className="min-h-screen py-20 bg-gradient-to-b from-background via-card/20 to-secondary/10 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-40 h-40 border-4 border-heritage rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-wisdom/20 rounded-2xl"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            scale: [1, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-12 w-16 h-16 bg-primary/20 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-20 w-20 h-20 bg-secondary/20 rounded-3xl"
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
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold font-fredoka text-foreground mb-8 leading-tight">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-hero">
                Us
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </motion.div>

          {/* Collaboration Invitation */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-heritage/20 via-primary/10 to-wisdom/20 rounded-3xl p-8 md:p-12 mb-16 border border-border shadow-lg text-center"
          >
            <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} className="text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-fredoka text-foreground mb-6">
              Do you want to collaborate with us?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-baloo leading-relaxed max-w-3xl mx-auto">
              Write to us, we will be delighted to hear from you and how we
              could make something{" "}
              <span className="text-heritage font-semibold">
                beautiful together
              </span>
              .
            </p>
          </motion.div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold font-fredoka text-foreground mb-6">
                  Send us a message
                </h3>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold font-baloo text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-baloo"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold font-baloo text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-baloo"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold font-baloo text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-baloo"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold font-baloo text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-baloo resize-none"
                      placeholder="Tell us about your collaboration idea..."
                    ></textarea>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    size="lg"
                    className="w-full bg-gradient-hero hover:shadow-xl transition-all duration-300 font-bold font-baloo py-4 rounded-xl text-lg"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Get in Touch Card */}
              <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-heritage/10 rounded-3xl p-8 border border-border shadow-lg">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-6">
                  <Heart size={28} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold font-fredoka text-foreground mb-4">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground font-baloo leading-relaxed mb-6">
                  We're always excited to connect with fellow storytellers,
                  educators, parents, and anyone passionate about empowering
                  children through African heritage.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-heritage rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold font-baloo text-foreground">
                        Email Us
                      </h4>
                      <p className="text-muted-foreground font-baloo">
                        hello@bokobokids.com
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-wisdom rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold font-baloo text-foreground">
                        Call Us
                      </h4>
                      <p className="text-muted-foreground font-baloo">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold font-baloo text-foreground">
                        Visit Us
                      </h4>
                      <p className="text-muted-foreground font-baloo">
                        Bokobokids Village
                        <br />
                        Worldwide Community
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Response Time */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles size={20} className="text-white" />
                </div>
                <h4 className="font-bold font-baloo text-foreground mb-2">
                  Quick Response
                </h4>
                <p className="text-muted-foreground font-baloo text-sm">
                  We typically respond within 24 hours during business days
                </p>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-br from-heritage/10 via-primary/10 to-wisdom/10 rounded-3xl p-12 border-2 border-gradient-hero shadow-xl">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-8"
              >
                <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Users size={32} className="text-primary-foreground" />
                </div>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold font-fredoka text-foreground mb-6">
                Let's Create Magic Together
              </h3>
              <p className="text-lg text-muted-foreground font-baloo mb-8 max-w-3xl mx-auto leading-relaxed">
                Whether you're an educator, parent, artist, or storyteller, we
                believe in the power of collaboration to create meaningful
                experiences for children worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-heritage hover:bg-heritage/90 text-heritage-foreground font-bold font-baloo px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Heart className="mr-2" size={20} />
                  Join Our Community
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold font-baloo px-8 py-4 rounded-2xl transition-all duration-300"
                >
                  <Sparkles className="mr-2" size={20} />
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
