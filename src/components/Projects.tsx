import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            title: "Commercial Identity",
            category: "Graphic Design",
            image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=800",
            description: "A complete branding project for a venture capital firm.",
        },
        {
            title: "E-Commerce Platform",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
            description: "A modern e-commerce website designed for high-volume sales.",
        },
        {
            title: "Creative Portrait Series",
            category: "Art & Drawing",
            image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=800",
            description: "A series of illustrations mixing traditional and digital art.",
        }
    ];

    return (
        <section id="portfolio" className="section-container bg-background" ref={ref}>
            <div className="absolute inset-0 bg-grid-subtle opacity-50" />

            <div className="container relative z-10">
                <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-12 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <span className="section-subtitle">My Portfolio</span>
                        <h2 className="section-title">Recent Projects</h2>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="group flex items-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary hover:text-foreground transition-all w-fit"
                    >
                        View All Projects
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                    </motion.button>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="modern-card overflow-hidden h-full flex flex-col hover:border-primary/20 bg-card">
                                {/* Image Container */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 md:top-6 md:left-6">
                                        <span className="px-3 py-1.5 md:px-5 md:py-2 rounded-full bg-background/90 backdrop-blur-md border border-border text-[8px] md:text-[9px] font-black uppercase tracking-widest text-primary shadow-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-10 flex-1 flex flex-col">
                                    <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-foreground group-hover:text-primary transition-colors tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-10 flex-1 font-medium">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-6 md:pt-8 border-t border-border mt-auto">
                                        <button className="flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">
                                            <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                            View Live
                                        </button>
                                        <button className="flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">
                                            <Github className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                            View Code
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
