import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    window.location.href = `mailto:manuelvardy8@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manuelvardy8@gmail.com",
      href: "mailto:manuelvardy8@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0240918031",
      href: "tel:+233240918031",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kumasi, Ghana",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* CTA Section */}
      <div className="container mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-primary/10" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center py-20 px-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Let's build something <span className="gradient-text">amazing</span> together
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Ready to bring your vision to life? Get in touch and let's discuss how I can help with your next project.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-12 flex-wrap">
              <div className="text-center">
                <p className="text-4xl font-serif font-bold gradient-text">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Done</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-serif font-bold gradient-text">30+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-serif font-bold gradient-text">5.0</p>
                <p className="text-sm text-muted-foreground mt-1">Client Rating</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-sm uppercase tracking-wider text-primary font-medium">Get in Touch</span>
              <h2 className="text-4xl font-serif font-bold mt-4">
                Let's start a <span className="gradient-text">conversation</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg">
              Have a project in mind? Whether it's a website, design work, or just a creative idea, 
              I'd love to hear about it. Let's create something amazing together.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover-lift group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
