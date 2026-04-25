import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Tally Student',
      content: 'Excellent training! The instructors are very knowledgeable and patient. I completed my Tally course and now working as an accountant.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'DTP Course Graduate',
      content: 'Best computer training center in Ranebennur. Learned Photoshop and CorelDRAW. Now I am running my own design studio.',
      rating: 5,
    },
    {
      name: 'Amit Patil',
      role: 'Laptop Customer',
      content: 'Bought a laptop at the best price with excellent after-sales service. Very trustworthy and professional team.',
      rating: 5,
    },
    {
      name: 'Sneha Desai',
      role: 'C++ Student',
      content: 'Great learning environment. The C++ course helped me get placement in a software company. Highly recommended!',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sand/10 via-cream/20 to-sand/10"></div>

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
              TESTIMONIALS
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            What Our <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real feedback from our valued students and customers
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-gold-300 to-bronze-400 rounded-3xl blur-2xl opacity-20"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="relative glass-morphism rounded-3xl p-12 lg:p-16 shadow-2xl border-2 border-white/50">
                  <Quote className="w-16 h-16 text-gold-500 mb-8 opacity-50" />

                  <div className="flex mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-7 h-7 text-gold-500 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-2xl lg:text-3xl text-gray-700 mb-10 leading-relaxed font-light italic">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex items-center">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-gold-500 to-bronze-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-5 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {testimonials[currentIndex].name.charAt(0)}
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center mt-10 space-x-6">
            <motion.button
              onClick={prev}
              className="w-14 h-14 glass-morphism border-2 border-gold-300/50 rounded-full shadow-lg flex items-center justify-center hover:border-gold-400 transition-all group"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-gold-700 group-hover:text-gold-800" />
            </motion.button>

            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-gold-500 to-bronze-600 w-12'
                      : 'bg-gray-300 hover:bg-gold-400 w-3'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-14 h-14 glass-morphism border-2 border-gold-300/50 rounded-full shadow-lg flex items-center justify-center hover:border-gold-400 transition-all group"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-gold-700 group-hover:text-gold-800" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
