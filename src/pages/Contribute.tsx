import { HeartHandshake, Globe, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contribute() {
    const steps = [
        {
            icon: <Globe size={32} className="text-white" />,
            title: "Find a Project",
            description: "Browse our list of global conservation opportunities tailored to various skill levels.",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <ShieldCheck size={32} className="text-white" />,
            title: "Get Certified",
            description: "Complete mandatory online training and safety protocols before heading to the field.",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: <HeartHandshake size={32} className="text-white" />,
            title: "Make an Impact",
            description: "Join scientists and locals to protect ecosystems and endangered species firsthand.",
            color: "from-green-500 to-primary"
        }
    ];

    return (
        <div className="bg-white dark:bg-[#121212] min-h-screen pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 font-semibold mb-6">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                        </span>
                        Active recruitment
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-extrabold text-gray-900 dark:text-white mb-6">
                        Become a <span className="text-primary">Contributor</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                        Action is the antidote to despair. Roll up your sleeves, head into the field, and be part of the generation that heals the planet.
                    </p>
                </motion.div>

                {/* How it works */}
                <div className="py-12 border-t border-b border-gray-100 dark:border-gray-800 mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting lines for large screens */}
                        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>

                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg shadow-current/30 flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform duration-300`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                            </motion.div>
                        ))}
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
