import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <>
      <motion.a
        href="https://wa.me/919449900333?text=Hi, I would like to know more about your services"
        className="fixed bottom-8 left-6 z-50 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl text-white"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
        transition={{ delay: 1, y: { duration: 2, repeat: Infinity } }}
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={28} />
      </motion.a>

      <motion.a
        href="tel:+919449900333"
        className="fixed bottom-8 right-6 z-50 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-2xl text-white"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
        transition={{ delay: 1, y: { duration: 2, repeat: Infinity, delay: 0.3 } }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <Phone size={28} />
      </motion.a>
    </>
  );
}
