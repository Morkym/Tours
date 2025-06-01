import { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "/gallery/img1.jpg", title: "Savannah Sunset" },
  { src: "/gallery/img2.jpg", title: "Coastal Escape" },
  { src: "/gallery/img3.jpg", title: "Mountain Trek" },
  { src: "/gallery/img4.jpg", title: "City Lights" },
  { src: "/gallery/img5.jpg", title: "Wildlife Safari" },
  { src: "/gallery/img6.jpg", title: "Lake Serenity" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".gallery-card", {
      opacity: 0,
      scale: 0.9,
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".gallery-grid",
        start: "top 80%",
      },
    });
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-12 px-6" style={{ backgroundColor: "#C5E188" }}>
      <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>

      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-md hover:bg-opacity-100 z-10"
      >
        ◀
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-md hover:bg-opacity-100 z-10"
      >
        ▶
      </button>

      <div
        ref={containerRef}
        className="gallery-grid flex gap-6 px-10"
        style={{ overflowX: "hidden" }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-card min-w-[250px] flex-shrink-0 relative cursor-pointer rounded-2xl overflow-hidden shadow-lg"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-lg p-2">
              {img.title}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] overflow-hidden rounded-xl">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto object-contain"
            />
            <p className="text-white text-center mt-4">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
