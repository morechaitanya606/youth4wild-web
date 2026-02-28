import { Link } from 'react-router-dom';
import { Leaf, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-[#121212] pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 relative z-10 text-center md:text-left">
                    <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
                        <Link to="/" className="flex items-center gap-3 group cursor-pointer mb-6">
                            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white shadow-lg">
                                <Leaf size={20} />
                            </div>
                            <span className="font-display font-bold text-xl text-gray-900 dark:text-white tracking-wide">
                                Youth4Wild
                            </span>
                        </Link>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                            Empowering the next generation to protect our planet's biodiversity through immersive conservation experiences.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Programs</h4>
                        <ul className="space-y-3">
                            <li><Link to="/opportunities" className="text-gray-500 hover:text-primary transition-colors text-sm">Field Work</Link></li>
                            <li><Link to="/opportunities" className="text-gray-500 hover:text-primary transition-colors text-sm">Marine Conservation</Link></li>
                            <li><Link to="/learn" className="text-gray-500 hover:text-primary transition-colors text-sm">Educational Resources</Link></li>
                            <li><Link to="/volunteer" className="text-gray-500 hover:text-primary transition-colors text-sm">Virtual Volunteering</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Community</h4>
                        <ul className="space-y-3">
                            <li><Link to="/connect" className="text-gray-500 hover:text-primary transition-colors text-sm">Member Directory</Link></li>
                            <li><Link to="/connect" className="text-gray-500 hover:text-primary transition-colors text-sm">Forums & Discussions</Link></li>
                            <li><Link to="/contact" className="text-gray-500 hover:text-primary transition-colors text-sm">Partner with Us</Link></li>
                            <li><Link to="/contact" className="text-gray-500 hover:text-primary transition-colors text-sm">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Stay updated with our latest expeditions and news.</p>
                        <form className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-gray-100 dark:bg-gray-800 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary w-full"
                            />
                            <button className="bg-primary hover:bg-primary-hover text-white rounded-lg px-4 py-2 text-sm font-semibold transition-colors mt-2 sm:mt-0">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-gray-100 dark:border-gray-800 text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} Youth4Wild. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
