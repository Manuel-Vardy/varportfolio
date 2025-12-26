import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import vardyPortrait from "@/assets/vardy-portrait.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">IT Student & Creative Designer</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              Crafting <span className="gradient-text">digital</span> experiences
              <span className="gradient-text"> that inspire.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Hi, I'm Mr. Vardy — a multidisciplinary creative from Kumasi, Ghana. 
              I blend technology with artistry to deliver simple, clean, and user-focused designs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary/50 text-foreground font-medium transition-all hover:bg-secondary"
              >
                View Services
              </motion.a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl font-serif font-bold gradient-text">3+</p>
                <p className="text-sm text-muted-foreground">Years in Tech</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold gradient-text">5+</p>
                <p className="text-sm text-muted-foreground">Years Art & Music</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold gradient-text">50+</p>
                <p className="text-sm text-muted-foreground">Projects Done</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-primary/30 rounded-full blur-xl" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden border border-border/50 glow-effect">
                <img
                  src={vardyPortrait}
                  alt="Mr. Vardy - IT Student and Creative Designer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Based in</p>
                    <p className="text-xs text-muted-foreground">Kumasi, Ghana</p>
                  </div>
                </div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -top-4 -right-4 glass-card rounded-xl p-4 shadow-lg animate-float"
              >
                <p className="text-2xl font-serif font-bold gradient-text">5+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
