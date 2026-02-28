import { mockCourses } from '../data/mockData';
import { PlayCircle, Clock, BookOpen, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Learn() {
    return (
        <div className="bg-gray-50 dark:bg-[#121212] min-h-screen pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 dark:text-white mb-4">
                        Educational <span className="text-primary">Resources</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Expand your knowledge with our expertly crafted courses and guides on wildlife conservation, ecology, and fieldwork.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockCourses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col h-full group cursor-pointer"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={course.thumbnail}
                                    alt={course.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                    <PlayCircle size={64} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-lg" />
                                </div>
                                <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                                    {course.category}
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                    {course.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                                    {course.description}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                                        <Clock size={16} className="mr-1" />
                                        {course.duration}
                                    </div>
                                    <div className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                                        <BarChart size={16} className="mr-1" />
                                        {course.level}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Resources Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gradient-to-r from-green-900 to-green-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

                    <div className="relative z-10 max-w-2xl text-center md:text-left">
                        <h3 className="text-3xl font-bold text-white mb-4">Can't find what you're looking for?</h3>
                        <p className="text-green-100 text-lg">
                            Explore our extensive library of field guides, research papers, and webinars.
                        </p>
                    </div>

                    <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
                        <button className="w-full md:w-auto bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-colors shadow-lg flex items-center justify-center gap-2">
                            <BookOpen size={20} />
                            Browse Library
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
