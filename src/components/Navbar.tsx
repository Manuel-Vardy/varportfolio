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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-primary/10"
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center transition-transform group-hover:scale-110">
              <img
                src={logo}
                alt="Vardy Logo"
                className="w-full h-full object-cover"
                style={{
                  filter: 'brightness(1.3) saturate(2.5) hue-rotate(135deg) contrast(1.1)'
                }}
              />
            </div>
            <span className="text-xl font-sans font-bold tracking-tighter">VARDY<span className="text-primary">.</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm uppercase tracking-widest font-bold text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm uppercase tracking-widest font-bold text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/hire-me"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
