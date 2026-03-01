import { Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <div className="bg-white dark:bg-[#121212] min-h-screen pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 dark:text-white mb-4">
                        Get in <span className="text-primary">Touch</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have questions about our programs or want to partner with Youth4Wild? We'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 lg:p-12 border border-gray-100 dark:border-gray-800"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-4 rounded-full text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Our Headquarters</h4>
                                    <p className="text-gray-600 dark:text-gray-400">India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-4 rounded-full text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email Us</h4>
                                    <p className="text-gray-600 dark:text-gray-400">contact@youth4wild.org</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Partner With Us */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col justify-center"
                    >
                        <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">Partner with us</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                            We are looking for wildlife conservation organisations to partner with us and join our mission, helping a large number of enthusiastic youth build their career in wildlife conservation.
                        </p>
                        <a href="mailto:youth4wildorg@gmail.com" className="inline-block text-center w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-lg shadow-primary/30">
                            Reach out to youth4wildorg@gmail.com for partnerships
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
