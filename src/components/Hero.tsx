import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import vardyPortrait from "@/assets/vardy-new-portrait.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background depth layers - The 'Alive' feel */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]" />

      <div className="container relative z-10 pt-36 pb-20">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-white/50">Innovation & Precision</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-black text-white leading-[0.9] tracking-tighter">
                Crafting <span className="text-primary italic font-serif">Digital</span><br />
                <span className="text-[0.8em] md:text-[0.9em] opacity-90 block mt-2">Masterpieces.</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium max-w-xl leading-relaxed">
                Elevating brands through high-end web solutions and elite design systems. Professional Ghanaian expertise, <span className="text-white border-b-2 border-primary/40">Globally delivered.</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-8 pt-6">
              <Link
                to="/hire-me"
                className="group relative px-12 py-6 rounded-2xl bg-primary text-white font-black text-lg transition-all hover:brightness-110 active:scale-95 flex items-center gap-4"
              >
                Start Your Project
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </Link>

              <a
                href="#services"
                className="group px-12 py-6 rounded-2xl border border-white/10 bg-white/5 text-white font-black text-lg transition-all hover:bg-white/10 flex items-center gap-4"
              >
                Our Expertise
              </a>
            </div>

            {/* Premium Metrics */}
            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
              <div>
                <p className="text-5xl font-black text-white tracking-tight">50+</p>
                <p className="text-xs uppercase tracking-[0.4em] text-primary font-bold mt-2">Projects Delivered</p>
              </div>
              <div>
                <p className="text-5xl font-black text-white tracking-tight">98%</p>
                <p className="text-xs uppercase tracking-[0.4em] text-primary font-bold mt-2">Success Velocity</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - The Portrait Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative mt-20 lg:mt-0"
          >
            <div className="relative aspect-[4/5] w-full max-w-[320px] md:max-w-md lg:max-w-lg mx-auto">
              {/* Decorative premium frames */}
              <div className="absolute -inset-4 border border-white/5 rounded-[4rem] -rotate-3" />
              <div className="absolute -inset-8 border border-primary/10 rounded-[4.5rem] rotate-2" />

              <div className="relative h-full rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl glass-card">
                <img
                  src={vardyPortrait}
                  alt="Vardy Corporate"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Award/Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 md:-top-10 md:-right-10 glass-card p-4 md:p-8 rounded-2xl md:rounded-3xl border-primary/20 shadow-2xl backdrop-blur-3xl"
              >
                <p className="text-2xl md:text-4xl font-black text-primary leading-tight">Top<br />Quality.</p>
                <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-[0.3em] text-white/60 mt-1 md:mt-2">Professional Studio</p>
              </motion.div>

              {/* Success Badge */}
              <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 glass-card p-4 md:p-6 rounded-2xl md:rounded-3xl border-white/10 shadow-2xl flex items-center gap-3 md:gap-5">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                  <span className="text-xl md:text-2xl font-black">★</span>
                </div>
                <div>
                  <p className="text-base md:text-lg font-black text-white">Top Rated</p>
                  <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-primary font-bold">Graphic & Web</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
