import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500 via-bronze-500 to-gold-600"></div>

      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <Sparkles className="w-8 h-8 text-white" />
            <Sparkles className="w-6 h-6 text-white" />
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Looking for computer training or affordable laptops in Ranebennur?
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl text-white/90 mb-12 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Get in touch with us today for the best deals and professional services
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="tel:+919876543210"
              className="group relative inline-flex items-center justify-center space-x-3 px-10 py-5 bg-white rounded-xl font-bold text-lg overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white to-cream group-hover:from-cream group-hover:to-white transition-all"></div>
              <Phone size={24} className="relative z-10 text-gold-600" />
              <span className="relative z-10 bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">Call Now</span>
              <ArrowRight size={20} className="relative z-10 text-gold-600 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="https://wa.me/919876543210"
              className="group relative inline-flex items-center justify-center space-x-3 px-10 py-5 bg-green-500 hover:bg-green-600 rounded-xl font-bold text-lg text-white shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <MessageCircle size={24} className="relative z-10" />
              <span className="relative z-10">WhatsApp Now</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-12 inline-flex items-center space-x-3 px-6 py-3 glass-morphism-dark rounded-full border border-white/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">Available Monday - Saturday, 9:00 AM - 7:00 PM</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
