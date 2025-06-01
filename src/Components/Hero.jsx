import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    const hero = heroRef.current;
    const title = titleRef.current;

    const setAnimation = () => {
      const heroHeight = hero.offsetHeight;
      const titleHeight = title.offsetHeight;

      const maxY = Math.max(heroHeight - titleHeight - 40, 50);

      gsap.killTweensOf([hero, title]);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // Background scroll animation
      gsap.to(hero, {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Scroll-triggered title animation (move down + scale down)
      gsap.fromTo(
        title,
        { y: 0, scale: 1.5 },
        {
          y: maxY,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      ScrollTrigger.refresh();
    };

    setAnimation();
    window.addEventListener("resize", setAnimation);
    return () => window.removeEventListener("resize", setAnimation);
  }, { scope: heroRef });

  return (
    <section
      id="home"
      ref={heroRef}
      className="h-screen relative bg-[url('./assets/tour.svg')] bg-cover bg-center md:bg-fixed text-white text-center overflow-hidden"
    >
      <h1
        ref={titleRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-5xl md:text-7xl font-bold drop-shadow-lg"
      >
        Tutembee Safaris
      </h1>
    </section>
  );
}
