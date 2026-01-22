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
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all duration-500">
              <img
                src={logo}
                alt="Vardy Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-sans font-black tracking-tighter text-white">
              VARDY<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-black uppercase tracking-[0.3em] text-white/70 hover:text-primary transition-all relative group"
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
              className="px-8 py-3.5 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-[10px] hover:brightness-110 transition-all shadow-xl"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-secondary" /> : <Menu className="w-6 h-6 text-secondary" />}
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
