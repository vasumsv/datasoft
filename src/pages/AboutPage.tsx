import { motion } from 'framer-motion';
import { Award, Target, Eye, Users, ThumbsUp, Shield, TrendingUp, BookOpen, CheckCircle, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import FloatingActions from '../components/FloatingActions';

export default function AboutPage() {
  const timeline = [
    {
      year: '1999',
      title: 'Foundation',
      description: 'Started as computer training institute in Ranebennur',
      icon: Calendar,
    },
    {
      year: '2005',
      title: 'Course Expansion',
      description: 'Expanded into multiple specialized training programs',
      icon: BookOpen,
    },
    {
      year: '2013',
      title: 'Hardware Division',
      description: 'Started laptop sales and repair services',
      icon: Briefcase,
    },
    {
      year: '2026',
      title: 'Complete Solutions',
      description: 'Now offering complete IT and technology solutions',
      icon: CheckCircle,
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: '25+ Years Experience',
      description: 'Serving the community since 1999',
    },
    {
      icon: Users,
      title: '10,000+ Students Trained',
      description: 'Helping people build successful careers',
    },
    {
      icon: ThumbsUp,
      title: 'Multi-Brand Solutions',
      description: 'Authorized dealer for top brands',
    },
    {
      icon: Shield,
      title: 'Trusted Reputation',
      description: 'Known for quality and reliability',
    },
    {
      icon: TrendingUp,
      title: 'Affordable Pricing',
      description: 'Best prices in the region',
    },
    {
      icon: CheckCircle,
      title: 'Complete IT Solutions',
      description: 'Training, sales, and services under one roof',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
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
            className="text-center max-w-4xl mx-auto space-y-6"
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
                OUR STORY
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              About{' '}
              <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                Datasoft Computers
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
              Serving Ranebennur with computer training, sales, and services since 1999
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sand/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-gold-400 to-bronze-500 rounded-3xl blur-2xl opacity-20"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative glass-morphism rounded-3xl p-2 shadow-2xl border-2 border-white/50">
                <div className="aspect-[4/3] bg-gradient-to-br from-gold-500 via-bronze-500 to-gold-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0"
                      style={{
                        backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.3) 50%, transparent 52%), linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.3) 50%, transparent 52%)',
                        backgroundSize: '20px 20px'
                      }}
                    />
                  </div>

                  <div className="relative z-10 text-white text-center p-8">
                    <GraduationCap size={120} strokeWidth={1.5} className="mx-auto mb-6 drop-shadow-2xl" />
                    <h3 className="text-3xl font-bold mb-2">Excellence in Education</h3>
                    <p className="text-xl opacity-90">Since 1999</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Our <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">Journey</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Datasoft Computers was established in 1999 with the vision of providing quality computer education and reliable technology services in Ranebennur. Over the years, it has become a trusted name for training, hardware sales, and IT solutions.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                We started as a small training institute focused on computer basics. Through dedication to quality education and customer service, we've grown into a comprehensive technology solutions provider, helping thousands of students and businesses achieve their goals.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { number: '25+', label: 'Years' },
                  { number: '10,000+', label: 'Students' },
                  { number: '100%', label: 'Dedication' },
                  { number: '24/7', label: 'Support' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="glass-morphism rounded-2xl p-6 text-center border-2 border-white/40"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative glass-morphism rounded-3xl p-12 lg:p-16 shadow-2xl border-2 border-white/50 overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-gold-300 to-bronze-400 rounded-3xl blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gold-400 to-bronze-500 opacity-10 rounded-bl-full"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <span className="text-6xl mr-4">👨‍💼</span>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      Prakashagouda Patil
                    </h3>
                    <p className="text-xl text-gold-700 font-semibold">
                      Proprietor, Datasoft Computers
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">
                      Bachelor of Commerce, Karnataka University Dharwad
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">
                      PGDCE (Post Graduate Diploma in Communicative English), Mysore University
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">
                      Computer training at NTTF Dharwad
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">
                      20+ years experience as Spoken English trainer
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">
                      Trained more than 10,000 students in various computer and language courses
                    </p>
                  </div>
                </div>

                <div className="glass-morphism-dark rounded-2xl p-6 border-2 border-gold-300/30">
                  <p className="text-lg text-gray-700 italic leading-relaxed">
                    "My mission has always been to empower individuals with the skills and knowledge they need to succeed in today's digital world. Every student's success is our achievement."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
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
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-gold-100 to-bronze-100 rounded-full text-gold-700 font-semibold text-sm tracking-wide">
                OUR JOURNEY
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Milestones &amp; <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">Timeline</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-400 via-bronze-500 to-gold-600 transform -translate-x-1/2 hidden lg:block"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative mb-16 lg:mb-24 ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:text-right'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`lg:absolute ${index % 2 === 0 ? 'lg:right-0 lg:pr-16' : 'lg:left-0 lg:pl-16'} lg:top-0 lg:w-1/2`}>
                    <motion.div
                      className="glass-morphism rounded-2xl p-8 shadow-xl border-2 border-white/40 group hover:border-gold-300/60 transition-all"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className={`flex items-center space-x-4 mb-4 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse lg:space-x-reverse'}`}>
                        <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-bronze-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <item.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                        </div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                          {item.year}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>

                  <div className="hidden lg:block absolute left-1/2 top-8 w-6 h-6 bg-gradient-to-br from-gold-500 to-bronze-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To provide high-quality training and reliable technology solutions to individuals and businesses, empowering them with skills and tools needed for success in the digital age.',
                gradient: 'from-gold-500 to-bronze-600',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                description: 'To be the most trusted and preferred computer training and technology service provider in the region, known for excellence, innovation, and customer satisfaction.',
                gradient: 'from-bronze-500 to-gold-600',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-gold-400 to-bronze-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl"
                  whileHover={{ scale: 1.1 }}
                />

                <div className="relative glass-morphism rounded-3xl p-10 shadow-xl border-2 border-white/40 h-full">
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl shadow-lg mb-6`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </motion.div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              What Makes Us <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">Different</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-bronze-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg"
                  whileHover={{ scale: 1.05 }}
                />

                <div className="relative glass-morphism rounded-2xl p-8 shadow-xl border-2 border-white/40 group hover:border-gold-300/60 transition-all h-full">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-500 to-bronze-600 rounded-xl shadow-lg mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
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
              <Users className="w-12 h-12 text-white" strokeWidth={2} />
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Training <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">Impact</span>
            </h2>

            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
              We have successfully trained thousands of students who have improved their skills, careers, and confidence through our comprehensive programs. Our alumni work in diverse fields and credit their success to the strong foundation they built here.
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
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gold-500/10 via-bronze-500/10 to-gold-600/10"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8 glass-morphism rounded-3xl p-12 lg:p-16 shadow-2xl border-2 border-white/50"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Start your learning journey or get the best technology solutions today
            </h2>

            <p className="text-xl text-gray-600">
              Join thousands of successful students and satisfied customers
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <motion.a
                href="/courses"
                className="group relative flex items-center justify-center space-x-2 px-10 py-5 rounded-xl font-semibold text-white overflow-hidden text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500 via-gold-600 to-bronze-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-bronze-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">Enroll Now</span>
              </motion.a>

              <motion.a
                href="/contact"
                className="group flex items-center justify-center space-x-2 px-10 py-5 glass-morphism-dark rounded-xl font-semibold text-gray-700 hover:text-gold-700 border-2 border-gold-300/50 hover:border-gold-400 transition-all shadow-lg text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Contact Us</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      <FloatingActions />
    </div>
  );
}
