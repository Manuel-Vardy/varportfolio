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
      description: "Creating logos, flyers, and designs that catch people's attention and share your message.",
      experience: "3+ years",
    },
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Building easy-to-use websites that look good and work perfectly on all devices.",
      experience: "3+ years",
    },
    {
      icon: Music,
      title: "Music & Piano",
      description: "Writing and playing beautiful music to bring your projects to life.",
      experience: "5+ years",
    },
    {
      icon: Pencil,
      title: "Drawing & Art",
      description: "Creating hand-drawn art and illustrations to make your ideas real.",
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
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-sans font-black mt-4 md:mt-6 mb-6 md:mb-8 tracking-tighter leading-tight">
            Your <span className="text-primary italic">partner</span> for<br />
            creative and tech projects.
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
              className="group relative rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500"
            >

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6 md:mb-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary transition-all duration-500">
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-4xl md:text-5xl font-black text-white/5 font-sans group-hover:text-primary/10 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-sans font-black mb-3 md:mb-4 text-white group-hover:text-primary transition-colors tracking-tight">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-6 md:mb-10 min-h-[3rem] md:min-h-[4rem]">
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
