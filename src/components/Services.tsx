import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code, Music, Pencil, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Custom logos and marketing materials to help your brand stand out.",
      experience: "Expert",
      link: "/graphics"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Responsive, high-quality websites built with modern technology.",
      experience: "Full Stack",
      link: "/web-design"
    },
    {
      icon: Music,
      title: "Music & Piano",
      description: "Custom music and piano compositions for your projects.",
      experience: "Professional",
      link: "/music"
    },
    {
      icon: Pencil,
      title: "Drawing & Art",
      description: "Unique illustrations to bring your ideas to life visually.",
      experience: "Creative",
      link: "/drawing"
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="services" className="section-container bg-background/50" ref={ref}>
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header text-center mx-auto"
        >
          <span className="section-subtitle">What I Offer</span>
          <h2 className="section-title">
            Professional Services for
            <br />
            <span className="text-primary">Your Business</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 md:mt-8 max-w-2xl mx-auto font-medium">
            A range of creative and technical services designed to help you succeed.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <Link to={service.link} className="block h-full">
                <div className="modern-card p-6 md:p-8 lg:p-10 h-full flex flex-col items-center text-center hover:border-primary/40 group-hover:shadow-elevated transition-all bg-card">
                  {/* Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] bg-background flex items-center justify-center border border-border group-hover:bg-primary group-hover:border-primary transition-all duration-500 mb-6 md:mb-8 shadow-sm">
                    <service.icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-white transition-all duration-500 scale-90 group-hover:scale-100" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-foreground group-hover:text-primary transition-colors tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 md:mb-8 font-medium">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto w-full pt-5 md:pt-6 border-t border-border flex items-center justify-between">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-foreground/40 group-hover:text-primary transition-colors">
                      {service.experience}
                    </span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 md:mt-20 text-center"
        >
          <Link
            to="/hire-me"
            className="group btn-primary px-8 py-4 md:px-12 md:py-5 text-base md:text-lg inline-flex items-center gap-3 md:gap-4"
          >
            Start Your Transformation
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
