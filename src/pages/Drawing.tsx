import { motion } from "framer-motion";
import { ArrowLeft, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const drawingWorks = [
    {
        title: "Portrait of Stillness",
        category: "Charcoal Sketch",
        description: "Detailed hand-drawn portrait focusing on light and shadow manipulation.",
        image: "https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=2487&auto=format&fit=crop",
    },
    {
        title: "Urban Jungle",
        category: "Ink Drawing",
        description: "A complex ink piece depicting the intersection of nature and city life.",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2342&auto=format&fit=crop",
    },
    {
        title: "Digital Visions",
        category: "Digital Art",
        description: "Concept art for a futuristic environment created using professional digital painting tools.",
        image: "https://images.unsplash.com/photo-1547891269-052264583567?q=80&w=2340&auto=format&fit=crop",
    }
];

const Drawing = () => {
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
                        <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold">Artistry</span>
                        <h1 className="text-4xl md:text-6xl font-sans font-black mt-6 mb-8 tracking-tighter leading-tight">
                            Drawing & <span className="text-primary italic">Art</span>.
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Hand-crafted illustrations and detailed drawings that bring ideas to life with precision and creativity.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {drawingWorks.map((work, index) => (
                            <motion.div
                                key={work.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group glass-card rounded-3xl overflow-hidden hover:bg-primary/5 transition-all duration-500 border-primary/10 hover:border-primary/30"
                            >
                                <div className="aspect-square overflow-hidden bg-muted relative">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <span className="text-white font-bold flex items-center gap-2">
                                            View Work <ZoomIn className="w-4 h-4" />
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Drawing;
