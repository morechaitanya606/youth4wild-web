import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Connect() {
    return (
        <div className="bg-gray-50 dark:bg-[#121212] min-h-screen pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 dark:text-white mb-4">
                        Our <span className="text-primary">Team</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Meet the passionate individuals driving our mission to protect wildlife and empower the next generation.
                    </p>
                </motion.div>

                {/* Team Placeholder Section */}
                <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-800/50 rounded-3xl border border-dashed border-gray-300 dark:border-gray-700">
                    <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6 text-gray-400 dark:text-gray-500">
                        <Camera size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Team Photos Coming Soon</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
                        We are currently gathering our team member highlights. Check back soon to see the faces behind Youth4Wild!
                    </p>
                </div>

                {/* Call to action for joining */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-3xl p-8 max-w-3xl mx-auto shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Want to join our team?</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">Partner with us or become a contributor to our cause by filling out our application.</p>
                        <a href="mailto:youth4wildorg@gmail.com" className="inline-block bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                            Get in touch
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
