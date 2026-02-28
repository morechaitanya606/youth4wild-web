import { mockOpportunities } from '../data/mockData';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Opportunities() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, bounce: 0.4, duration: 0.8 } }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pt-32 pb-24 selection:bg-primary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex flex-col items-center">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Get Involved</span>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
                            Conservation <span className="text-primary italic font-light">Opportunities</span>
                        </h1>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-body leading-relaxed">
                        Discover impactful field projects and volunteer programs around the globe. Filter by region, type, or duration to find your perfect fit.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {mockOpportunities.map((opp) => (
                        <motion.div
                            key={opp.id}
                            variants={itemVariants}
                            className="bg-white dark:bg-surface-dark rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-white/5 flex flex-col h-full group"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-500 z-[1]"></div>
                                <img
                                    src={opp.image}
                                    alt={opp.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute top-6 left-6 z-[2]">
                                    <div className="bg-white/90 dark:bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-gray-900 dark:text-white shadow-sm uppercase tracking-wider">
                                        {opp.type}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                                    {opp.title}
                                </h3>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                            <MapPin size={14} className="text-primary" />
                                        </div>
                                        {opp.location}
                                    </div>
                                    <div className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300">
                                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-3">
                                            <Calendar size={14} className="text-accent" />
                                        </div>
                                        {opp.date}
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 flex-grow line-clamp-3 leading-relaxed">
                                    {opp.description}
                                </p>

                                <button className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-gray-50 dark:bg-white/5 hover:bg-primary dark:hover:bg-primary text-gray-900 dark:text-white font-bold rounded-2xl transition-colors duration-300 group/btn">
                                    View Details
                                    <ArrowUpRight size={18} className="text-gray-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
