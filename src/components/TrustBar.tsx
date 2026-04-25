import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Briefcase, TrendingUp } from 'lucide-react';

function Counter({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function TrustBar() {
  const stats = [
    { icon: Award, value: 25, suffix: '+', label: 'Years Experience' },
    { icon: Users, value: 10000, suffix: '+', label: 'Students Trained' },
    { icon: Briefcase, value: 1, suffix: '', label: 'Multi-Brand Dealer' },
    { icon: TrendingUp, value: 3, suffix: '', label: 'Core Services' },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-sand/30 via-white/50 to-gold-100/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="relative inline-flex items-center justify-center w-20 h-20 mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-bronze-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity"></div>
                <div className="relative glass-morphism rounded-2xl w-full h-full flex items-center justify-center shadow-lg">
                  <stat.icon className="w-9 h-9 text-gold-600" strokeWidth={2} />
                </div>
              </motion.div>

              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gold-600 via-bronze-500 to-gold-700 bg-clip-text text-transparent mb-3">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>

              <p className="text-gray-700 font-medium text-sm lg:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
