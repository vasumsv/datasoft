import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    if (path.includes('#')) {
      const [, hash] = path.split('#');
      if (location.pathname !== '/') {
        window.location.href = path;
      } else {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-morphism shadow-lg shadow-gold-200/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <motion.div
              className="flex items-center space-x-3 group cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-bronze-500 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-gold-500 to-bronze-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Cpu className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Datasoft Computers
                </h1>
                <p className="text-xs text-gray-600 tracking-wide">Since 1999</p>
              </div>
            </motion.div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => {
              const isActive = item.path === location.pathname ||
                              (item.path.includes('#') && location.pathname === '/' && location.hash === item.path.split('#')[1]);

              return item.path.includes('#') ? (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative px-4 py-2 transition-colors font-medium group ${
                    isActive ? 'text-gold-700' : 'text-gray-700 hover:text-gold-700'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gold-100 to-gold-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId="navbar-hover"
                  />
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-gold-500 to-bronze-600 rounded-full"
                      layoutId="navbar-active"
                    />
                  )}
                </motion.button>
              ) : (
                <Link key={item.name} to={item.path}>
                  <motion.div
                    className={`relative px-4 py-2 transition-colors font-medium group ${
                      isActive ? 'text-gold-700' : 'text-gray-700 hover:text-gold-700'
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gold-100 to-gold-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      layoutId="navbar-hover"
                    />
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-gold-500 to-bronze-600 rounded-full"
                        layoutId="navbar-active"
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <motion.a
              href="tel:+919876543210"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl border-2 border-gold-500 text-gold-700 hover:bg-gold-50 transition-all font-medium shadow-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={18} />
              <span>Call Now</span>
            </motion.a>
            <motion.a
              href="https://wa.me/919876543210"
              className="relative flex items-center space-x-2 px-5 py-2.5 rounded-xl text-white font-medium overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 group-hover:from-green-600 group-hover:to-green-700 transition-all"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-green-400 to-green-500 blur-lg transition-opacity"></div>
              <MessageCircle size={18} className="relative z-10" />
              <span className="relative z-10">WhatsApp</span>
            </motion.a>
          </div>

          <button
            className="lg:hidden text-gray-700 p-2 hover:bg-gold-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden glass-morphism border-t border-gold-200/30"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {menuItems.map((item, index) =>
                item.path.includes('#') ? (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gold-100 rounded-lg transition-colors font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.button>
                ) : (
                  <Link key={item.name} to={item.path}>
                    <motion.div
                      className="block px-4 py-3 text-gray-700 hover:bg-gold-100 rounded-lg transition-colors font-medium"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                )
              )}
              <div className="flex flex-col space-y-3 pt-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center space-x-2 px-5 py-3 rounded-xl border-2 border-gold-500 text-gold-700 font-medium"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919876543210"
                  className="flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-medium"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
