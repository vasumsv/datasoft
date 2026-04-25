import { useState } from 'react';
import { motion } from 'framer-motion';
import FloatingActions from '../components/FloatingActions';
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Shield,
  Users,
  Store,
  Tag,
  ArrowRight,
  Sparkles,
  TrendingDown,
  Wrench,
} from 'lucide-react';

export default function ProductsPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', product: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Products/Laptops.png',
      title: 'Laptops',
      description: 'New & Refurbished',
      color: 'from-gold-500 to-gold-600',
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Products/Desktops.png',
      title: 'Desktops',
      description: 'Complete Systems',
      color: 'from-bronze-500 to-bronze-600',
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Products/Printers.png',
      title: 'Printers',
      description: 'All Types',
      color: 'from-gold-600 to-bronze-500',
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Products/CCTV.png',
      title: 'CCTV Systems',
      description: 'Security Solutions',
      color: 'from-bronze-600 to-gold-500',
    },
    {
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/Our%20Products/Accessories.png',
      title: 'Accessories',
      description: 'Parts & Peripherals',
      color: 'from-gold-500 to-bronze-600',
    },
  ];

  const featuredProducts = [
    {
      name: 'HP Laptop',
      specs: 'Intel i5 | 8GB RAM | 256GB SSD',
      condition: 'New',
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/products/HP%20Laptop%20Intel%20i5%20%7C%208GB%20RAM%20%7C%20256GB%20SSD.png',
      price: 'Contact for price',
      badge: 'Latest Model',
    },
    {
      name: 'Dell Desktop',
      specs: 'Intel i7 | 16GB RAM | 512GB SSD',
      condition: 'New',
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/products/Dell%20Desktop%20Intel%20i7%20%7C%2016GB%20RAM%20%7C%20512GB%20SSD.png',
      price: 'Contact for price',
      badge: 'Best Seller',
    },
    {
      name: 'Lenovo ThinkPad',
      specs: 'Intel i5 | 8GB RAM | 256GB SSD',
      condition: 'Refurbished',
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/products/Lenovo%20ThinkPad%20Intel%20i5%20%7C%208GB%20RAM%20%7C%20256GB%20SSD%20%20.png',
      price: 'Best Value',
      badge: 'Refurbished',
    },
    {
      name: 'HP LaserJet Printer',
      specs: 'High-Speed | Duplex | Network',
      condition: 'New',
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/products/HP%20LaserJet%20Printer%20High-Speed%20%7C%20Duplex%20%7C%20Network%20%20.png',
      price: 'Contact for price',
      badge: 'Business Grade',
    },
    {
      name: 'CCTV Camera System',
      specs: '4 Cameras | HD | Night Vision',
      condition: 'New',
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/products/CCTV%20Camera%20System%204%20Cameras%20%7C%20HD%20%7C%20Night%20Vision.png',
      price: 'Contact for price',
      badge: 'Complete Kit',
    },
    {
      name: 'Asus Laptop',
      specs: 'Intel i3 | 4GB RAM | 500GB HDD',
      condition: 'Refurbished',
      image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/products/Asus%20Laptop%20Intel%20i3%20%7C%204GB%20RAM%20%7C%20500GB%20HDD%20%20.png',
      price: 'Best Deal',
      badge: 'Budget Friendly',
    },
  ];

  const brands = [
    { name: 'HP', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/products/brands/HP.png' },
    { name: 'Dell', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/products/brands/Dell.png' },
    { name: 'Asus', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/products/brands/ASUS.png' },
    { name: 'Lenovo', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/products/brands/Lenovo.png' },
    { name: 'Acer', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/products/brands/Acer.png' },
    { name: 'Canon', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/products/brands/Canon.png' },
    { name: 'Epson', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/products/brands/Epson.png' },
    { name: 'Brother', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/vg%20computers/products/brands/Brother.png' },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Genuine Products',
      description: 'Only authentic products with proper documentation',
    },
    {
      icon: TrendingDown,
      title: 'Affordable Pricing',
      description: 'Best prices in Ranebennur with transparent costing',
    },
    {
      icon: Shield,
      title: 'Warranty Support',
      description: 'Manufacturer warranty and after-sales service',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Professional advice to choose the right product',
    },
    {
      icon: Store,
      title: 'Local Trusted Store',
      description: 'Serving Ranebennur since 1999 with reliability',
    },
    {
      icon: Wrench,
      title: 'Service & Support',
      description: 'Complete installation and maintenance support',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you! We will contact you with the best price soon.');
      setFormData({ name: '', phone: '', product: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border border-gold-300/20"
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20 + i * 2,
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
                PREMIUM TECHNOLOGY PRODUCTS
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Buy Laptops and{' '}
              <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                Computer Products
              </span>{' '}
              in Ranebennur
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
              New and refurbished laptops, desktops, printers, CCTV systems, and accessories at the best price
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                href="#enquiry-form"
                className="group relative flex items-center justify-center space-x-2 px-10 py-5 rounded-xl font-semibold text-white overflow-hidden text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500 via-gold-600 to-bronze-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-bronze-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Tag size={20} className="relative z-10" />
                <span className="relative z-10">Get Best Price</span>
              </motion.a>

              <motion.a
                href="tel:+919876543210"
                className="group flex items-center justify-center space-x-2 px-10 py-5 glass-morphism-dark rounded-xl font-semibold text-gray-700 hover:text-gold-700 border-2 border-gold-300/50 hover:border-gold-400 transition-all shadow-lg text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={20} />
                <span>Contact Now</span>
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
                PRODUCT CATEGORIES
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Browse by{' '}
              <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                Category
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-bronze-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                />

                <div className="relative glass-morphism rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-white/40">
                  <motion.div
                    className="flex items-center justify-center rounded-2xl mb-4 mx-auto"
                    style={{ width: '96px', height: '96px' }}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={category.image} alt={category.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gold-700 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
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
              transition={{ type: 'spring', delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-gold-100 to-bronze-100 rounded-full text-gold-700 font-semibold text-sm tracking-wide">
                FEATURED PRODUCTS
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Available{' '}
              <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                Products
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Quality products at competitive prices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProducts.map((product, index) => (
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

                <div className="relative h-full glass-morphism rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-white/40">
                  <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />

                    <div className="absolute top-4 right-4">
                      <span
                        className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold ${
                          product.condition === 'New'
                            ? 'bg-green-500 text-white'
                            : 'bg-gold-500 text-white'
                        }`}
                      >
                        {product.condition}
                      </span>
                    </div>

                    {product.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-gold-500 to-bronze-600 text-white rounded-full text-xs font-semibold">
                          <Sparkles size={12} />
                          <span>{product.badge}</span>
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gold-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{product.specs}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                      <span className="text-lg font-bold text-gold-700">{product.price}</span>
                    </div>

                    <motion.button
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-gold-500 to-bronze-600 text-white rounded-xl font-semibold shadow-md group-hover:shadow-lg transition-all relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setFormData({ ...formData, product: product.name });
                        window.location.href = '#enquiry-form';
                      }}
                    >
                      <span className="relative z-10">Enquire Now</span>
                      <ArrowRight
                        size={18}
                        className="relative z-10 group-hover:translate-x-1 transition-transform"
                      />
                    </motion.button>
                  </div>
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
                <Tag size={16} />
                <span>BEST VALUE</span>
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Affordable{' '}
                <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                  Refurbished Laptops
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                High-quality refurbished laptops tested for performance and reliability at the best price. Perfect for students, professionals, and businesses looking for cost-effective solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="glass-morphism rounded-2xl p-6 text-center border border-white/40">
                <CheckCircle className="w-10 h-10 text-gold-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Quality Tested</h3>
                <p className="text-sm text-gray-600">Every device thoroughly checked</p>
              </div>

              <div className="glass-morphism rounded-2xl p-6 text-center border border-white/40">
                <Shield className="w-10 h-10 text-gold-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Warranty Included</h3>
                <p className="text-sm text-gray-600">Peace of mind with coverage</p>
              </div>

              <div className="glass-morphism rounded-2xl p-6 text-center border border-white/40">
                <TrendingDown className="w-10 h-10 text-gold-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Best Prices</h3>
                <p className="text-sm text-gray-600">Up to 50% savings</p>
              </div>
            </div>

            <div className="text-center">
              <motion.a
                href="#enquiry-form"
                className="inline-flex items-center justify-center space-x-2 px-10 py-5 bg-gradient-to-r from-gold-500 to-bronze-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all text-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get Best Deal</span>
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
              Trusted{' '}
              <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                Brands
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="glass-morphism rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all border-2 border-white/40 grayscale hover:grayscale-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="flex items-center justify-center h-12">
                  <img src={brand.image} alt={brand.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
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
              Why Buy{' '}
              <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                From Us
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

      <section id="enquiry-form" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Get{' '}
                <span className="bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">
                  Best Price
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Fill the form and we'll contact you with the best deals
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
                    Product Interest (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-5 py-4 bg-white/80 border-2 border-gold-300/50 rounded-xl focus:border-gold-500 focus:outline-none transition-all text-gray-900 font-medium"
                    placeholder="e.g., Laptop, Printer, CCTV"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-8 py-5 bg-gradient-to-r from-gold-500 via-gold-600 to-bronze-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all text-lg disabled:opacity-50"
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Get Best Price'}</span>
                  {!isSubmitting && <ArrowRight size={20} />}
                </motion.button>
              </form>

              <div className="pt-8 border-t border-gold-200/30 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  Contact Information
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
