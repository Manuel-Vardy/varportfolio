import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import logo from "@/assets/vardy-logo-new.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Hire Me", href: "/hire-me" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Github, href: "#", name: "GitHub" },
    { icon: Instagram, href: "#", name: "Instagram" },
  ];

  return (
    <footer className="relative pt-24 pb-12 bg-background border-t border-border overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-16 px-4 md:px-0">
          {/* Brand */}
          <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-border group-hover:border-primary/50 transition-all shadow-sm">
                <img
                  src={logo}
                  alt="Vardy Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-foreground">VARDY<span className="text-primary">.</span></span>
            </Link>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xs font-medium">
              Professional web design and creative services for global clients.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background border border-border flex items-center justify-center text-foreground/40 hover:text-white hover:bg-primary hover:border-primary transition-all shadow-sm"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center lg:text-left">
            <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-8 lg:mb-10">Links</h4>
            <ul className="space-y-4 md:space-y-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-foreground/60 hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h4 className="text-center lg:text-left text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-8 lg:mb-10">Contact</h4>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-secondary/50 border border-border shadow-sm text-center sm:text-left">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background flex items-center justify-center text-primary shadow-sm shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-foreground font-black text-[9px] md:text-[10px] uppercase tracking-widest mb-1 md:mb-2">Location</p>
                  <span className="text-muted-foreground text-xs md:text-sm font-medium">Kumasi, Ashanti<br />Ghana</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-secondary/50 border border-border shadow-sm text-center sm:text-left">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background flex items-center justify-center text-primary shadow-sm shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-foreground font-black text-[9px] md:text-[10px] uppercase tracking-widest mb-1 md:mb-2">Email</p>
                  <a href="mailto:manuelvardy83@gmail.com" className="text-muted-foreground text-xs md:text-sm font-medium hover:text-primary transition-colors break-all">
                    manuelvardy83@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 md:pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-foreground/20 text-center">
          <p>© {currentYear} Vardy Elite Creative Studio. All Rights Reserved.</p>
          <div className="flex gap-6 md:gap-10">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
