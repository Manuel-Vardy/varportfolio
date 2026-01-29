import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2 } from "lucide-react";
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
      await addDoc(collection(db, "contact_submissions"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

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
        toast.warning("Inquiry archived, but network logs failed. We will reach out manually.");
      } else {
        toast.success("Project inquiry received! An elite representative will contact you shortly.");
      }

      setFormData({ name: "", email: "", phone: "", service: "", description: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Handshake failed. Please verify your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container bg-background/50" ref={ref}>
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30" />

      <div className="container relative z-10">
        <div className="grid xl:grid-cols-2 gap-8 md:gap-12 xl:gap-32 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-12"
          >
            <div className="space-y-4 md:space-y-6 text-center xl:text-left">
              <span className="section-subtitle">Get in Touch</span>
              <h2 className="section-title">
                Start Your<br />
                <span className="text-primary">Next Project</span>
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed font-medium max-w-xl mx-auto xl:mx-0">
                I am currently accepting new projects. Contact me to discuss your ideas and how we can work together.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {[
                { icon: Mail, label: "Email", value: "manuelvardy83@gmail.com", href: "mailto:manuelvardy83@gmail.com" },
                { icon: Phone, label: "Phone", value: "+233 24 091 8031", href: "tel:+233240918031" },
                { icon: MapPin, label: "Location", value: "Kumasi, Ashanti, Ghana", href: "#" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="modern-card p-4 md:p-8 flex items-center gap-3 md:gap-8 group hover:border-primary/40 bg-card overflow-hidden"
                >
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-background flex items-center justify-center border border-border group-hover:bg-primary/5 transition-all shadow-sm shrink-0">
                    <item.icon className="w-4 h-4 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[8px] md:text-[10px] font-black text-primary uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1 md:mb-2 truncate">{item.label}</p>
                    <p className="text-xs md:text-xl font-bold text-foreground group-hover:text-primary transition-colors truncate">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-5 md:p-10 rounded-2xl md:rounded-3xl bg-secondary/50 border border-border">
              <h4 className="text-foreground font-black mb-4 md:mb-6 flex items-center gap-3 text-sm md:text-base">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                </div>
                Protocol for New Inquiries
              </h4>
              <ul className="space-y-3 md:space-y-4 text-[10px] md:text-sm text-muted-foreground font-medium">
                <li className="flex gap-3">
                  <span className="text-primary font-black">01.</span>
                  Review your project details.
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-black">02.</span>
                  Schedule a meeting to discuss goals.
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-black">03.</span>
                  Provide a proposal and project plan.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="premium-card bg-card p-6 sm:p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
              <div className="space-y-6 md:space-y-8">
                <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] md:tracking-[0.3em] ml-1">Name</label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl bg-background/50 border border-border text-foreground focus:border-primary focus:bg-card outline-none transition-all placeholder:text-foreground/20 font-semibold text-sm md:text-base"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] md:tracking-[0.3em] ml-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl bg-background/50 border border-border text-foreground focus:border-primary focus:bg-card outline-none transition-all placeholder:text-foreground/20 font-semibold text-sm md:text-base"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] md:tracking-[0.3em] ml-1">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl bg-background/50 border border-border text-foreground focus:border-primary focus:bg-card outline-none transition-all placeholder:text-foreground/20 font-semibold text-sm md:text-base"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] md:tracking-[0.3em] ml-1">Service</label>
                    <div className="relative">
                      <select
                        className="w-full px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl bg-background/50 border border-border text-foreground focus:border-primary focus:bg-card outline-none transition-all appearance-none cursor-pointer font-semibold text-sm md:text-base"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        required
                      >
                        <option value="" disabled className="bg-card">Choose Discipline</option>
                        {services.map(s => <option key={s} value={s} className="bg-card">{s}</option>)}
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ArrowRight className="w-4 h-4 text-primary rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] md:text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] md:tracking-[0.3em] ml-1">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl bg-background/50 border border-border text-foreground focus:border-primary focus:bg-card outline-none transition-all placeholder:text-foreground/20 resize-none font-semibold text-sm md:text-base"
                    placeholder="Tell me about your project..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-5 md:py-6 text-sm md:text-base flex items-center justify-center gap-3 md:gap-4 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 md:w-7 md:h-7 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
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
