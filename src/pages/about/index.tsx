import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Heart,
  Users,
  Leaf,
  Brain,
  Dumbbell,
  Coins,
  Palette,
  Book,
  Music,
  MapPin,
  ExternalLink,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <MissionSection />
      <PillarsSection />
      <OfferingsSection />
      <VillageTeamSection />
    </div>
  );
};

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-background via-card/20 to-secondary/10 relative overflow-hidden"
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
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-hero">
                Mission
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </motion.div>

          {/* African Proverb */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-heritage/20 via-primary/10 to-wisdom/20 rounded-3xl p-8 md:p-12 mb-16 border border-border shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={32} className="text-primary-foreground" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold font-fredoka text-foreground mb-4 italic">
              "If it takes a village to raise a child."
            </blockquote>
            <cite className="text-xl text-heritage font-semibold font-baloo">
              — African proverb
            </cite>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 mb-16 shadow-lg"
          >
            <div className="prose prose-xl max-w-none">
              <p className="text-lg md:text-xl text-muted-foreground font-baloo leading-relaxed mb-6">
                As parents, educators and keepers of ancient African knowledge
                and wisdom, we are on a mission to help{" "}
                <span className="text-heritage font-semibold">
                  afro descendant kids worldwide
                </span>{" "}
                inherit, use and pass down knowledge about who they, who their
                ancestors are, and what their heritage means in the modern,
                global society.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground font-baloo leading-relaxed mb-6">
                We are invested in helping children learn how to tap into their{" "}
                <span className="text-primary font-semibold">inner joy</span>,
                to flourish and own their rich heritage through{" "}
                <span className="text-wisdom font-semibold">
                  authentic storytelling
                </span>
                .
              </p>
            </div>
          </motion.div>

          {/* Community Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary/10 via-secondary/10 to-heritage/10 rounded-3xl p-8 md:p-12 shadow-lg border border-border"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-fredoka text-foreground mb-6">
                Join the Bokobokids Movement
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground font-baloo leading-relaxed text-center max-w-4xl mx-auto">
              Joining the Bokobokids movement means joining a welcoming
              community of families who desire to empower children with{" "}
              <span className="text-primary font-semibold">
                indestructible tools
              </span>{" "}
              to promote inner well being.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const PillarsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const pillars = [
    {
      number: "01",
      title: "Nutritional Health",
      description:
        "We promote nutritional and sustainable health through stories and recipes from ancient African Wisdom.",
      icon: Leaf,
      color: "bg-heritage",
      gradient: "from-heritage/20 to-heritage/10",
    },
    {
      number: "02",
      title: "Mental Health",
      description:
        "We promote wellness as a communal action through stories of ubuntu in action.",
      icon: Brain,
      color: "bg-wisdom",
      gradient: "from-wisdom/20 to-wisdom/10",
    },
    {
      number: "03",
      title: "Physical Health",
      description:
        "We promote movement through traditional African dance and games that spark joy and laughter and bring children outdoors.",
      icon: Dumbbell,
      color: "bg-primary",
      gradient: "from-primary/20 to-primary/10",
    },
    {
      number: "04",
      title: "Wealth as Health",
      description:
        "We promote wealth as a reciprocal process through stories of shared resources to build sustainable communities.",
      icon: Coins,
      color: "bg-secondary",
      gradient: "from-secondary/20 to-secondary/10",
    },
    {
      number: "05",
      title: "Creativity as Health",
      description:
        "We support creative expression through art and crafts that reconnect children to their inner nature.",
      icon: Palette,
      color: "bg-heritage",
      gradient: "from-heritage/30 to-heritage/10",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-32 left-20 w-32 h-32 border-4 border-primary rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 right-16 w-28 h-28 bg-wisdom/20 rounded-3xl"
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
            <h2 className="text-5xl md:text-6xl font-bold font-fredoka text-foreground mb-6">
              Our Five{" "}
              <span className="text-transparent bg-clip-text bg-gradient-hero">
                Pillars
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground font-baloo max-w-4xl mx-auto leading-relaxed">
              All our Bokobokids families have access to products and learning
              resources that have been carefully selected to promote well being
              through our unique five pillars:
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className={`group ${index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
              >
                <div
                  className={`bg-gradient-to-br ${pillar.gradient} rounded-3xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300 h-full`}
                >
                  {/* Pillar Number */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-14 h-14 ${pillar.color} rounded-full flex items-center justify-center text-white font-bold font-fredoka text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {pillar.number}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <pillar.icon size={24} className="text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold font-fredoka text-foreground mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground font-baloo leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const OfferingsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const offerings = [
    {
      title: "Stories & Books",
      description:
        "Picture books for children aged 3-10 years old, available in hard copies and video format",
      icon: Book,
      color: "bg-primary",
    },
    {
      title: "Music & Dance",
      description:
        "Traditional African music and dance that brings joy and connects children to their roots",
      icon: Music,
      color: "bg-heritage",
    },
    {
      title: "Art & Crafts",
      description:
        "Curated art activities that support creative expression and reconnect children to their inner nature",
      icon: Palette,
      color: "bg-wisdom",
    },
    {
      title: "Festivals & Community",
      description:
        "Bokobokids festivals in cities worldwide where families gather to learn from wisdom keepers",
      icon: MapPin,
      color: "bg-secondary",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-background to-card/30 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-32 w-36 h-36 border-4 border-heritage rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, -20, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-24 w-20 h-20 bg-primary/20 rounded-2xl"
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
            <h2 className="text-5xl md:text-6xl font-bold font-fredoka text-foreground mb-6">
              What We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-hero">
                Offer
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 mb-16 shadow-lg"
          >
            <p className="text-lg md:text-xl text-muted-foreground font-baloo leading-relaxed text-center max-w-4xl mx-auto">
              Bokobokids stories range from{" "}
              <span className="text-primary font-semibold">
                picture books for younger children aged 3-10 years old
              </span>
              . These books are presented in different media ranging from{" "}
              <span className="text-heritage font-semibold">
                hard copies to videos
              </span>
              .
            </p>
          </motion.div>

          {/* Offerings Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <div className="bg-gradient-to-br from-card via-card to-muted/20 rounded-3xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 ${offering.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <offering.icon size={28} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold font-fredoka text-foreground mb-4">
                    {offering.title}
                  </h3>
                  <p className="text-muted-foreground font-baloo leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final Message */}
          <motion.div variants={itemVariants} className="text-center mt-16">
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
                  <Heart size={32} className="text-primary-foreground" />
                </div>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold font-fredoka text-foreground mb-6">
                Building a Global Village
              </h3>
              <p className="text-lg text-muted-foreground font-baloo mb-8 max-w-3xl mx-auto leading-relaxed">
                We also offer music, dance, curated art, recipes, and host{" "}
                <span className="text-heritage font-semibold">
                  Bokobokids festivals in different cities worldwide
                </span>{" "}
                to gather in person and learn from{" "}
                <span className="text-primary font-semibold">
                  wisdom keepers
                </span>
                .
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const VillageTeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const teamMembers = [
    {
      name: "Susana Bokobo",
      role: "The Guide",
      gradient: "from-heritage to-wisdom",
      color: "bg-heritage",
    },
    {
      name: "Reina-Flor Okori",
      role: "The Avatar",
      gradient: "from-primary to-community",
      color: "bg-primary",
    },
    {
      name: "Ioanna Poignand",
      role: "The Art Weaver",
      gradient: "from-wisdom to-secondary",
      color: "bg-wisdom",
    },
    {
      name: "Thandeka Kramer-Wolf",
      role: "The Soul of the South",
      gradient: "from-secondary to-heritage",
      color: "bg-secondary",
    },
    {
      name: "Esther L. Babasasa",
      role: "The Ambassador",
      gradient: "from-community to-primary",
      color: "bg-community",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-32 h-32 border-4 border-wisdom rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -60, 0],
            rotate: [0, 30, -30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
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
            <h2 className="text-5xl md:text-6xl font-bold font-fredoka text-foreground mb-6">
              The Village{" "}
              <span className="text-transparent bg-clip-text bg-gradient-hero">
                Team
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-semibold font-baloo text-heritage mb-4">
              About Us
            </h3>
          </motion.div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className={`group ${index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
              >
                <div
                  className={`bg-gradient-to-br ${member.gradient} rounded-full p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300 h-full text-center relative overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-16 h-16 border-2 border-current rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-current rounded-full"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Avatar Placeholder */}
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 },
                      }}
                      className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg`}
                    >
                      <Users size={32} className="text-background" />
                    </motion.div>

                    {/* Name */}
                    <h4 className="text-2xl font-bold font-fredoka text-background mb-2">
                      {member.name}
                    </h4>

                    {/* Role */}
                    <p className="text-background/90 font-baloo text-lg mb-4 font-semibold">
                      {member.role}
                    </p>

                    {/* LinkedIn Link */}
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      className="inline-flex items-center space-x-2 bg-background/20 backdrop-blur-sm rounded-full px-4 py-2 text-background/90 font-baloo font-medium hover:bg-background/30 transition-all duration-300 cursor-pointer"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink size={16} />
                    </motion.div>

                    {/* Hover Effect Indicator */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                      className="h-1 bg-background/40 rounded-full mt-4"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Message */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-br from-heritage/10 via-primary/10 to-wisdom/10 rounded-3xl p-8 md:p-12 border border-border shadow-lg max-w-4xl mx-auto">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-6"
              >
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Heart size={28} className="text-primary-foreground" />
                </div>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold font-fredoka text-foreground mb-4">
                United by Purpose
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground font-baloo leading-relaxed">
                Our diverse team of{" "}
                <span className="text-heritage font-semibold">
                  wisdom keepers
                </span>
                ,{" "}
                <span className="text-primary font-semibold">storytellers</span>
                , and{" "}
                <span className="text-wisdom font-semibold">
                  cultural ambassadors
                </span>{" "}
                work together to preserve and share the rich heritage of African
                wisdom with children worldwide.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
