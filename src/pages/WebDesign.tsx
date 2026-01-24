import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const webDesignWorks = [
    {
        title: "E-Commerce Platform",
        category: "Web Development",
        description: "A fully responsive e-commerce solution with integrated payment gateways and user dashboards.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Foureler Kitchen",
        category: "Web Development",
        description: "A modern restaurant website featuring a dynamic menu, reservation system, and appetizing visual design.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2340&auto=format&fit=crop",
        link: "https://foureler-kitchen.vercel.app/"
    },
    {
        title: "Eco-Portfolio",
        category: "Frontend",
        description: "A high-performance portfolio site for an environmental agency using Vite and Tailwind CSS.",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2340&auto=format&fit=crop",
        link: "#"
    }
];

const WebDesign = () => {
    return (
        <div className="min-h-screen bg-background bg-grid">
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="container px-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-12 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mb-16"
                    >
                        <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold">Portfolio</span>
                        <h1 className="text-4xl md:text-6xl font-sans font-black mt-6 mb-8 tracking-tighter leading-tight">
                            Web <span className="text-primary italic">Design</span> & Development.
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Building responsive, high-performance websites that combine beautiful aesthetics with seamless functionality.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {webDesignWorks.map((work, index) => (
                            <motion.a
                                href={work.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={work.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group glass-card rounded-3xl overflow-hidden hover:bg-primary/5 transition-all duration-500 border-primary/10 hover:border-primary/30 block"
                            >
                                <div className="aspect-square overflow-hidden bg-muted relative">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <span className="text-white font-bold flex items-center gap-2">
                                            Visit Site <ExternalLink className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <span className="text-xs uppercase tracking-widest text-primary font-bold mb-3 block">
                                        {work.category}
                                    </span>
                                    <h3 className="text-2xl font-sans font-bold mb-4">{work.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {work.description}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default WebDesign;
