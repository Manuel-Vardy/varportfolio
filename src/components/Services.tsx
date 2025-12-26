import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code, Music, Pencil, ArrowRight } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creating stunning visuals, brand identities, and marketing materials that captivate and communicate effectively.",
      experience: "3+ years",
    },
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Building responsive, user-friendly websites that combine beautiful aesthetics with seamless functionality.",
      experience: "3+ years",
    },
    {
      icon: Music,
      title: "Music & Piano",
      description: "Composing and performing melodic pieces, bringing emotional depth and creativity to musical projects.",
      experience: "5+ years",
    },
    {
      icon: Pencil,
      title: "Drawing & Art",
      description: "Hand-crafted illustrations and detailed drawings that bring ideas to life with precision and creativity.",
      experience: "5+ years",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-primary font-medium">Featured Services</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
            I solve challenges with <span className="gradient-text">creative solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive skills designed to bring your ideas to life across digital and traditional mediums.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group glass-card rounded-2xl p-6 hover-lift cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-xs text-primary font-medium">{service.experience}</span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
