import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Opportunities', path: '/opportunities' },
        { name: 'About us', path: '/contribute' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${!isHome ? 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-sm' : scrolled ? 'bg-black/60 backdrop-blur-md border-white/10' : 'bg-transparent border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
                        <img src="/logo.jpeg" alt="Youth4Wild Logo" className="w-12 h-12 rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300 border-2 border-white/20" />
                        <span className={`font-display font-bold text-xl tracking-wide ${!isHome ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
                            Youth4Wild
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative font-medium text-sm uppercase tracking-wider transition-colors ${!isHome ? 'text-gray-700 dark:text-gray-300 hover:text-primary' : 'text-white hover:text-white/90'} after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-4px] after:left-1/2 ${!isHome ? 'after:bg-primary' : 'after:bg-white'} after:transition-all after:duration-300 hover:after:w-full after:-translate-x-1/2`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdLRG4a2OOFbwGB2xjgRkHVS9QojYcVm5849aQ4-1OPtFq57Q/viewform?usp=publish-editor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/50 transform hover:-translate-y-0.5"
                        >
                            Get involved
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`focus:outline-none ${!isHome ? 'text-gray-900 dark:text-white hover:text-primary' : 'text-white hover:text-gray-200'}`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-black/90 backdrop-blur-lg border-b border-white/10">
                    <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block px-3 py-3 text-white font-medium text-lg uppercase tracking-wider hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdLRG4a2OOFbwGB2xjgRkHVS9QojYcVm5849aQ4-1OPtFq57Q/viewform?usp=publish-editor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 px-8 py-3 w-max bg-primary text-white rounded-full font-semibold"
                        >
                            Get involved
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
