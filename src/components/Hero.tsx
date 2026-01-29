import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MousePointer2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/vardy-new-portrait.jpg";
import { useState, useEffect } from "react";

const slides = [
    {
        id: 1,
        badge: "Available for New Projects",
        title: "Building",
        highlight: "Digital Experiences",
        description: "I design and build high-quality websites for modern brands. Focusing on clean design, fast code, and real results.",
        ctaMain: "Start a Project",
        ctaSec: "My Services",
        image: heroImage,
        statLabel: "Experience",
        statValue: "5+ Years",
        cardBg: "bg-blue-600",
        textColor: "text-white",
        mutedColor: "text-blue-100",
        badgeBg: "bg-white",
        badgeText: "text-blue-600",
        borderColor: "border-blue-500",
        indicatorBg: "bg-blue-600"
    },
    {
        id: 2,
        badge: "World-Class Quality",
        title: "Setting",
        highlight: "Global Standards",
        description: "Delivering web solutions that meet international benchmarks for performance, accessibility, and design.",
        ctaMain: "View Work",
        ctaSec: "My Process",
        image: heroImage,
        statLabel: "Projects",
        statValue: "50+ Delivered",
        cardBg: "bg-[#0B1120]", // Dark "Unleash" Navy
        textColor: "text-white",
        mutedColor: "text-slate-300",
        badgeBg: "bg-white",
        badgeText: "text-[#0B1120]",
        borderColor: "border-slate-700",
        indicatorBg: "bg-[#0B1120]"
    },
    {
        id: 3,
        badge: "Creative Mastery",
        title: "Unleashing",
        highlight: "Creative Design",
        description: "Blending artistic vision with strategic thinking to create unique, memorable brand identities.",
        ctaMain: "See Designs",
        ctaSec: "Contact Me",
        image: heroImage,
        statLabel: "Awards",
        statValue: "12+ Won",
        cardBg: "bg-white", // White
        textColor: "text-[#0B1120]", // Dark Text
        mutedColor: "text-slate-600",
        badgeBg: "bg-[#0B1120]",
        badgeText: "text-white",
        borderColor: "border-slate-200",
        indicatorBg: "bg-[#0B1120]"
    },
    {
        id: 4,
        badge: "Code & Architecture",
        title: "Engineering",
        highlight: "Technical Excellence",
        description: "Robust, scalable, and secure codebases built to power exacting business requirements.",
        ctaMain: "View Code",
        ctaSec: "Tech Stack",
        image: heroImage,
        statLabel: "Clients",
        statValue: "100% Happy",
        cardBg: "bg-slate-900", // Blue Black
        textColor: "text-white",
        mutedColor: "text-slate-300",
        badgeBg: "bg-white",
        badgeText: "text-slate-900",
        borderColor: "border-slate-700",
        indicatorBg: "bg-slate-900"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // 5 seconds per slide
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 overflow-hidden bg-background">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-grid-subtle opacity-40" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid xl:grid-cols-2 gap-12 xl:gap-20 items-center">

                    {/* Left Column: Carousel Card & Buttons */}
                    <div className="relative z-20">
                        {/* Swiping Carousel Card */}
                        <div className="overflow-hidden p-2 -m-2"> {/* Wrapper to prevent shadow clipping during swipe */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className={`backdrop-blur-md rounded-[2.5rem] p-6 md:p-12 border ${slides[currentSlide].borderColor} shadow-2xl relative overflow-hidden h-[380px] md:h-[500px] flex flex-col justify-center transition-colors duration-500`}
                                    style={{
                                        backgroundColor: slides[currentSlide].id === 1 ? '#2563eb' :
                                            slides[currentSlide].id === 2 ? '#0B1120' :
                                                slides[currentSlide].id === 3 ? '#ffffff' : '#0f172a'
                                    }}
                                >
                                    <div className="text-center xl:text-left space-y-8 relative z-10">
                                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${slides[currentSlide].badgeBg} border border-white/20 ${slides[currentSlide].badgeText} font-bold text-xs uppercase tracking-widest shadow-sm mb-6 transition-colors duration-500`}>
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                                            </span>
                                            {slides[currentSlide].badge}
                                        </div>

                                        <h1 className={`text-4xl md:text-6xl xl:text-7xl font-black tracking-tighter ${slides[currentSlide].textColor} leading-[1.1] mb-6 transition-colors duration-500 break-words`}>
                                            {slides[currentSlide].title} <br />
                                            <span className="opacity-90">{slides[currentSlide].highlight}</span>
                                        </h1>

                                        <p className={`text-lg md:text-2xl ${slides[currentSlide].mutedColor} font-medium max-w-2xl mx-auto xl:mx-0 leading-relaxed transition-colors duration-500`}>
                                            {slides[currentSlide].description}
                                        </p>

                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Indicators (Outside Card) */}
                        <div className="flex justify-center xl:justify-start gap-3 mt-6 pl-6">
                            {slides.map((slide, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? `w-8 ${slide.indicatorBg}` : "w-2 bg-primary/20 hover:bg-primary/40"}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Static Buttons (Outside Card) */}
                        <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 md:gap-6 mt-8 pl-4">
                            <Link to="/hire-me" className="btn-primary w-full sm:w-auto text-lg px-8 py-4 flex items-center justify-center gap-3 group shadow-lg shadow-primary/20">
                                Start a Project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a href="/#services" className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-border text-foreground font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-3 group bg-secondary shadow-sm">
                                My Services
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Portrait Image (Static) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative mx-auto xl:mx-0 w-full max-w-sm lg:max-w-md xl:max-w-md z-10"
                    >
                        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-card shadow-2xl bg-secondary">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
                            <img
                                src={heroImage}
                                alt="Main Portrait"
                                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6, type: "spring" }}
                            className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-12 bg-card p-6 rounded-3xl shadow-xl border border-primary/10 flex items-center gap-4 z-20"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <MousePointer2 className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Experience</p>
                                <p className="text-xl font-black text-foreground">5+ Years</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
