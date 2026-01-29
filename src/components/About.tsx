import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Target, Globe } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "Graphic Design", percentage: 95 },
    { name: "Web Development", percentage: 90 },
    { name: "Piano & Music", percentage: 85 },
    { name: "Drawing & Art", percentage: 88 },
  ];

  return (
    <section id="about" className="section-container bg-background" ref={ref}>
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40" />

      <div className="container relative z-10">
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-32 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-10 text-center xl:text-left"
          >
            <div className="space-y-4 md:space-y-6">
              <span className="section-subtitle text-primary">My Vision</span>
              <h2 className="section-title">
                Creative Design Meets <br />
                <span className="text-primary">Technical Skill</span>
              </h2>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto xl:mx-0">
                As a developer and artist, I create websites that bring brands to life. I combine technical expertise with creative design to build something unique.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 pt-4 max-w-lg mx-auto xl:mx-0">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2 md:space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-foreground">{skill.name}</span>
                    <span className="text-primary font-black text-xs md:text-sm">{skill.percentage}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-primary rounded-full shadow-glow-primary"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 md:pt-6">
              <div className="inline-flex items-center gap-4 md:gap-5 p-4 md:p-6 rounded-2xl md:rounded-3xl bg-card border border-border shadow-sm">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-background flex items-center justify-center text-primary shadow-sm shrink-0">
                  <Award className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] md:text-sm font-black text-foreground uppercase tracking-widest leading-none mb-1">High Standards</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground font-semibold">Quality Digital Solutions</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            {[
              {
                title: "Quality First",
                desc: "We pay attention to every detail. We aim for perfection in every project.",
                icon: Award,
              },
              {
                title: "Strategic Impact",
                desc: "We build solutions that help your business grow, not just look good.",
                icon: Target,
              },
              {
                title: "International Reach",
                desc: "Based in Kumasi, we work with clients all over the world.",
                icon: Globe,
              }
            ].map((item, idx) => (
              <div key={idx} className="modern-card p-6 md:p-10 group hover:border-primary/30 transition-all shadow-sm">
                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start text-center sm:text-left">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-secondary flex items-center justify-center border border-border group-hover:bg-primary/5 group-hover:border-primary/20 transition-all shrink-0">
                    <item.icon className="w-6 h-6 md:w-8 md:h-8 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black mb-2 md:mb-3 text-foreground group-hover:text-primary transition-colors tracking-tight">{item.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
