import { motion } from "framer-motion";
import { ArrowLeft, Send, User, Mail, Phone, Briefcase, FileText, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const HireMe = () => {
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
            await addDoc(collection(db, "inquiries"), {
                ...formData,
                createdAt: serverTimestamp(),
            });

            console.log("Form submitted to Firebase:", formData);
            toast.success("Message sent successfully! I'll get back to you soon.");
            setFormData({ name: "", email: "", phone: "", service: "", description: "" });
        } catch (error) {
            console.error("Error adding document: ", error);
            toast.error("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            {/* Background Decor */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[hsl(var(--lemongreen)/0.05)] rounded-full blur-[120px] -ml-64 -mb-64" />
            </div>

            <div className="container relative z-10 py-12 md:py-20 max-w-4xl">
                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group font-bold uppercase tracking-widest text-xs"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold">Work with me</span>
                    <h1 className="text-4xl md:text-6xl font-sans font-black mt-6 tracking-tighter leading-tight">
                        Tell me about your<br />
                        <span className="text-primary italic">next big idea.</span>
                    </h1>
                </motion.div>

                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <form
                        onSubmit={handleSubmit}
                        className="glass-card rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 space-y-8 md:space-y-10 border-primary/10"
                    >
                        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                            {/* Name */}
                            <div className="space-y-3">
                                <label className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">
                                    <User className="w-4 h-4 text-primary" />
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                    className="w-full px-6 py-4 rounded-2xl bg-secondary/30 border border-primary/10 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-semibold"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-3">
                                <label className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">
                                    <Mail className="w-4 h-4 text-primary" />
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="john@example.com"
                                    className="w-full px-6 py-4 rounded-2xl bg-secondary/30 border border-primary/10 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-semibold"
                                />
                            </div>

                            {/* Phone */}
                            <div className="space-y-3">
                                <label className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">
                                    <Phone className="w-4 h-4 text-primary" />
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="+233..."
                                    className="w-full px-6 py-4 rounded-2xl bg-secondary/30 border border-primary/10 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-semibold"
                                />
                            </div>

                            {/* Service Selection */}
                            <div className="space-y-3">
                                <label className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">
                                    <Briefcase className="w-4 h-4 text-primary" />
                                    Interested In
                                </label>
                                <div className="relative">
                                    <select
                                        required
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl bg-secondary/30 border border-primary/10 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-semibold appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled className="bg-background">Select a service</option>
                                        {services.map((service) => (
                                            <option key={service} value={service} className="bg-background">
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary pointer-events-none group-hover:text-primary transition-colors" />
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-3">
                            <label className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">
                                <FileText className="w-4 h-4 text-primary" />
                                Project Description
                            </label>
                            <textarea
                                required
                                rows={5}
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Tell me more about what you're looking for..."
                                className="w-full px-6 py-4 rounded-2xl bg-secondary/30 border border-primary/10 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-semibold resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center gap-3 px-8 py-5 md:py-6 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-widest transition-all hover:shadow-[0_0_50px_hsl(var(--primary)/0.4)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            <Send className={`w-6 h-6 ${isSubmitting ? 'animate-pulse' : ''}`} />
                            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default HireMe;
