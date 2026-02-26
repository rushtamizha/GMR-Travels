import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Priya Sharma", review: "Excellent service!", rating: 5 },
  { name: "Rajesh Kumar", review: "Very comfortable ride.", rating: 5 },
  { name: "Anitha Devi", review: "Great value for money.", rating: 5 },
  { name: "Mohammed Arif", review: "Reliable service.", rating: 4 },
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  const infinite = [...reviews, ...reviews];

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">What Our Riders Say</h2>
      </div>

      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-6 w-max"
          animate={{ x: [-width, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            },
          }}
        >
          {infinite.map((r, i) => (
            <div
              key={i}
              className="min-w-[300px] bg-white rounded-2xl shadow-lg p-6"
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

              <p className="text-gray-600 text-sm mb-4">
                "{r.review}"
              </p>

              <p className="font-semibold text-gray-800 text-sm">
                {r.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
