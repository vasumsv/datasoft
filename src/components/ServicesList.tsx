import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function ServicesList() {
  const services = [
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Professional%20services%20/Laptop%20Repair.png',
      title: 'Laptop Repair',
      description: 'Screen replacement, battery issues, hardware upgrades',
      color: 'from-gold-500 to-gold-600',
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Professional%20services%20/Desktop%20Repair.png',
      title: 'Desktop Repair',
      description: 'Component replacement, system upgrades, troubleshooting',
      color: 'from-bronze-500 to-bronze-600',
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Professional%20services%20/Printer%20Service.png',
      title: 'Printer Service',
      description: 'Repair, maintenance, cartridge replacement',
      color: 'from-gold-600 to-bronze-500',
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Professional%20services%20/Server%20Setup.png',
      title: 'Server Setup',
      description: 'Configuration, maintenance, network solutions',
      color: 'from-gold-500 to-gold-700',
    },
    {
      image: 'http://github.com/vasumsv/Vnova-Technologies/blob/main/vg%20computers/Professional%20services%20/CCTV%20Installation.png?raw=true',
      title: 'CCTV Installation',
      description: 'Complete installation, maintenance, monitoring',
      color: 'from-bronze-600 to-gold-600',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-white to-sand/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-gold-100 to-bronze-100 rounded-full text-gold-700 font-semibold text-sm tracking-wide">
              REPAIR & MAINTENANCE
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Professional <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Expert repair and maintenance for all your technology needs
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-bronze-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"
                />

                <div className="relative glass-morphism rounded-2xl p-6 lg:p-8 border-2 border-white/40 group-hover:border-gold-300/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <motion.div
                      className="rounded-2xl flex items-center justify-center"
                      style={{ width: '96px', height: '96px' }}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img src={service.image} alt={service.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }} />
                    </motion.div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 group-hover:text-gold-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 hidden sm:block">
                    <CheckCircle className="w-8 h-8 text-gold-600 group-hover:scale-125 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-block glass-morphism border-2 border-gold-300/50 rounded-3xl p-10 shadow-2xl">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
              <p className="text-gray-700 text-lg font-semibold">
                <span className="text-gold-700 font-bold">Fast Turnaround</span> • Genuine Parts • Warranty Included
              </p>
              <div className="w-2 h-2 bg-bronze-500 rounded-full animate-pulse"></div>
            </div>
            <motion.a
              href="tel:+919876543210"
              className="inline-flex items-center space-x-2 px-10 py-4 bg-gradient-to-r from-gold-500 to-bronze-600 text-white rounded-xl font-semibold shadow-lg overflow-hidden relative group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-bronze-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10">Book Service Now</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
