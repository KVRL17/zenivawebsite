import Header from './components/Header';
import Hero from './components/Hero';
import BenefitsStrip from './components/BenefitsStrip';
import BeforeAfter from './components/BeforeAfter';
import Ingredients from './components/Ingredients';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const header = document.getElementById('main-header');
    const handleScroll = () => {
      if (window.scrollY > 10) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAF7F0]">
      <Header />
      <main>
        <Hero />
        <BenefitsStrip />
        <BeforeAfter />
        <Ingredients />
        <HowItWorks />
        <Reviews />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
