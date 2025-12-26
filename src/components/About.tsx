import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "Graphic Design", years: "3+ years" },
    { name: "Web Design & Development", years: "3+ years" },
    { name: "Piano & Music", years: "5+ years" },
    { name: "Drawing & Art", years: "5+ years" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-10"
          >
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold">About Me</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tighter leading-tight">
                Real passion<br />
                delivering <span className="text-primary italic">real results.</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              As an IT student with a deep love for creativity, I bring a unique blend of technical expertise
              and artistic vision to every project. My journey spans from designing stunning visuals to
              building premium websites.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="p-4 md:p-6 rounded-2xl bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-all group"
                >
                  <p className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors">{skill.name}</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-primary mt-2 font-bold">{skill.years}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Design Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="space-y-6 md:space-y-8">
              {/* Philosophy Cards */}
              <div className="glass-card rounded-3xl p-6 md:p-10 hover:bg-primary/5 transition-all duration-500 border-primary/10 hover:border-primary/30">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-sans font-bold mb-2 md:mb-4">Clean & Minimal</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      I believe in removing the unnecessary so the necessary can speak. Every element serves a purpose.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-6 md:p-10 hover:bg-primary/5 transition-all duration-500 border-primary/10 hover:border-primary/30">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-sans font-bold mb-2 md:mb-4">User-Focused</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Design should be intuitive. I craft experiences that feel natural and guide users effortlessly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-6 md:p-10 hover:bg-primary/5 transition-all duration-500 border-primary/10 hover:border-primary/30">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-sans font-bold mb-2 md:mb-4">Passion-Driven</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      From code to canvas to keys, everything I create comes from a place of genuine passion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
