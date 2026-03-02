import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contribute() {

    return (
        <div className="bg-white dark:bg-[#121212] min-h-screen pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-display font-extrabold text-gray-900 dark:text-white mb-8">
                        About <span className="text-primary">Us</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed text-left md:text-center">
                        Youth4Wild is a youth-led platform igniting passion for wildlife conservation in India. Founded by a veterinary student and his team, with experience in conservation across India and abroad, we bridge aspiring changemakers from different disciplines with real-world opportunities and resources, visibility for their work, and a network-building platform. Our mission: Unite young voices to protect India's biodiversity through shared resources, networks, and action.
                    </p>
                </motion.div>

                {/* Our Four Pillars */}
                <div className="py-12 border-t border-b border-gray-100 dark:border-gray-800 mb-20">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-16">Our Four Pillars</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Youth */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-primary mb-4">Youth</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Empowering students as leaders in conservation, drawing from diverse disciplines.
                            </p>
                        </motion.div>

                        {/* Wildlife */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-primary mb-4">Wildlife</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Connecting the youth with currently ongoing work in wildlife, and organizations that work directly with wildlife.
                            </p>
                        </motion.div>

                        {/* Network */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-primary mb-4">Network</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Building connections among peers, mentors, and organizations for collaborative impact.
                            </p>
                        </motion.div>

                        {/* Opportunities */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-primary mb-4">Opportunities</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Spotlighting internships, fellowships, and project opportunities for emerging conservationists nationwide.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden"
                >
                    {/* Decorative blobs */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to make a difference?</h2>
                        <p className="text-gray-300 text-lg mb-10">
                            Join thousands of young people who are already out there protecting wildlife, rebuilding habitats, and collecting crucial data.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdJInfhriQagtFmU3LbBWPsrho78-UkueNlfG1vHf29SIGsOA/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                                Give us your suggestions <ArrowRight size={20} />
                            </a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLRG4a2OOFbwGB2xjgRkHVS9QojYcVm5849aQ4-1OPtFq57Q/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-colors flex items-center justify-center">
                                Sign up to be a team member
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
