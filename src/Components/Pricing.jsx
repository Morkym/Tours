import { useRef } from "react";

const pricingPlans = [
  {
    title: "Budget",
    price: "$199",
    features: ["Basic accommodations", "2 destinations", "Group transport"],
    backgroundImage: "/packbg/sky.png", // Update with your actual image path
  },
  {
    title: "Standard",
    price: "$399",
    features: ["Mid-range hotels", "4 destinations", "Private guide"],
    highlighted: true,
    backgroundImage: "/packbg/cheetah.jpg",
  },
  {
    title: "Premium",
    price: "$699",
    features: ["Luxury lodges", "All-inclusive", "VIP support"],
    backgroundImage: "/packbg/watamu.jpg",
  },
];

export function Pricing() {
  const cardsRef = useRef([]);

  return (
    <section className="py-20 px-6 bg-[#C5E188] bg-fixed" id="pricing">
      <h2 className="text-4xl font-bold text-center mb-12">Our Packages</h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
        {pricingPlans.map((plan, i) => (
          <div
            key={plan.title}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`flex-1 rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-120 bg-cover bg-center  relative ${
              plan.highlighted ? "border-green-500" : "border-transparent"
            }`}
            style={{ backgroundImage: `url(${plan.backgroundImage})` }}
          >
            <div className="bg-black/60 text-white p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-3xl font-semibold text-green-300 mb-4">
                  {plan.price}
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <button className="mt-auto bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
