import { motion } from 'framer-motion';
import { Tag, Sparkles } from 'lucide-react';

export default function Products() {
  const products = [
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Products/Laptops.png',
      title: 'Laptops',
      description: 'Latest models from HP, Dell, Lenovo, and more',
      color: 'from-gold-500 to-gold-600',
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Products/Desktops.png',
      title: 'Desktops',
      description: 'Custom-built and branded desktop systems',
      color: 'from-bronze-500 to-bronze-600',
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Products/Printers.png',
      title: 'Printers',
      description: 'Inkjet, laser, and multifunction printers',
      color: 'from-gold-600 to-bronze-500',
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Products/CCTV.png',
      title: 'CCTV',
      description: 'IP and analog security camera systems',
      color: 'from-gold-500 to-gold-700',
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Products/Accessories.png',
      title: 'Accessories',
      description: 'Keyboards, mice, speakers, and more',
      color: 'from-bronze-600 to-gold-600',
    },
  ];

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 2, 0],
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
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full shadow-lg mb-4"
            style={{
              background: 'linear-gradient(135deg, #FFF9E6 0%, #FFE599 100%)',
            }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Tag size={18} className="text-gold-700" />
            <span className="text-sm font-bold text-gold-800 tracking-wide">Best Price in Ranebennur</span>
            <Sparkles size={16} className="text-gold-600" />
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Our <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            New and refurbished technology products at competitive prices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.05 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-bronze-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-all duration-300"
              />

              <div className="relative h-full glass-morphism rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white/40 group-hover:border-gold-300/60">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gold-700 transition-colors">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>

                <motion.div
                  className="mt-4 h-1 bg-gradient-to-r from-gold-400 to-bronze-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center space-x-2 px-10 py-4 bg-gradient-to-r from-gold-500 via-gold-600 to-bronze-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-bronze-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10">Get Price Quote</span>
            <Sparkles size={20} className="relative z-10" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
