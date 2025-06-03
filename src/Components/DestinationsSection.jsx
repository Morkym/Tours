import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  {
    id: 1,
    title: "Masai Mara",
    image: "/destinations/mara.jpg",
    description:
      "Masai Mara offers an unforgettable safari experience. Witness the Great Migration and spot the Big Five in their natural habitat. It's the ultimate destination for nature and wildlife lovers.",
  },
  {
    id: 2,
    title: "Diani Beach",
    image: "/destinations/diani.jpg",
    description:
      "Diani Beach is a paradise of soft white sands and crystal-clear waters. Ideal for both relaxation and adventure, you can snorkel, kite-surf, or simply enjoy the serene coastal breeze. It's the perfect tropical escape.",
  },
  {
    id: 3,
    title: "Mount Kenya",
    image: "/destinations/mt-kenya.jpg",
    description:
      "Mount Kenya is Africa’s second-highest peak, offering breathtaking views and thrilling hikes. Explore its glaciers, alpine meadows, and rich biodiversity. It's a top destination for trekkers and nature enthusiasts.",
  },
  {
    id: 4,
    title: "Lamu",
    image: "/destinations/lamu.jpg",
    description:
      "Lamu is a UNESCO World Heritage site rich in Swahili culture and charm. Walk through narrow streets filled with centuries-old architecture and dhow boats. It's a peaceful and culturally immersive experience.",
  },
  {
    id: 5,
    title: "Fort Jesus",
    image: "/destinations/fort-jesus.jpg",
    description:
      "Fort Jesus in Mombasa stands as a symbol of Kenya's colonial and Swahili history. The fort’s architecture tells stories of Portuguese, Arab, and British rule. Explore museums and coastal heritage at this iconic landmark.",
  },
];

export function DestinationsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".destination-card");

    if (window.innerWidth <= 640) {
      // Mobile animation - smooth slide from right + fade in
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.15,
          }
        );
      });
    } else {
      // Desktop animation - scale + fade
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.95, opacity: 0.8 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              scrub: true,
            },
          }
        );
      });
    }
  }, []);

  return (
    <section className="py-20 px-6 bg-[#C5E188]" id="destinations">
      <h2 className="text-4xl font-bold text-center mb-12">Top Destinations</h2>

      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="destination-card rounded-xl shadow-lg bg-cover bg-center h-96 relative overflow-hidden"
            style={{ backgroundImage: `url(${dest.image})` }}
          >
            {/* Title Overlay */}
            <div className="absolute top-0 left-0 w-full p-4 bg-black/40 text-white z-10">
              <h3 className="text-2xl font-bold drop-shadow-md">{dest.title}</h3>
            </div>

            {/* 3D-like Description */}
            <div className="absolute bottom-0 left-0 w-full p-4 z-20">
              <p className="text-white text-sm leading-relaxed backdrop-blur-sm bg-black/50 rounded-md p-3 shadow-xl drop-shadow-lg border border-white/10">
                {dest.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
