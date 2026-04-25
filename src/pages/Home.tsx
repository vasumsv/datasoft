import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import About from '../components/About';
import Courses from '../components/Courses';
import Products from '../components/Products';
import ServicesList from '../components/ServicesList';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import FloatingActions from '../components/FloatingActions';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Courses />
      <Products />
      <ServicesList />
      <Testimonials />
      <CTA />
      <FloatingActions />
    </>
  );
}
