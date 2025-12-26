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
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="text-sm uppercase tracking-wider text-primary font-medium">About Me</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                Real passion delivering <span className="gradient-text">real results.</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              As an IT student with a deep love for creativity, I bring a unique blend of technical expertise 
              and artistic vision to every project. My journey spans from designing stunning visuals to 
              building functional websites, and from playing melodic piano pieces to creating detailed drawings.
            </p>

            <p className="text-muted-foreground">
              My design philosophy is simple: <span className="text-foreground font-medium">clean, simple, and user-focused</span>. 
              I believe great design should be invisible — it should guide users naturally while delivering 
              memorable experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="p-4 rounded-xl bg-secondary/50 border border-border/50 hover-lift"
                >
                  <p className="font-medium text-foreground">{skill.name}</p>
                  <p className="text-sm text-primary">{skill.years}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Design Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="space-y-6">
              {/* Philosophy Cards */}
              <div className="glass-card rounded-2xl p-8 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-2">Clean & Minimal</h3>
                    <p className="text-muted-foreground">
                      I believe in removing the unnecessary so the necessary can speak. Every element serves a purpose.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-2">User-Focused</h3>
                    <p className="text-muted-foreground">
                      Design should be intuitive. I craft experiences that feel natural and guide users effortlessly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-2">Passion-Driven</h3>
                    <p className="text-muted-foreground">
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
