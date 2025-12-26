import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import vardyPortrait from "@/assets/vardy-new-portrait.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-float-delayed" />

      <div className="container relative z-10 pt-36 pb-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs md:text-sm text-primary uppercase tracking-widest font-semibold">IT Student & Creative Designer</span>
            </div>

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-sans font-black leading-[0.9] tracking-tighter">
              Crafting <span className="text-primary italic">digital</span><br />
              experiences <span className="text-primary">that</span> inspire.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Hi, I'm Mr. Vardy — a multidisciplinary creative from Ghana.
              I blend technology with artistry to deliver premium, functional designs.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6 pt-4">
              <Link
                to="/hire-me"
                className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm md:text-base transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:scale-105 active:scale-95"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full border border-border bg-secondary/30 text-foreground font-semibold text-sm md:text-base transition-all hover:bg-secondary/50"
              >
                View Services
              </motion.a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12 pt-8 md:pt-12 border-t border-border/30">
              <div>
                <p className="text-3xl md:text-4xl font-sans font-black text-primary">3+</p>
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mt-1 font-bold">Years in Tech</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-sans font-black text-primary">5+</p>
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mt-1 font-bold">Years Art & Music</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-sans font-black text-primary">50+</p>
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mt-1 font-bold">Projects Done</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-16 lg:mt-0"
          >
            <div className="relative aspect-[4/5] md:aspect-square max-w-xl mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 md:w-80 h-40 md:h-80 bg-primary/10 rounded-full blur-[60px] md:blur-[100px]" />
              <div className="absolute -bottom-10 -left-10 w-30 md:w-60 h-30 md:h-60 bg-primary/20 rounded-full blur-[50px] md:blur-[80px]" />

              {/* Main image */}
              <div className="relative h-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-primary/20 shadow-2xl group bg-muted">
                <img
                  src={vardyPortrait}
                  alt="Mr. Vardy - IT Student and Creative Designer"
                  className="w-full h-full object-cover transition-all duration-700 grayscale contrast-125 brightness-110 dark:brightness-[0.8] dark:mix-blend-luminosity"
                  style={{
                    maskImage: 'radial-gradient(circle at 50% 40%, black 30%, transparent 85%)',
                    WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black 30%, transparent 85%)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40 opacity-90 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 pointer-events-none" />

                <div className="absolute inset-0 border-[10px] md:border-[20px] border-primary/5 pointer-events-none rounded-[2rem] md:rounded-[2.5rem]" />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 md:-bottom-10 -left-6 md:-left-10 glass-card rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl border-primary/20"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-sm font-bold uppercase tracking-wider">Based in</p>
                    <p className="text-[10px] md:text-xs text-primary font-semibold">Kumasi, Ghana</p>
                  </div>
                </div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 md:-top-6 -right-4 md:-right-6 glass-card rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl border-primary/20 animate-float"
              >
                <p className="text-2xl md:text-4xl font-sans font-black text-primary">5+</p>
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-bold">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
