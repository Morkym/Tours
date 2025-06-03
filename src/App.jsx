import { useRef } from 'react';
import './index.css';
import Hero from './Components/Hero';
import Aboutus from './Components/Aboutus';
import { DestinationsSection } from './Components/DestinationsSection';
import { Pricing } from './Components/Pricing';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionsRef = useRef([]);
  const containerRef = useRef(null);

  useGSAP(() => {
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#C5E188] bg-fixed text-gray-800">
      <Navbar />
      <section ref={el => (sectionsRef.current[0] = el)}><Hero /></section>
      <section ref={el => (sectionsRef.current[1] = el)}><Aboutus /></section>
      <section ref={el => (sectionsRef.current[2] = el)}><Gallery /></section>
      <section ref={el => (sectionsRef.current[3] = el)}><DestinationsSection /></section>
      <section ref={el => (sectionsRef.current[4] = el)}><Pricing /></section>
      <section ref={el => (sectionsRef.current[5] = el)}><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
