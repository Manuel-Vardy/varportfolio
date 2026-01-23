import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "Graphic Design", years: "3+ years", percentage: 95 },
    { name: "Web Design & Development", years: "3+ years", percentage: 90 },
    { name: "Piano & Music", years: "5+ years", percentage: 85 },
    { name: "Drawing & Art", years: "5+ years", percentage: 88 },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Decor - Simplified */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]" />

      <div className="container relative z-10">
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
              <h2 className="text-2xl md:text-5xl lg:text-6xl font-sans font-black tracking-tighter leading-tight">
                Real passion<br />
                delivering <span className="text-primary italic">real results.</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-base md:text-xl leading-relaxed">
              I am an IT student who loves being creative. I use my technical skills and
              artistic ideas to design beautiful graphics and build high-quality websites.
            </p>

            <div className="grid grid-cols-2 gap-8 md:gap-12 pt-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="flex flex-col items-center gap-4 group">
                  <div className="relative w-24 h-24 md:w-32 md:h-32">
                    {/* Background Circle */}
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        className="fill-none stroke-secondary/50 stroke-[8]"
                      />
                      {/* Animated Progress Circle */}
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: skill.percentage / 100 } : {}}
                        transition={{ duration: 2, delay: 0.5 + index * 0.1, ease: "easeInOut" }}
                        className="fill-none stroke-primary stroke-[8] stroke-round"
                        style={{
                          strokeLinecap: 'round'
                        }}
                      />
                    </svg>
                    {/* Percentage Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.5 + index * 0.1 }}
                        className="text-xl md:text-2xl font-sans font-black text-primary"
                      >
                        {skill.percentage}%
                      </motion.span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </p>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-bold mt-1">
                      {skill.years}
                    </p>
                  </div>
                </div>
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
            <div className="space-y-8">
              {/* Philosophy Cards */}
              {[
                {
                  title: "Quality Work",
                  desc: "I focus on making every part of your project perfect so your brand looks its best.",
                  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                },
                {
                  title: "Smart Ideas",
                  desc: "I design with a clear goal in mind. Every choice I make is to help your business grow.",
                  icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                },
                {
                  title: "Global Standard",
                  desc: "Local work with global quality. I create websites that are as good as the best in the world.",
                  icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                }
              ].map((item, idx) => (
                <div key={idx} className="rounded-2xl md:rounded-3xl p-6 md:p-10 border border-white/10 bg-white/5 hover:border-primary/40 transition-all group">
                  <div className="flex items-start gap-4 md:gap-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-primary/50 transition-colors">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-sans font-black mb-2 md:mb-3 text-white tracking-tight">{item.title}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
