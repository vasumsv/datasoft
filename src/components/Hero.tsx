import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              className="inline-flex items-center space-x-2 glass-morphism px-5 py-2.5 rounded-full shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles size={18} className="text-gold-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-gold-700 to-bronze-600 bg-clip-text text-transparent">
                Established 1999 • 25+ Years of Excellence
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Trusted Computer Training and{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-gold-600 via-bronze-500 to-gold-700 bg-clip-text text-transparent">
                  IT Solutions
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-gold-300 to-gold-400 opacity-30 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Training, Laptop Sales, Repair Services and Technology Solutions in Ranebennur
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#courses"
                className="group relative flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500 via-gold-600 to-bronze-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-bronze-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-50"
                  animate={{
                    background: [
                      'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                      'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                      'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Zap size={20} className="relative z-10" />
                <span className="relative z-10">Enroll Now</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#products"
                className="group flex items-center justify-center space-x-2 px-8 py-4 glass-morphism-dark rounded-xl font-semibold text-gray-700 hover:text-gold-700 border-2 border-gold-300/50 hover:border-gold-400 transition-all shadow-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get Best Price</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -25, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-8 bg-gradient-to-r from-gold-400 via-bronze-400 to-gold-500 rounded-3xl blur-3xl opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />

                <div className="relative glass-morphism rounded-3xl p-8 shadow-2xl">
                  <div className="aspect-square bg-gradient-to-br from-gold-500 via-bronze-500 to-gold-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0"
                        style={{
                          backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.3) 50%, transparent 52%), linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.3) 50%, transparent 52%)',
                          backgroundSize: '20px 20px'
                        }}
                      />
                    </div>

                    <motion.div
                      className="relative z-10 text-white text-center"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    >
                      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="drop-shadow-2xl">
                        <rect x="40" y="40" width="120" height="80" rx="8" stroke="white" strokeWidth="4" fill="white" fillOpacity="0.2"/>
                        <rect x="55" y="55" width="90" height="50" rx="4" fill="white" fillOpacity="0.3"/>
                        <circle cx="100" cy="140" r="5" fill="white"/>
                        <rect x="80" y="145" width="40" height="3" fill="white"/>
                        <rect x="60" y="148" width="80" height="8" rx="4" fill="white"/>
                        <motion.g
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <circle cx="70" cy="75" r="3" fill="white"/>
                          <circle cx="85" cy="75" r="3" fill="white"/>
                          <circle cx="100" cy="75" r="3" fill="white"/>
                        </motion.g>
                      </svg>

                      <motion.p
                        className="mt-6 font-bold text-xl tracking-wide"
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Technology Excellence
                      </motion.p>
                    </motion.div>

                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-white rounded-full"
                        style={{
                          top: `${20 + Math.random() * 60}%`,
                          left: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          y: [-20, 20],
                          x: [-10, 10],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-2 border-gold-400/40 rounded-full"
                style={{
                  width: `${120 + i * 40}px`,
                  height: `${120 + i * 40}px`,
                  top: `${20 + i * 15}%`,
                  left: `${15 + i * 10}%`,
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8 + i * 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
