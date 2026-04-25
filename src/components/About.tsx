import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    'Established in 1999',
    '25+ Years of Excellence',
    'Trained 10,000+ Students',
    'Authorized Multi-Brand Dealer',
    'Expert Technical Team',
    'Affordable Solutions',
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-cream/30 to-white"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-gold-300 to-bronze-400 rounded-3xl blur-2xl opacity-20"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative glass-morphism rounded-3xl p-12 shadow-2xl border-2 border-white/50">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { num: '25+', label: 'Years' },
                    { num: '10k+', label: 'Students' },
                    { num: '100%', label: 'Satisfaction' },
                    { num: '24/7', label: 'Support' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gold-200/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <div className="text-4xl font-bold bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent mb-2">
                        {item.num}
                      </div>
                      <div className="text-gray-600 text-sm font-semibold tracking-wide">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8 flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-gold-100 to-bronze-100 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Award className="w-6 h-6 text-gold-600" />
                  <span className="text-gold-800 font-semibold">Trusted by Ranebennur</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-gold-100 to-bronze-100 rounded-full text-gold-700 font-semibold text-sm tracking-wide">
                OUR STORY
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              About{' '}
              <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                Datasoft Computers
              </span>
            </h2>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Datasoft Computers has been serving Ranebennur since 1999, providing computer training,
              sales, and services to thousands of students and customers. We are committed to delivering
              quality education and reliable technology solutions at affordable prices.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-gold-600 group-hover:scale-125 transition-transform" />
                  </div>
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#contact"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-bronze-600 text-white rounded-xl font-semibold shadow-lg overflow-hidden relative"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-bronze-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">Learn More</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
