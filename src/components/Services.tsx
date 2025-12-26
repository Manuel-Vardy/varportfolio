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
    <section id="services" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[hsl(var(--lemongreen)/0.05)] rounded-full blur-[100px] -ml-40 -mb-40" />

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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative glass-card rounded-3xl p-6 md:p-10 hover:bg-primary/5 transition-all duration-500 border-primary/10 hover:border-primary/30"
            >
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <span className="text-2xl md:text-4xl font-sans font-black text-primary/20 group-hover:text-primary/40 transition-colors">
                  0{index + 1}.
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-sans font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-6 md:mb-8">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-primary opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
