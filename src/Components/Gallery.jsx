import { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  { src: "/gallery/savannah.jpg", title: "From The Savannah Sunset" },
  { src: "/gallery/beach.jpg", title: "Relaxing Coastal Escapes" },
  { src: "/gallery/mountain.jpg", title: "Mountain Treks" },
  { src: "/gallery/city.jpg", title: "City Lights" },
  { src: "/gallery/safari.jpg", title: "Wildlife Safari" },
  { src: "/gallery/giraffe.jpg", title: "Close Up Experiences" },
  { src: "/gallery/food.jpg", title: "Memorable Bites" },
  { src: "/gallery/culture.jpg", title: "Thrilling Culture" },
  { src: "/gallery/Desert.jpg", title: "Desert landscapes" },
  { src: "/gallery/skydiving.jpg", title: "Sky diving" },
  { src: "/gallery/Hippos.jpg", title: "To A Boat Ride with Hippos" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);

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
    <section
      className="relative py-10 px-4 sm:px-6 max-w-full"
      style={{ backgroundColor: "#C5E188" }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Gallery</h2>

      {/* Arrows for desktop/tablet only */}
      <button
        onClick={scrollLeft}
        className="hidden sm:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full shadow-md hover:bg-opacity-90 z-40"
        aria-label="Scroll Left"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={scrollRight}
        className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full shadow-md hover:bg-opacity-90 z-40"
        aria-label="Scroll Right"
      >
        <FaArrowRight />
      </button>

      {/* Desktop/Tablet - Horizontal scroll with scrollbar hidden */}
      <div
        ref={containerRef}
        className="hidden sm:flex gap-6 px-4 overflow-x-auto"
        style={{
          scrollSnapType: "x mandatory",
          paddingBottom: 20,
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
      >
        <style>
          {`
            /* Hide scrollbar for Chrome, Safari and Opera */
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        {images.map((img, i) => (
          <div
            key={i}
            className="min-w-[250px] h-64 lg:h-80 flex-shrink-0 relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            style={{ scrollSnapAlign: "center" }}
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-2 rounded-b-2xl">
              {img.title}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile - 2-column grid with title overlay */}
      <div className="grid grid-cols-2 gap-2 sm:hidden">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden shadow-md cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-sm p-2">
              {img.title}
            </div>
          </div>
        ))}
      </div>

      {/* Overlay Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-30"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] overflow-hidden rounded-xl z-40">
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
