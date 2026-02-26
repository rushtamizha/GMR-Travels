import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    review:
      "Excellent service! The driver was very professional and the car was spotlessly clean.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    review:
      "Booked for airport transfer. On-time pickup and very fair pricing.",
    rating: 5,
  },
  {
    name: "Anitha Devi",
    review:
      "Used their Pondicherry sightseeing package. Great experience overall.",
    rating: 5,
  },
  {
    name: "Mohammed Arif",
    review:
      "Reliable cab service between Chennai and Pondicherry. Always on time.",
    rating: 4,
  },
];

// Duplicate array for smooth infinite scroll
const infiniteReviews = [...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          What Our Riders Say
        </h2>
      </div>

      <div className="relative p-4 w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
        >
          {infiniteReviews.map((r, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[350px] bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${
                      j < r.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                "{r.review}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">
                    {r.name[0]}
                  </span>
                </div>
                <p className="font-semibold text-gray-800 text-sm">
                  {r.name}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
