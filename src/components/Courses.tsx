import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Courses/Computer%20Basics.png',
      title: 'Computer Basics',
      description: 'Learn fundamentals of computers, Windows OS, MS Office, and internet basics.',
      duration: '2 Months',
      color: 'from-gold-500 to-gold-600',
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Courses/Tally.png',
      title: 'Tally',
      description: 'Master accounting software with GST, inventory management, and financial reports.',
      duration: '1.5 Months',
      color: 'from-bronze-500 to-bronze-600',
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Courses/DTP.png',
      title: 'DTP',
      description: 'Desktop publishing with Photoshop, CorelDRAW, and professional design skills.',
      duration: '3 Months',
      color: 'from-gold-600 to-gold-700',
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Courses/C%20%3A%20C%2B%2B.png',
      title: 'C / C++',
      description: 'Programming fundamentals with C and object-oriented concepts with C++.',
      duration: '4 Months',
      color: 'from-gold-500 to-bronze-600',
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Courses/Spoken%20English.png',
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
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-bronze-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"
              />

              <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-white/40 group-hover:border-gold-300/60 bg-white/80 backdrop-blur-sm flex flex-col">
                {/* Image top */}
                <div className="w-full overflow-hidden flex-shrink-0" style={{ height: '180px' }}>
                  <img
                    src={course.image}
                    alt={course.title}
                    style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                  />
                </div>

                {/* Content below */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gold-700 transition-colors">
                      {course.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-xs text-gray-500 flex-shrink-0 ml-2">
                      <Clock size={13} className="text-gold-600" />
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm flex-1 mb-5">
                    {course.description}
                  </p>

                  <motion.button
                    className={`w-full flex items-center justify-center space-x-2 px-5 py-3 bg-gradient-to-r ${course.color} text-white rounded-xl font-semibold shadow-md group-hover:shadow-lg transition-all`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Enroll Now</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
