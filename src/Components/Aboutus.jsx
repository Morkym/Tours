import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import abtus from '../assets/Aboutus/abtus.jpg';
gsap.registerPlugin(ScrollTrigger);

export function AboutUsSection() {
  const sectionRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Disable animations on mobile devices (width < 640px)
    if (window.innerWidth < 640) return;

    gsap.fromTo(
      paragraphRef.current,
      {
        y: 50,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#C5E188] bg-fixed py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
      id="about"
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <img
          src={abtus}
          alt="About Tutembee Safaris"
          className="rounded-xl shadow-xl w-full max-w-md mx-auto md:mx-0"
        />
      </div>

      {/* Right Side */}
      <div
        ref={paragraphRef}
        className="w-full md:w-1/2 bg-white/90 p-6 md:p-10 rounded-xl shadow-2xl backdrop-blur-sm transform hover:scale-105 transition duration-500"
      >
        <p className="text-lg leading-relaxed text-gray-800">
          Tutembee Safaris is your trusted guide to the beauty of Kenya. We help
          travelers discover top destinations, recommend comfortable and unique
          places to stay, and provide transparent, competitive pricing to ensure
          a memorable and affordable journey.
        </p>
      </div>
    </section>
  );
}

export default AboutUsSection;
