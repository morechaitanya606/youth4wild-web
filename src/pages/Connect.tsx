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

                {/* Team Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Ishaan Acharya */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    >
                        <div className="aspect-[4/5] overflow-hidden relative">
                            <img src="/team/Ishaan Acharya.jpeg" alt="Ishaan Acharya" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex gap-3 mb-3 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    <a href="https://www.instagram.com/ishaanacharya11/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/ishaan-acharya-32416b274/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">Ishaan Acharya</h3>
                            <p className="text-primary font-medium">Founder</p>
                        </div>
                    </motion.div>

                    {/* Ratnakar Hiremath */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-gray-800 rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    >
                        <div className="aspect-[4/5] overflow-hidden relative">
                            <img src="/team/Ratnakar Hiremath.jpeg" alt="Ratnakar Hiremath" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex gap-3 mb-3 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    <a href="https://www.instagram.com/ratnakar.hiremath?igsh=MW9weHduMGlyajZkeQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/ratnakar-hiremath-688317281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">Ratnakar Hiremath</h3>
                            <p className="text-primary font-medium">Core team member</p>
                        </div>
                    </motion.div>

                    {/* Reva Murudkar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-gray-800 rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    >
                        <div className="aspect-[4/5] overflow-hidden relative">
                            <img src="/team/Reva Murudkar.jpeg" alt="Reva Murudkar" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex gap-3 mb-3 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    <a href="https://www.instagram.com/whiskersandscrubs?igsh=MTZuNDUzaDFjbXhwaw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/reva-murudkar-2471163b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">Reva Murudkar</h3>
                            <p className="text-primary font-medium">Core team member</p>
                        </div>
                    </motion.div>

                    {/* Shantanu Deshpande */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white dark:bg-gray-800 rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    >
                        <div className="aspect-[4/5] overflow-hidden relative">
                            <img src="/team/Shantanu Deshpande.jpeg" alt="Shantanu Deshpande" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex gap-3 mb-3 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    <a href="https://www.instagram.com/shantanu.deshpande_?igsh=MTZ6dTZ5Z2UyNzVrZQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/shantanu-deshpande-20532a228?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">Shantanu Deshpande</h3>
                            <p className="text-primary font-medium">Core team member</p>
                        </div>
                    </motion.div>
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
