import { motion } from 'framer-motion';
import { GraduationCap, Laptop, Wrench, Camera } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Training',
      description: 'Expert computer training in Basics, Tally, DTP, C/C++, and Spoken English for all skill levels.',
      gradient: 'from-gold-500 to-bronze-500',
    },
    {
      icon: Laptop,
      title: 'Laptop Sales',
      description: 'New and refurbished laptops and desktops from top brands at the best prices in Ranebennur.',
      gradient: 'from-bronze-500 to-gold-600',
    },
    {
      icon: Wrench,
      title: 'Repair Services',
      description: 'Professional laptop, desktop, and printer repair services with genuine parts and warranty.',
      gradient: 'from-gold-600 to-gold-500',
    },
    {
      icon: Camera,
      title: 'CCTV Solutions',
      description: 'Complete CCTV installation and monitoring solutions for homes and businesses.',
      gradient: 'from-gold-500 to-bronze-600',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sand/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-gold-100 to-bronze-100 rounded-full text-gold-700 font-semibold text-sm tracking-wide">
              WHAT WE OFFER
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Our <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive technology solutions for training, sales, and services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-bronze-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"
                whileHover={{ scale: 1.1 }}
              />

              <div className="relative h-full glass-morphism rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 border-2 border-white/40 group-hover:border-gold-300/60">
                <div className="relative z-10 space-y-5">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gold-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <motion.div
                    className="pt-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: '60px' }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-1 bg-gradient-to-r from-gold-500 to-bronze-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
