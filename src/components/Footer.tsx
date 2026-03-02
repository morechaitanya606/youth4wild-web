import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-[#121212] pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 relative z-10 text-center md:text-left">
                    <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
                        <Link to="/" className="flex items-center gap-3 group cursor-pointer mb-6">
                            <img src="/logo.jpeg" alt="Youth4Wild Logo" className="w-10 h-10 rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300 border-2 border-white/20" />
                            <span className="font-display font-bold text-xl text-gray-900 dark:text-white tracking-wide">
                                Youth4Wild
                            </span>
                        </Link>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                            Youth4Wild is a youth-led platform igniting passion for wildlife conservation among students and young professionals from different disciplines, primarily based in India.
                        </p>
                        <div className="flex gap-4">
                            <a href="http://instagram.com/youth4wild/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="https://www.linkedin.com/in/youth-for-wild-1865093b4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                            <a href="mailto:contact@youth4wild.org" className="text-gray-400 hover:text-primary transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Community</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Get involved</a></li>
                            <li><a href="mailto:youth4wildorg@gmail.com" className="text-gray-500 hover:text-primary transition-colors text-sm">Partner with us</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Suggestions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Stay tuned for more</p>
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
