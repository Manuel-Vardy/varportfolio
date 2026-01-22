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
      const [notifSent, replySent] = await Promise.all([
        sendInquiryNotification({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.description,
          subject: `Contact Section: ${formData.service}`
        }),
        sendAutoReply({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          description: formData.description
        })
      ]);

      if (!notifSent || !replySent) {
        console.warn("Email notification failed. Check Brevo API configuration.");
        toast.warning("Inquiry saved, but phone notification failed. Check your email setup.");
      } else {
        toast.success("Inquiry sent successfully! A confirmation email is on its way.");
      }

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
    <section id="contact" className="py-24 md:py-40 relative overflow-hidden bg-background" ref={ref}>
      {/* Background Decor - Simplified */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]" />

      {/* CTA Section - The 'Prestige' Banner */}
      <div className="container mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative rounded-[3.5rem] overflow-hidden border border-white/10 bg-white/5 p-12 md:p-24 shadow-2xl"
        >

          <div className="relative z-10 text-center space-y-10">
            <h2 className="text-4xl md:text-8xl font-sans font-black mb-8 tracking-tighter leading-[0.85] text-white">
              Let's create something<br />
              <span className="text-primary italic font-serif">Legendary</span> together.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              Ready to elevate your digital presence to the elite tier? Let's architect your success story.
            </p>

            {/* Stats - Premium Look */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/5">
              <div className="space-y-2">
                <p className="text-5xl font-black text-white">50+</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Creative Victories</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-black text-white">98%</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Client Retention</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-black text-white">5.0</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Elite Rating</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-16"
          >
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.4em] text-primary font-black">Direct Access</span>
              <h2 className="text-4xl md:text-6xl font-sans font-black text-white tracking-tighter leading-tight">
                Connect with the<br />
                <span className="text-primary italic font-serif">Studio</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Whether you're starting a global brand or refining a niche project, our doors are open to visionary partners.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-8 p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-primary/40 group transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-all">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-2">{item.label}</p>
                    <p className="text-xl font-black text-white group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-[3.5rem] p-10 md:p-16 space-y-10 border-white/5 shadow-elevated">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-2">Your Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold placeholder:text-white/20"
                    placeholder="E.g. Emmanuel Owusu"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold placeholder:text-white/20"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold placeholder:text-white/20"
                    placeholder="+233..."
                    required
                  />
                </div>

                <div className="space-y-4">
                  <label htmlFor="service" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-2">Services</label>
                  <div className="relative">
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled className="bg-background text-white/50">Select Discipline</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-background text-white">{service}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label htmlFor="description" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-2">Project Details</label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold resize-none placeholder:text-white/20"
                  placeholder="What are we building?"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative px-8 py-6 rounded-2xl bg-primary text-white font-black uppercase tracking-[0.4em] text-sm transition-all shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-6"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                {isSubmitting ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
