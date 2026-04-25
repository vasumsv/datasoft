import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Cpu } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

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
  };

  return (
    <footer id="contact" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-bronze-500 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-gold-500 to-bronze-600 rounded-xl flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Datasoft Computers</h3>
                <p className="text-xs text-gray-400">Since 1999</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted partner for computer training, laptop sales, and IT solutions in Ranebennur since 1999.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, color: 'hover:bg-blue-600' },
                { icon: Instagram, color: 'hover:bg-pink-600' },
                { icon: Youtube, color: 'hover:bg-red-600' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-gold-500 to-bronze-600 rounded-full mr-3"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {menuItems.map((item, index) =>
                item.path.includes('#') ? (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className="text-gray-400 hover:text-gold-400 transition-colors flex items-center group"
                    >
                      <span className="w-0 h-px bg-gold-400 group-hover:w-4 transition-all mr-0 group-hover:mr-2"></span>
                      {item.name}
                    </button>
                  </motion.li>
                ) : (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-gold-400 transition-colors flex items-center group"
                    >
                      <span className="w-0 h-px bg-gold-400 group-hover:w-4 transition-all mr-0 group-hover:mr-2"></span>
                      {item.name}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-gold-500 to-bronze-600 rounded-full mr-3"></span>
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                'Computer Training',
                'Laptop Sales',
                'Desktop Sales',
                'Repair Services',
                'CCTV Installation',
                'IT Solutions',
              ].map((service, index) => (
                <motion.li
                  key={service}
                  className="text-gray-400 flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-gold-500 to-bronze-600 rounded-full mr-3"></span>
              Contact Info
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400">
                  Main Road, Ranebennur<br />
                  Karnataka, India
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-gold-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@datasoftcomputers.com" className="text-gray-400 hover:text-gold-400 transition-colors">
                  info@datasoftcomputers.com
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <Clock className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400">
                  Mon - Sat: 9:00 AM - 7:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-gray-400 text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              © {currentYear} Datasoft Computers. All rights reserved. • Built with care in Ranebennur
            </motion.p>
            <motion.div
              className="flex space-x-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-700">•</span>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
