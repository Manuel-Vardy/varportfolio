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
    <footer className="relative pt-20 md:pt-32 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12 md:mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6 md:mb-8 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden flex items-center justify-center transition-transform group-hover:scale-110">
                <img
                  src={logo}
                  alt="Vardy Logo"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'brightness(1.3) saturate(2.5) hue-rotate(90deg) contrast(1.1)'
                  }}
                />
              </div>
              <span className="text-xl md:text-2xl font-sans font-bold tracking-tighter">VARDY<span className="text-primary">.</span></span>
            </a>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-6 md:mb-8">
              IT student & creative designer from Ghana. Crafting digital experiences that inspire with premium, functional design.
            </p>
            <div className="flex gap-3">
              {["twitter", "linkedin", "instagram", "github"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:mt-0">
            <h4 className="font-sans font-black text-[10px] md:text-xs uppercase tracking-[0.3em] text-primary mb-6 md:mb-8">Quick Links</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm font-semibold"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm font-semibold"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-black text-[10px] md:text-xs uppercase tracking-[0.3em] text-primary mb-6 md:mb-8">Services</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-xs md:text-sm font-semibold">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-black text-[10px] md:text-xs uppercase tracking-[0.3em] text-primary mb-6 md:mb-8">Contact Info</h4>
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-xs md:text-sm font-semibold">Kumasi, Ghana</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                <a href="tel:+233240918031" className="text-muted-foreground text-xs md:text-sm font-semibold hover:text-primary transition-colors">
                  0240918031
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                <a href="mailto:manuelvardy8@gmail.com" className="text-muted-foreground text-xs md:text-sm font-semibold hover:text-primary transition-colors">
                  manuelvardy8@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Mr. Vardy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
