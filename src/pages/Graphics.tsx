import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const graphicsWorks = [
    {
        title: "Catalyst Fest",
        category: "Event Flyer",
        description: "Sports committee event poster design.",
        image: "/assets/graphics/design-1.jpg",
    },
    {
        title: "10 Hours Experience",
        category: "Church Event",
        description: "Transfiguration & Glorification Experience event flyer.",
        image: "/assets/graphics/design-2.jpg",
    },
    {
        title: "72 Hours In His Presence",
        category: "Church Event",
        description: "The Beloved City Camp event poster.",
        image: "/assets/graphics/design-3.jpg",
    },
    {
        title: "Birthday Celebration",
        category: "Celebration",
        description: "Birthday design for Samuel Akwasi Nyantakyi.",
        image: "/assets/graphics/design-4.jpg",
    },
    {
        title: "Prince Data Hub",
        category: "Business Flyer",
        description: "Promotional flyer for data bundle services.",
        image: "/assets/graphics/design-5.jpg",
    },
    {
        title: "Annual Harvest",
        category: "Church Event",
        description: "Tabere Assembly Annual Harvest & Thanksgiving Service invitation.",
        image: "/assets/graphics/design-6.jpg",
    },
    {
        title: "Special Chrisbolo",
        category: "Product Advertisement",
        description: "Refreshing drink advertisement with ingredient list.",
        image: "/assets/graphics/design-7.jpg",
    },
    {
        title: "Dave Apple Hub",
        category: "Business Flyer",
        description: "iPhone solutions and quality gadgets promotional material.",
        image: "/assets/graphics/design-8.jpg",
    },
    {
        title: "Birthday Celebration",
        category: "Celebration",
        description: "Birthday design for Mrs. Eunice Boateng.",
        image: "/assets/graphics/design-9.jpg",
    },
    {
        title: "Wedding Packages",
        category: "Service Pricing",
        description: "Haviland Pictures wedding photography package price list.",
        image: "/assets/graphics/design-10.jpg",
    },
    {
        title: "Happy International Men's Day",
        category: "Social Media",
        description: "Heirs Technologies celebration post for International Men's Day.",
        image: "/assets/graphics/design-11.jpg",
    },
    {
        title: "The Kings Crusade",
        category: "Church Event",
        description: "The Last Trump Ecclesia event flyer for 'The Kings Crusade'.",
        image: "/assets/graphics/design-12.jpg",
    },
    {
        title: "Mini Harvest '25",
        category: "Church Event",
        description: "The Apostles' Continuation Church International Mini Harvest invitation.",
        image: "/assets/graphics/design-13.jpg",
    },
    {
        title: "Cross Over Night",
        category: "Church Event",
        description: "Christ House Church 31st December Cross Over Night flyer.",
        image: "/assets/graphics/design-14.jpg",
    },
    {
        title: "Christ Delivers",
        category: "Church Event",
        description: "Pentecostal Revival Ministry International Conference flyer.",
        image: "/assets/graphics/design-15.jpg",
    }
];

const Graphics = () => {
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
                            My <span className="text-primary italic">Graphics</span> Works.
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            A collection of visual stories, brand identities, and digital art created with passion and precision.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {graphicsWorks.map((work, index) => (
                            <motion.div
                                key={work.title + index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group glass-card rounded-3xl overflow-hidden hover:bg-primary/5 transition-all duration-500 border-primary/10 hover:border-primary/30"
                            >
                                <div className="aspect-square overflow-hidden bg-muted relative">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Link overlay removed as requested */}
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

export default Graphics;
