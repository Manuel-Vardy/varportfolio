import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, ChevronDown } from "lucide-react";
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "sonner";
import { sendInquiryNotification, sendAutoReply } from "../lib/email";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Graphic Design",
    "Web Design & Development",
    "Piano & Music Production",
    "Art & Drawing",
    "Other Creative Project",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Save to Database
      await addDoc(collection(db, "contact_submissions"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      // 2. Send Automated Emails (Notification to Admin + Confirmation to User)
      // Note: These run in the background
      sendInquiryNotification({
        name: formData.name,
        email: formData.email,
        message: formData.description,
        subject: `Contact Section: ${formData.service}`
      });

      sendAutoReply({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        description: formData.description
      });

      toast.success("Inquiry sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", service: "", description: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Failed to send inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* CTA Section */}
      <div className="container mb-16 md:mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl md:rounded-[3rem] overflow-hidden border border-primary/20 shadow-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/10" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[hsl(var(--lemongreen)/0.08)] rounded-full blur-[100px]" />

          <div className="relative z-10 text-center py-12 md:py-24 px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-sans font-black mb-6 md:mb-8 tracking-tighter leading-tight">
              Let's build something<br />
              <span className="text-primary italic">amazing</span> together.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 md:mb-16 leading-relaxed">
              Ready to bring your vision to life? Get in touch and let's discuss how I can help with your next project.
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
              <div className="text-center">
                <p className="text-3xl md:text-5xl font-sans font-black text-primary">50+</p>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2 font-bold">Projects Done</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-5xl font-sans font-black text-primary">30+</p>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2 font-bold">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-5xl font-sans font-black text-primary">5.0</p>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2 font-bold">Client Rating</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-12"
          >
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold">Get in Touch</span>
              <h2 className="text-3xl md:text-5xl font-sans font-black mt-6 tracking-tighter">
                Let's start a<br />
                <span className="text-primary italic">conversation</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Have a project in mind? Whether it's a website, design work, or just a creative idea,
              I'd love to hear about it.
            </p>

            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">{item.label}</p>
                    <p className="text-base md:text-lg font-bold group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 lg:mt-0"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 space-y-6 md:space-y-8 border-primary/10 hover:border-primary/20 transition-colors">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 md:space-y-4">
                  <label htmlFor="name" className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-secondary/30 border border-primary/10 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-semibold text-sm md:text-base"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-3 md:space-y-4">
                  <label htmlFor="email" className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-secondary/30 border border-primary/10 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-semibold text-sm md:text-base"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 md:space-y-4">
                  <label htmlFor="phone" className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-secondary/30 border border-primary/10 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-semibold text-sm md:text-base"
                    placeholder="+233..."
                    required
                  />
                </div>

                <div className="space-y-3 md:space-y-4">
                  <label htmlFor="service" className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    Interested In
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-secondary/30 border border-primary/10 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-semibold text-sm md:text-base appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-primary pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <label htmlFor="description" className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Project Description
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-secondary/30 border border-primary/10 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-semibold resize-none text-sm md:text-base"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm md:text-base transition-all hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
