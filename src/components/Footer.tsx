import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/vardy-logo-new.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/hire-me" },
  ];

  const services = [
    "Graphic Design",
    "Web Development",
    "Music Production",
    "Art & Drawing",
  ];

  return (
    <footer className="relative pt-32 pb-16 bg-background border-t border-white/5">
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-10 group">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/30 transition-all">
                <img
                  src={logo}
                  alt="Vardy Logo"
                  className="w-full h-full object-cover grayscale-[0.2] sepia-[1] hue-rotate-[-25deg] saturate-[6] brightness-[1.1]"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-color pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay pointer-events-none" />
              </div>
              <span className="text-2xl font-sans font-black tracking-tighter text-white"><span className="text-primary">V</span>ARDY<span className="text-primary">.</span></span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10">
              Elite IT systems and bespoke creative design studio based in Ghana. We define the intersection of tech and prestige.
            </p>
            <div className="flex gap-5">
              {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/50 transition-all"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-sans font-black text-xs text-primary uppercase tracking-[0.4em] mb-10">Studio Map</h4>
            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Expertise */}
          <div>
            <h4 className="font-sans font-black text-xs text-primary uppercase tracking-[0.4em] mb-10">Services</h4>
            <ul className="space-y-5">
              {services.map((service) => (
                <li key={service} className="text-white/60 text-sm font-bold uppercase tracking-widest">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-sans font-black text-xs text-primary uppercase tracking-[0.4em] mb-10">Get In Touch</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-white/80 text-sm font-medium">Kumasi, Ashanti<br />Republic of Ghana</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <a href="tel:+233240918031" className="text-white/80 text-sm font-bold hover:text-white transition-colors tracking-widest">
                  +233 24 091 8031
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:manuelvardy8@gmail.com" className="text-white/80 text-sm font-bold hover:text-white transition-colors tracking-widest">
                  VAR@DESIGN.COM
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/30 text-xs font-bold uppercase tracking-[0.2em]">
            © {currentYear} Vardy Elite Creative Studio. Ghanaian Origins. Global Impact.
          </p>
          <div className="flex gap-12 text-xs font-bold uppercase tracking-[0.2em] text-white/30">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
