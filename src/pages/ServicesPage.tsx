import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Phone, Mail, MapPin, MessageCircle, CheckCircle, Clock, Award, Users, TrendingUp, Shield, Home, Building, Store, GraduationCap, Briefcase, ArrowRight, Zap, Headphones as HeadphonesIcon, Star, Quote } from 'lucide-react';
import FloatingActions from '../components/FloatingActions';

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Services%20page%20/Laptop%20Repair.png',
      title: 'Laptop Repair',
      description: 'Fix hardware and software issues quickly and efficiently. Screen replacement, keyboard repair, battery replacement, and more.',
      color: 'from-gold-500 to-gold-600',
      features: ['Screen Replacement', 'Battery Issues', 'Software Problems', 'Data Recovery'],
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Services%20page%20/Desktop%20Repair.png',
      title: 'Desktop Repair',
      description: 'Complete troubleshooting and repair services for desktop computers. Hardware upgrades and system optimization.',
      color: 'from-bronze-500 to-bronze-600',
      features: ['Hardware Repair', 'System Upgrade', 'Virus Removal', 'Performance Boost'],
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Services%20page%20/Printer%20Service%20Installation.png',
      title: 'Printer Service',
      description: 'Installation, repair, and maintenance for all printer types. Quick resolution of printing issues.',
      color: 'from-gold-600 to-bronze-500',
      features: ['Installation', 'Repair & Maintenance', 'Cartridge Issues', 'Network Setup'],
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Services%20page%20/CCTV%20Installation.png',
      title: 'CCTV Installation',
      description: 'Security solutions for homes and businesses. Complete installation with remote monitoring setup.',
      color: 'from-bronze-600 to-gold-500',
      features: ['Camera Installation', 'DVR Setup', 'Remote Access', 'Maintenance'],
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Services%20page%20/Server%20Setup.png',
      title: 'Server Setup',
      description: 'Business IT infrastructure and server configuration. Network setup and cloud solutions.',
      color: 'from-gold-500 to-bronze-600',
      features: ['Server Installation', 'Network Config', 'Data Backup', 'Security Setup'],
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Services%20page%20/Annual%20Maintenance.png',
      title: 'Annual Maintenance',
      description: 'Regular maintenance for long-term performance. Preventive care to avoid costly repairs.',
      color: 'from-bronze-500 to-gold-600',
      features: ['Regular Checkups', 'Software Updates', 'Hardware Cleaning', 'Performance Tuning'],
    },
  ];

  const processSteps = [
    {
      icon: Phone,
      title: 'Contact Us',
      description: 'Call or message us with your issue',
    },
    {
      icon: MessageCircle,
      title: 'Describe Issue',
      description: 'Tell us what needs to be fixed',
    },
    {
      icon: Zap,
      title: 'Inspection / Visit',
      description: 'We diagnose the problem',
    },
    {
      icon: Wrench,
      title: 'Repair / Installation',
      description: 'Expert service delivery',
    },
    {
      icon: CheckCircle,
      title: 'Delivery / Completion',
      description: 'Your device ready to use',
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: '25+ Years Experience',
      description: 'Serving Ranebennur since 1999',
    },
    {
      icon: Users,
      title: 'Skilled Technicians',
      description: 'Certified and experienced professionals',
    },
    {
      icon: Clock,
      title: 'Quick Turnaround Time',
      description: 'Fast and efficient service delivery',
    },
    {
      icon: TrendingUp,
      title: 'Affordable Pricing',
      description: 'Competitive rates with transparency',
    },
    {
      icon: Shield,
      title: 'Trusted Local Service',
      description: 'Your neighborhood IT partner',
    },
    {
      icon: HeadphonesIcon,
      title: 'On-Site Support Available',
      description: 'We come to your location',
    },
  ];

  const industries = [
    { icon: Home, title: 'Home Users', description: 'Personal computer support' },
    { icon: Building, title: 'Offices', description: 'Corporate IT solutions' },
    { icon: Store, title: 'Shops', description: 'Retail business support' },
    { icon: GraduationCap, title: 'Schools', description: 'Educational institutions' },
    { icon: Briefcase, title: 'Small Businesses', description: 'SME IT services' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      content: 'Excellent service! They fixed my laptop within 24 hours. Very professional and affordable.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Teacher',
      content: 'Best computer service in Ranebennur. The technicians are knowledgeable and honest.',
      rating: 5,
    },
    {
      name: 'Amit Patil',
      role: 'Shop Owner',
      content: 'They installed CCTV at my shop. Very satisfied with the quality and support.',
      rating: 5,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you! We will contact you shortly to discuss your service needs.');
      setFormData({ name: '', phone: '', service: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  width: '100%',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(205,127,50,0.3), transparent)',
                  top: `${i * 7}%`,
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}
          </div>

          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
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
              transition={{ type: 'spring', delay: 0.2 }}
            >
              <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-gold-100 to-bronze-100 rounded-full text-gold-700 font-semibold text-sm tracking-wide">
                PROFESSIONAL IT SERVICES
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Computer Repair and{' '}
              <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                IT Services
              </span>{' '}
              in Ranebennur
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
              Fast, reliable, and affordable repair and installation services for homes and businesses
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                href="#contact-form"
                className="group relative flex items-center justify-center space-x-2 px-10 py-5 rounded-xl font-semibold text-white overflow-hidden text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500 via-gold-600 to-bronze-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-bronze-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Wrench size={20} className="relative z-10" />
                <span className="relative z-10">Request Service</span>
              </motion.a>

              <motion.a
                href="tel:+919876543210"
                className="group flex items-center justify-center space-x-2 px-10 py-5 glass-morphism-dark rounded-xl font-semibold text-gray-700 hover:text-gold-700 border-2 border-gold-300/50 hover:border-gold-400 transition-all shadow-lg text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={20} />
                <span>Call Now</span>
              </motion.a>
            </div>
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
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-gold-100 to-bronze-100 rounded-full text-gold-700 font-semibold text-sm tracking-wide">
                OUR SERVICES
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              What We{' '}
              <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive IT solutions for all your technology needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
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
                      src={service.image}
                      alt={service.title}
                      style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Content below */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gold-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-4">{service.description}</p>

                    <ul className="space-y-1.5 mb-5 flex-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-gold-600 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-gold-500 to-bronze-600 text-white rounded-xl font-semibold shadow-md group-hover:shadow-lg transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setFormData({ ...formData, service: service.title });
                        window.location.href = '#contact-form';
                      }}
                    >
                      <span>Request Service</span>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our Service{' '}
              <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple and transparent process from start to finish
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="glass-morphism rounded-2xl p-6 text-center border-2 border-white/40 hover:border-gold-300/60 transition-all group">
                    <motion.div
                      className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gold-500 to-bronze-600 rounded-xl shadow-lg mb-4 relative"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                    </motion.div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  {index < processSteps.length - 1 && (
                    <motion.div
                      className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-gold-400 to-bronze-500 z-10"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
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
              Why Choose{' '}
              <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                Us
              </span>
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

                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
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
            className="max-w-5xl mx-auto glass-morphism rounded-3xl p-12 lg:p-16 shadow-2xl border-2 border-white/50"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center space-y-6 mb-8">
              <motion.div
                className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-gold-500 to-bronze-600 text-white rounded-full font-semibold text-sm"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin size={16} />
                <span>ON-SITE SERVICE</span>
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                On-Site Service{' '}
                <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                  Available
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We provide on-site repair and installation services for businesses and homes in and around Ranebennur. No need to bring your equipment to us.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="glass-morphism rounded-2xl p-6 text-center border border-white/40">
                <Home className="w-10 h-10 text-gold-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Home Service</h3>
                <p className="text-sm text-gray-600">We come to your home</p>
              </div>

              <div className="glass-morphism rounded-2xl p-6 text-center border border-white/40">
                <Building className="w-10 h-10 text-gold-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Office Service</h3>
                <p className="text-sm text-gray-600">On-site business support</p>
              </div>

              <div className="glass-morphism rounded-2xl p-6 text-center border border-white/40">
                <Clock className="w-10 h-10 text-gold-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-sm text-gray-600">Same-day service available</p>
              </div>
            </div>

            <div className="text-center">
              <motion.a
                href="#contact-form"
                className="inline-flex items-center justify-center space-x-2 px-10 py-5 bg-gradient-to-r from-gold-500 to-bronze-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Book Service Now</span>
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </motion.div>
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
              Industries We{' '}
              <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                Serve
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="glass-morphism rounded-2xl p-8 text-center border-2 border-white/40 hover:border-gold-300/60 transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gold-500 to-bronze-600 rounded-xl shadow-lg mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <industry.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </motion.div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              What Our{' '}
              <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="glass-morphism rounded-3xl p-8 border-2 border-white/40 relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Quote className="w-10 h-10 text-gold-400/40 mb-4" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-gold-500 fill-gold-500"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255,193,7,0.9) 0%, rgba(205,127,50,0.9) 100%)',
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Need Fast and Reliable Computer Service?
            </motion.h2>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center space-x-2 px-10 py-5 bg-white text-gold-700 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={20} />
                <span>Call Now</span>
              </motion.a>

              <motion.a
                href="https://wa.me/919876543210?text=I need computer service"
                className="inline-flex items-center justify-center space-x-2 px-10 py-5 bg-green-500 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle size={20} />
                <span>WhatsApp Now</span>
              </motion.a>
            </motion.div>
          </div>
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
                Request{' '}
                <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                  Service
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Fill the form and we'll contact you shortly
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

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-5 py-4 bg-white/80 border-2 border-gold-300/50 rounded-xl focus:border-gold-500 focus:outline-none transition-all text-gray-900 font-medium"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-5 py-4 bg-white/80 border-2 border-gold-300/50 rounded-xl focus:border-gold-500 focus:outline-none transition-all text-gray-900 font-medium resize-none"
                    placeholder="Describe your issue or requirements"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-8 py-5 bg-gradient-to-r from-gold-500 via-gold-600 to-bronze-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all text-lg disabled:opacity-50"
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
                  {!isSubmitting && <ArrowRight size={20} />}
                </motion.button>
              </form>

              <div className="pt-8 border-t border-gold-200/30 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  Or Contact Us Directly
                </h3>

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
