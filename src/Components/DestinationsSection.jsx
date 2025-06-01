import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const destinations = [
  {
    id: 1,
    title: "Masai Mara",
    price: "$450",
    image: "/masai-mara.jpg",
  },
  {
    id: 2,
    title: "Diani Beach",
    price: "$300",
    image: "/diani.jpg",
  },
  {
    id: 3,
    title: "Mount Kenya",
    price: "$380",
    image: "/mount-kenya.jpg",
  },
];

export function DestinationsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".destination-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          scale: 0.9,
          opacity: 0.7,
        },
        {
          scrollTrigger: {
            trigger: card,
            start: "left center",
            horizontal: true,
            scrub: true,
          },
          scale: 1.1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );
    });
  }, []);

  return (
    <section className="py-20 px-6 bg-[#C5E188] bg-fixed " id="destinations">
      <h2 className="text-4xl font-bold text-center mb-12">Top Destinations</h2>
      <div
        ref={containerRef}
        className="flex overflow-x-scroll space-x-6 snap-x snap-mandatory px-4"
      >
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="destination-card snap-center flex-shrink-0 w-72 h-96 rounded-xl bg-cover bg-center shadow-lg relative transform transition-transform duration-500"
            style={{ backgroundImage: `url(${dest.image})` }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-xl">
              <h3 className="text-xl font-semibold">{dest.title}</h3>
              <p className="text-lg">{dest.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
