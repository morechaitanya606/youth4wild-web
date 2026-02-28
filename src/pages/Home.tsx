import { useState } from 'react';
import { Search, GraduationCap, HeartHandshake, Users, ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const features = [
        {
            title: 'Learn',
            description: 'Access expert-led courses',
            icon: <GraduationCap size={28} className="text-white mb-4 group-hover:scale-110 transition-transform duration-500 ease-out" />,
            link: '/learn',
            color: 'bg-primary'
        },
        {
            title: 'Volunteer',
            description: 'Find global field projects',
            icon: <HeartHandshake size={28} className="text-white mb-4 group-hover:scale-110 transition-transform duration-500 ease-out" />,
            link: '/volunteer',
            color: 'bg-accent'
        },
        {
            title: 'Connect',
            description: 'Join the conservation network',
            icon: <Users size={28} className="text-white mb-4 group-hover:scale-110 transition-transform duration-500 ease-out" />,
            link: '/connect',
            color: 'bg-emerald-700'
        },
    ];

    return (
        <div className="flex flex-col min-h-screen selection:bg-primary/30">
            {/* Background Image Setup */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-[1]"></div>
                <img
                    src="/bg-hero.jpg"
                    alt="Wild dogs walking on a road in nature"
                    className="w-full h-full object-cover animate-ken-burns brightness-[0.80] dark:brightness-50"
                />
            </div>

            {/* Hero Section */}
            <main className="flex-grow flex flex-col items-center justify-center relative px-4 w-full pt-40 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center w-full max-w-5xl mx-auto z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Join the next generation of conservation.
                    </motion.div>

                    <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-[7rem] text-white mb-6 leading-[1.05] tracking-tight drop-shadow-2xl">
                        For the Wild,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-primary to-emerald-100 italic pr-4">
                            By the Youth
                        </span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                        Empowering the next generation to protect our planet's biodiversity through immersive conservation experiences.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 relative h-16 w-full">
                        <motion.div
                            layout
                            className={`flex items-center h-16 rounded-full shadow-2xl border border-white/20 cursor-pointer overflow-hidden transition-colors duration-500 ease-out ${isSearchExpanded ? 'w-full max-w-[600px] bg-white/95 backdrop-blur-xl' : 'w-[64px] bg-white/10 backdrop-blur-md hover:bg-white/20'}`}
                            onClick={() => setIsSearchExpanded(true)}
                        >
                            <button className={`w-16 h-16 flex items-center justify-center transition-colors duration-300 ${isSearchExpanded ? 'text-primary' : 'text-white'}`}>
                                <Search size={24} />
                            </button>

                            {isSearchExpanded && (
                                <>
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search species, regions, or programs..."
                                        className="bg-transparent border-none focus:ring-0 text-gray-800 placeholder-gray-400 font-medium flex-grow h-full px-2 outline-none text-lg"
                                        onBlur={(e) => {
                                            if (!e.relatedTarget && !searchQuery) {
                                                setIsSearchExpanded(false);
                                            }
                                        }}
                                        autoFocus
                                    />
                                    <Link to="/opportunities" className="hidden sm:flex items-center gap-2 bg-primary text-white text-sm font-bold px-8 py-3 rounded-full mr-2 hover:bg-primary-hover transition-all duration-300 shadow-lg hover:shadow-primary/40 group">
                                        Search
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </>
                            )}
                        </motion.div>
                    </div>
                </motion.div>
            </main>

            {/* Transition Overlay & Marquee */}
            <div className="relative z-10 w-full flex flex-col items-center">
                {/* Marquee Banner */}
                <div className="w-full bg-primary overflow-hidden py-3 border-y border-emerald-400/30 flex">
                    <motion.div
                        initial={{ x: "0%" }}
                        animate={{ x: "-50%" }}
                        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                        className="flex whitespace-nowrap text-emerald-950 font-display font-bold text-sm tracking-[0.2em] uppercase"
                    >
                        <span className="mx-4">PROTECT</span> • <span className="mx-4">PRESERVE</span> • <span className="mx-4">CONSERVE</span> •
                        <span className="mx-4">PROTECT</span> • <span className="mx-4">PRESERVE</span> • <span className="mx-4">CONSERVE</span> •
                        <span className="mx-4">PROTECT</span> • <span className="mx-4">PRESERVE</span> • <span className="mx-4">CONSERVE</span> •
                        <span className="mx-4">PROTECT</span> • <span className="mx-4">PRESERVE</span> • <span className="mx-4">CONSERVE</span> •
                        <span className="mx-4">PROTECT</span> • <span className="mx-4">PRESERVE</span> • <span className="mx-4">CONSERVE</span> •
                        <span className="mx-4">PROTECT</span> • <span className="mx-4">PRESERVE</span> • <span className="mx-4">CONSERVE</span> •
                    </motion.div>
                </div>

                <div className="blur-transition-overlay h-48 w-full -mt-2 pointer-events-none"></div>
            </div>

            {/* Info Section - Premium Bento Grid */}
            <section className="relative z-20 bg-background-light dark:bg-background-dark w-full pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative -mt-24"
                    >
                        {/* Header Area */}
                        <div className="text-center mb-16">
                            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
                                Make a <span className="text-primary italic">Real Impact</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                                Join a global community of young conservationists. Discover local initiatives, educational resources, and fieldwork opportunities designed to save wildlife.
                            </p>
                        </div>

                        {/* Bento Grid layout */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">

                            {/* Large Featured Card */}
                            <div className="md:col-span-2 md:row-span-2 relative rounded-[32px] overflow-hidden group shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200"
                                    alt="Youth volunteer helping with conservation"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>

                                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/90 text-white text-xs font-bold uppercase tracking-wider mb-6">
                                        <PlayCircle size={14} /> Featured Story
                                    </div>
                                    <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 line-clamp-2">
                                        The Frontlines of Forest Restoration in the Amazon
                                    </h3>
                                    <Link to="/learn" className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold group/link">
                                        Read the full story
                                        <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            {/* Smaller Action Cards */}
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                                    className={`${feature.color} rounded-[32px] p-8 flex flex-col justify-between group overflow-hidden relative transition-transform hover:-translate-y-2 shadow-xl hover:shadow-2xl`}
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                                    <div>
                                        {feature.icon}
                                        <h3 className="font-display font-bold text-white text-2xl mb-2">{feature.title}</h3>
                                        <p className="text-white/80 text-sm font-medium">{feature.description}</p>
                                    </div>

                                    <Link
                                        to={feature.link}
                                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-gray-900 transition-colors duration-300 mt-4 self-end"
                                    >
                                        <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
