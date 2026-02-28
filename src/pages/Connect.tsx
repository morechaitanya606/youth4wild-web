import { mockMembers } from '../data/mockData';
import { MessageCircle, UserPlus, MapPin } from 'lucide-react';
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
                        Global <span className="text-primary">Community</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Connect with wildlife enthusiasts, professional conservationists, and volunteers from around the world.
                    </p>
                </motion.div>

                {/* Member Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white dark:border-gray-700 shadow-md">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                {member.name}
                            </h3>
                            <p className="text-primary font-medium text-sm mb-3">
                                {member.role}
                            </p>

                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 bg-gray-100 dark:bg-gray-900/50 px-3 py-1 rounded-full">
                                <MapPin size={14} className="mr-1" />
                                {member.location}
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-grow">
                                "{member.bio}"
                            </p>

                            <div className="flex gap-3 w-full mt-auto">
                                <button className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium py-2 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                                    <UserPlus size={18} />
                                    Connect
                                </button>
                                <button className="flex-1 bg-primary/10 hover:bg-primary text-primary hover:text-white font-medium py-2 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                                    <MessageCircle size={18} />
                                    Message
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to action for joining */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-3xl p-8 max-w-3xl mx-auto shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Want to join the directory?</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">Create a profile to share your expertise, connect with mentors, and collaborate on global projects.</p>
                        <button className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                            Create Profile
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
