import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/vardy-logo-new.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/hire-me" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md bg-background/80 border-b border-white/5"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 md:h-24 px-4 md:px-0">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all duration-500">
              <img
                src={logo}
                alt="Vardy Logo"
                className="w-full h-full object-cover grayscale-[0.2] sepia-[1] hue-rotate-[-25deg] saturate-[6] brightness-[1.1]"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-color pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay pointer-events-none" />
            </div>
            <span className="text-2xl font-sans font-black tracking-tighter text-white">
              <span className="text-primary">V</span>ARDY<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/hire-me"
              className="px-4 py-2.5 lg:px-6 lg:py-3 rounded-lg lg:rounded-xl bg-primary text-white font-bold uppercase tracking-widest text-[9px] lg:text-[10px] hover:brightness-110 transition-all shadow-xl whitespace-nowrap inline-block"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-8 px-4 absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-border/50 shadow-2xl"
          >
            <div className="flex flex-col gap-6 items-center text-center">
              {navLinks.map((link) => (
                link.href.startsWith("/#") ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link
                to="/hire-me"
                onClick={() => setIsOpen(false)}
                className="w-full max-w-xs inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm mt-4 shadow-lg shadow-primary/20"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
