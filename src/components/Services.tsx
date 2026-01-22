import { motion } from "framer-motion";
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
    <section id="services" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Decor - Simplified */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 md:mb-20"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold">Services</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black mt-6 mb-8 tracking-tighter leading-tight">
            Your <span className="text-primary italic">trusted</span> partner of<br />
            creative solutions.
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative rounded-[2.5rem] p-10 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500"
            >

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary transition-all duration-500">
                    <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-5xl font-black text-white/5 font-sans group-hover:text-primary/10 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-sans font-black mb-4 text-white group-hover:text-primary transition-colors tracking-tight">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-10 min-h-[4rem]">
                  {service.description}
                </p>

                <Link
                  to={service.title === "Graphic Design" ? "/graphics" :
                    service.title === "Web Design & Development" ? "/web-design" :
                      service.title === "Music & Piano" ? "/music" : "/drawing"}
                  className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-primary hover:gap-5 transition-all w-fit"
                >
                  Explore Studio
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
