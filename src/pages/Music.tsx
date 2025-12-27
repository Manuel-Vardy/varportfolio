import { motion } from "framer-motion";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const musicWorks = [
    {
        title: "Nocturne in C# Minor",
        category: "Piano Solo",
        description: "A soulful piano performance recorded in a professional studio setting.",
        image: "https://images.unsplash.com/photo-1520529986991-34c71f3c1c9a?q=80&w=2340&auto=format&fit=crop",
    },
    {
        title: "Cinematic Soundscapes",
        category: "Composition",
        description: "Composed background scores for short independent films and documentaries.",
        image: "https://images.unsplash.com/photo-1514525253344-a81d48698bf7?q=80&w=2340&auto=format&fit=crop",
    },
    {
        title: "Jazz Improv Session",
        category: "Live Performance",
        description: "Live recording of a jazz improvisation set at the local Creative Hub.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2340&auto=format&fit=crop",
    }
];

const Music = () => {
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
                        <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold">Talents</span>
                        <h1 className="text-4xl md:text-6xl font-sans font-black mt-6 mb-8 tracking-tighter leading-tight">
                            Music & <span className="text-primary italic">Piano</span>.
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Composing and performing melodic pieces, bringing emotional depth and creativity to musical projects.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {musicWorks.map((work, index) => (
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
                                            Listen Now <PlayCircle className="w-4 h-4" />
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

export default Music;
