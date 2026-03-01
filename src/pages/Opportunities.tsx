import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

export default function Opportunities() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pt-32 pb-24 selection:bg-primary/30 flex items-center justify-center">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-8 shadow-sm">
                        <Leaf size={40} className="animate-pulse" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
                        Exciting <span className="text-primary italic font-light">Opportunities</span> <br className="hidden md:block" /> Coming Soon
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-body leading-relaxed">
                        We're currently developing a comprehensive directory of global conservation field projects and volunteer programs. Check back soon!
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
