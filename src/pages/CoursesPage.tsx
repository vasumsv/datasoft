import { useState } from 'react';
import { motion } from 'framer-motion';
import FloatingActions from '../components/FloatingActions';
import {
  Users,
  Award,
  Clock,
  TrendingUp,
  DollarSign,
  BookMarked,
  GraduationCap,
  Briefcase,
  Building2,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  MessageCircle,
  Zap,
  Target,
  Star,
} from 'lucide-react';

export default function CoursesPage() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Courses/Computer%20Basics.png',
      title: 'Computer Basics',
      description: 'Learn fundamental computer skills, Windows OS, MS Office, typing, and essential applications for daily use',
      duration: '2 Months',
      color: 'from-gold-500 to-gold-600',
      highlights: ['Windows Basics', 'MS Office', 'Internet', 'Email'],
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Courses/Tally.png',
      title: 'Tally',
      description: 'Master accounting, GST, inventory management, and business finance using Tally ERP software',
      duration: '1.5 Months',
      color: 'from-bronze-500 to-bronze-600',
      highlights: ['GST Returns', 'Accounting', 'Invoicing', 'Reports'],
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Courses/DTP.png',
      title: 'DTP (Desktop Publishing)',
      description: 'Learn professional design tools like Photoshop, CorelDRAW, and PageMaker for print and digital media',
      duration: '3 Months',
      color: 'from-gold-600 to-gold-700',
      highlights: ['Photoshop', 'CorelDRAW', 'PageMaker', 'Design'],
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Courses/C%20%3A%20C%2B%2B.png',
      title: 'C Programming',
      description: 'Build strong programming logic, data structures, and understand core concepts of C language',
      duration: '3 Months',
      color: 'from-gold-500 to-bronze-600',
      highlights: ['Programming Logic', 'Data Types', 'Functions', 'Pointers'],
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Courses/C%20%3A%20C%2B%2B.png',
      title: 'C++ Programming',
      description: 'Learn object-oriented programming, advanced coding concepts, and real-world applications',
      duration: '3 Months',
      color: 'from-bronze-500 to-gold-600',
      highlights: ['OOP Concepts', 'Classes', 'Inheritance', 'Projects'],
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Courses/Spoken%20English.png',
      title: 'Spoken English',
      description: 'Improve communication skills, pronunciation, confidence, and fluency for career growth',
      duration: '2 Months',
      color: 'from-gold-600 to-bronze-500',
      highlights: ['Grammar', 'Vocabulary', 'Conversation', 'Confidence'],
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Practical Hands-on Training',
      description: 'Learn by doing with real-world projects and exercises',
    },
    {
      icon: Award,
      title: 'Experienced Trainer',
      description: '20+ years of teaching experience',
    },
    {
      icon: BookMarked,
      title: 'Industry-Relevant Syllabus',
      description: 'Updated content matching current job market needs',
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Morning, afternoon, and evening batches available',
    },
    {
      icon: DollarSign,
      title: 'Affordable Fees',
      description: 'Quality education at reasonable prices',
    },
    {
      icon: CheckCircle,
      title: 'Certificate Provided',
      description: 'Get certified after course completion',
    },
  ];

  const whoCanJoin = [
    {
      icon: GraduationCap,
      title: 'Students',
      description: 'School and college students wanting to learn new skills',
    },
    {
      icon: Users,
      title: 'Job Seekers',
      description: 'Individuals looking to improve employability',
    },
    {
      icon: Briefcase,
      title: 'Professionals',
      description: 'Working professionals upgrading their skills',
    },
    {
      icon: Building2,
      title: 'Business Owners',
      description: 'Entrepreneurs managing their own accounts and business',
    },
  ];

  const steps = [
    { number: '01', title: 'Choose Course', description: 'Select the course that matches your goals' },
    { number: '02', title: 'Contact or Visit', description: 'Call us or visit our center' },
    { number: '03', title: 'Attend Demo', description: 'Free demo class to understand teaching method' },
    { number: '04', title: 'Start Learning', description: 'Begin your journey to success' },
  ];

  const testimonials = [
    {
      name: 'Anjali Singh',
      course: 'Tally Course',
      content: 'The Tally course helped me get a job as an accountant. The teaching is very practical and easy to understand.',
      rating: 5,
    },
    {
      name: 'Vikram Patil',
      course: 'C++ Programming',
      content: 'Best programming training in Ranebennur. I got placed in a software company after completing C++ course.',
      rating: 5,
    },
    {
      name: 'Priya Deshmukh',
      course: 'DTP Course',
      content: 'Learned Photoshop and CorelDRAW professionally. Now running my own design studio successfully.',
      rating: 5,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you! We will contact you soon.');
      setFormData({ name: '', phone: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-400 rounded-full"
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
          <motion.div
            className="text-center max-w-4xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-gold-100 to-bronze-100 rounded-full text-gold-700 font-semibold text-sm tracking-wide">
                PROFESSIONAL TRAINING PROGRAMS
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Computer Training{' '}
              <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                Courses
              </span>{' '}
              in Ranebennur
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
              Practical and job-oriented courses designed for students, job seekers, and professionals
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                href="#courses"
                className="group relative flex items-center justify-center space-x-2 px-10 py-5 rounded-xl font-semibold text-white overflow-hidden text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500 via-gold-600 to-bronze-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-bronze-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Zap size={20} className="relative z-10" />
                <span className="relative z-10">Enroll Now</span>
              </motion.a>

              <motion.a
                href="#contact-form"
                className="group flex items-center justify-center space-x-2 px-10 py-5 glass-morphism-dark rounded-xl font-semibold text-gray-700 hover:text-gold-700 border-2 border-gold-300/50 hover:border-gold-400 transition-all shadow-lg text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Contact Us</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="courses" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sand/20 to-transparent"></div>

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
                AVAILABLE COURSES
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Choose Your <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">Course</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Select the right course to achieve your career goals
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

                <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-white/40 bg-white/80 backdrop-blur-sm flex flex-col">
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
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-gold-700 transition-colors">
                        {course.title}
                      </h3>
                      <div className="flex items-center space-x-1 text-xs text-gray-500 flex-shrink-0 ml-2">
                        <Clock size={13} className="text-gold-600" />
                        <span className="font-semibold">{course.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-sm mb-4 flex-1">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {course.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 bg-gold-100 text-gold-700 rounded-full font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      className={`w-full flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r ${course.color} text-white rounded-xl font-semibold shadow-md group-hover:shadow-lg transition-all`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.location.href = '#contact-form'}
                    >
                      <span>Enroll Now</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
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
                WHY CHOOSE US
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Benefits of Our <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">Training</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="glass-morphism rounded-2xl p-8 border-2 border-white/40 hover:border-gold-300/60 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gold-500 to-bronze-600 rounded-xl shadow-lg mb-5"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <benefit.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sand/10 via-cream/20 to-sand/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Who Can <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">Join?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whoCanJoin.map((item, index) => (
              <motion.div
                key={index}
                className="glass-morphism rounded-2xl p-8 text-center border-2 border-white/40 hover:border-gold-300/60 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-500 to-bronze-600 rounded-full shadow-lg mb-5"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              How to <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">Get Started</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-400 via-bronze-500 to-gold-600 transform -translate-x-1/2 hidden lg:block"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative mb-16 lg:mb-20"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:w-1/2"></div>
                  <div className="lg:w-1/2 lg:px-12">
                    <motion.div
                      className="glass-morphism rounded-2xl p-8 shadow-xl border-2 border-white/40 hover:border-gold-300/60 transition-all"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-6xl font-bold bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          <p className="text-gray-600 mt-2">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="hidden lg:block absolute left-1/2 top-1/2 w-8 h-8 bg-gradient-to-br from-gold-500 to-bronze-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-bronze-500/20 to-gold-600/20"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(255,193,7,0.2) 0%, rgba(205,127,50,0.2) 100%)',
              'linear-gradient(135deg, rgba(205,127,50,0.2) 0%, rgba(255,193,7,0.2) 100%)',
              'linear-gradient(135deg, rgba(255,193,7,0.2) 0%, rgba(205,127,50,0.2) 100%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gold-500 to-bronze-600 rounded-full shadow-2xl mb-6"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <TrendingUp className="w-12 h-12 text-white" strokeWidth={2} />
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Student <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">Success</span>
            </h2>

            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
              We have trained over 10,000 students who have improved their skills and career opportunities through our comprehensive training programs.
            </p>

            <motion.div
              className="glass-morphism rounded-3xl p-12 shadow-2xl border-2 border-white/50"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent mb-4">
                10,000+
              </div>
              <div className="text-2xl text-gray-700 font-semibold">Students Successfully Trained</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sand/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              What Our <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">Students</span> Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="glass-morphism rounded-3xl p-8 shadow-xl border-2 border-white/40"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 italic leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-bronze-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gold-500/10 via-bronze-500/10 to-gold-600/10"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center space-y-8 glass-morphism rounded-3xl p-12 lg:p-16 shadow-2xl border-2 border-white/50"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Join today and upgrade your skills with expert training
            </h2>

            <p className="text-xl text-gray-600">
              Start learning and achieve your career goals with us
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <motion.a
                href="#contact-form"
                className="group relative flex items-center justify-center space-x-2 px-10 py-5 rounded-xl font-semibold text-white overflow-hidden text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500 via-gold-600 to-bronze-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-bronze-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">Enroll Now</span>
              </motion.a>

              <motion.a
                href="https://wa.me/919876543210?text=I want to know about courses"
                className="group relative flex items-center justify-center space-x-2 px-10 py-5 rounded-xl text-white font-medium overflow-hidden text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 group-hover:from-green-600 group-hover:to-green-700 transition-all"></div>
                <MessageCircle size={20} className="relative z-10" />
                <span className="relative z-10">WhatsApp Now</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact-form" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Get in <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-xl text-gray-600">
                Fill the form below and we'll contact you soon
              </p>
            </div>

            <div className="glass-morphism rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-white/50 space-y-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-white/80 border-2 border-gold-300/50 rounded-xl focus:border-gold-500 focus:outline-none transition-all text-gray-900 font-medium"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 bg-white/80 border-2 border-gold-300/50 rounded-xl focus:border-gold-500 focus:outline-none transition-all text-gray-900 font-medium"
                    placeholder="Enter your phone number"
                    pattern="[0-9]{10}"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-8 py-5 bg-gradient-to-r from-gold-500 via-gold-600 to-bronze-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all text-lg disabled:opacity-50"
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Enquiry'}</span>
                  {!isSubmitting && <ArrowRight size={20} />}
                </motion.button>
              </form>

              <div className="pt-8 border-t border-gold-200/30 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Quick Contact</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center space-x-3 px-5 py-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all border border-gold-200/50"
                  >
                    <Phone className="w-5 h-5 text-gold-600" />
                    <span className="text-gray-700 font-medium">+91 98765 43210</span>
                  </a>

                  <a
                    href="mailto:info@datasoftcomputers.com"
                    className="flex items-center space-x-3 px-5 py-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all border border-gold-200/50"
                  >
                    <Mail className="w-5 h-5 text-gold-600" />
                    <span className="text-gray-700 font-medium">Email Us</span>
                  </a>
                </div>

                <div className="flex items-start space-x-3 px-5 py-4 bg-white/60 rounded-xl border border-gold-200/50">
                  <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">
                    Main Road, Ranebennur, Karnataka, India
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingActions />
    </div>
  );
}
