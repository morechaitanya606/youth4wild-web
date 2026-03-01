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

                <div className="max-w-3xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
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


                </div>
            </div>
        </div>
    );
}
