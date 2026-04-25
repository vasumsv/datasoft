import { motion } from 'framer-motion';
import {
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Navigation,
  Laptop,
  Wrench,
  Camera,
  GraduationCap,
  Store,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import FloatingActions from '../components/FloatingActions';

export default function ContactPage() {
  const faqs = [
    {
      question: 'Do you provide laptop repair services?',
      answer: 'Yes, we provide comprehensive repair services for laptops and desktops including hardware repairs, software troubleshooting, and upgrades.',
    },
    {
      question: 'Do you sell refurbished laptops?',
      answer: 'Yes, we offer tested and reliable refurbished laptop systems with warranty. All refurbished systems are thoroughly checked for quality.',
    },
    {
      question: 'What training courses do you offer?',
      answer: 'We offer DCA, ADCA, Tally, and various short-term computer courses suitable for students and professionals.',
    },
    {
      question: 'Do you provide on-site service?',
      answer: 'Yes, we provide on-site repair and installation services for CCTV, servers, and other IT solutions in Ranebennur and nearby areas.',
    },
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.requirement) {
      newErrors.requirement = 'Please select a requirement';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', requirement: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Adishakti Temple, Veeragangadhar Complex, Medleri Road, Ranebennur, Karnataka',
      action: 'Get Directions',
      link: 'https://maps.google.com/?q=Adishakti+Temple+Veeragangadhar+Complex+Medleri+Road+Ranebennur',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '9449900333',
      action: 'Call Now',
      link: 'tel:+919449900333',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Open Daily\nCloses at 8:30 PM',
      action: null,
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  width: '2px',
                  height: '2px',
                  background: 'radial-gradient(circle, rgba(205,127,50,0.6), transparent)',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  boxShadow: '0 0 10px rgba(205,127,50,0.4)',
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute"
              style={{
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(205,127,50,0.2), transparent)',
                top: `${20 + i * 15}%`,
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: 'linear',
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
                GET IN TOUCH
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Contact{' '}
              <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                Datasoft Computers
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
              Get in touch for training, laptop purchase, or repair services
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                href="tel:+919449900333"
                className="group relative flex items-center justify-center space-x-2 px-10 py-5 rounded-xl font-semibold text-white overflow-hidden text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500 via-gold-600 to-bronze-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-bronze-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Phone size={20} className="relative z-10" />
                <span className="relative z-10">Call Now</span>
              </motion.a>

              <motion.a
                href="https://wa.me/919449900333?text=Hi, I would like to know more about your services"
                className="group flex items-center justify-center space-x-2 px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle size={20} />
                <span>WhatsApp Now</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sand/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="glass-morphism rounded-3xl p-8 border-2 border-white/40 hover:border-gold-300/60 transition-all group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-500 to-bronze-600 rounded-2xl shadow-lg mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
                  {info.content}
                </p>

                {info.action && info.link && (
                  <motion.a
                    href={info.link}
                    target={info.icon === MapPin ? '_blank' : undefined}
                    rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center space-x-2 text-gold-600 font-semibold hover:text-gold-700 transition-colors group-hover:translate-x-1 transition-transform"
                    whileHover={{ x: 5 }}
                  >
                    <span>{info.action}</span>
                    <ArrowRight size={18} />
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto glass-morphism rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.5!2d75.6292!3d14.6186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM3JzA3LjAiTiA3NcKwMzcnNDUuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Datasoft Computers Location"
              ></iframe>
            </div>

            <div className="p-8 bg-gradient-to-r from-gold-50 to-bronze-50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Store</h3>
                  <p className="text-gray-600">Located at Adishakti Temple, Veeragangadhar Complex, Ranebennur</p>
                </div>
                <motion.a
                  href="https://maps.google.com/?q=Adishakti+Temple+Veeragangadhar+Complex+Medleri+Road+Ranebennur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-gold-500 to-bronze-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Navigation size={18} />
                  <span>Get Directions</span>
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(34,197,94,0.9) 0%, rgba(22,163,74,0.9) 100%)',
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-2xl mb-4"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <MessageCircle className="w-10 h-10 text-green-600" strokeWidth={2.5} />
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Get Instant Response on WhatsApp
            </motion.h2>

            <motion.p
              className="text-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Chat with us directly for quick answers to your questions about training, laptop purchases, or repair services
            </motion.p>

            <motion.a
              href="https://wa.me/919449900333?text=Hi, I would like to know more about your services"
              className="inline-flex items-center justify-center space-x-2 px-12 py-6 bg-white text-green-600 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition-all text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={24} />
              <span>Chat on WhatsApp</span>
              <ArrowRight size={20} />
            </motion.a>
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
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="glass-morphism rounded-2xl p-8 border-2 border-white/40 hover:border-gold-300/60 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                  <span className="inline-block w-8 h-8 bg-gradient-to-br from-gold-500 to-bronze-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-11">{faq.answer}</p>
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
              Visit Our Store or Contact Us Today
            </motion.h2>

            <motion.p
              className="text-xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Get the best computer solutions in Ranebennur for training, laptop sales, and repair services
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="tel:+919449900333"
                className="inline-flex items-center justify-center space-x-2 px-10 py-5 bg-white text-gold-700 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={20} />
                <span>Call Now</span>
              </motion.a>

              <motion.a
                href="https://maps.google.com/?q=Adishakti+Temple+Veeragangadhar+Complex+Medleri+Road+Ranebennur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-10 py-5 bg-gray-900 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Store size={20} />
                <span>Visit Store</span>
                <ExternalLink size={18} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <FloatingActions />
    </div>
  );
}
