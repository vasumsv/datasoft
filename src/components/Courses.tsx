import { motion } from 'framer-motion';
import { BookOpen, Calculator, Image, Code, MessageSquare, ArrowRight, Clock } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      icon: BookOpen,
      title: 'Computer Basics',
      description: 'Learn fundamentals of computers, Windows OS, MS Office, and internet basics.',
      duration: '2 Months',
      color: 'from-gold-500 to-gold-600',
    },
    {
      icon: Calculator,
      title: 'Tally',
      description: 'Master accounting software with GST, inventory management, and financial reports.',
      duration: '1.5 Months',
      color: 'from-bronze-500 to-bronze-600',
    },
    {
      icon: Image,
      title: 'DTP',
      description: 'Desktop publishing with Photoshop, CorelDRAW, and professional design skills.',
      duration: '3 Months',
      color: 'from-gold-600 to-gold-700',
    },
    {
      icon: Code,
      title: 'C / C++',
      description: 'Programming fundamentals with C and object-oriented concepts with C++.',
      duration: '4 Months',
      color: 'from-gold-500 to-bronze-600',
    },
    {
      icon: MessageSquare,
      title: 'Spoken English',
      description: 'Improve your English communication skills with interactive sessions.',
      duration: '2 Months',
      color: 'from-bronze-500 to-gold-600',
    },
  ];

  return (
    <section id="courses" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sand/20 via-transparent to-cream/20"></div>
      </div>

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
              TRAINING PROGRAMS
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Our <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professional training programs designed to enhance your skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-bronze-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              />

              <div className="relative h-full glass-morphism rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-white/40 overflow-hidden">
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${course.color} opacity-10 rounded-bl-full transition-all duration-500 group-hover:scale-150 group-hover:opacity-20`}></div>

                <div className="relative z-10 space-y-6">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <course.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gold-700 transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {course.description}
                    </p>

                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock size={16} className="text-gold-600" />
                      <span className="font-semibold">Duration: {course.duration}</span>
                    </div>
                  </div>

                  <motion.button
                    className={`w-full flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r ${course.color} text-white rounded-xl font-semibold shadow-md group-hover:shadow-lg transition-all relative overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Enroll Now</span>
                    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
