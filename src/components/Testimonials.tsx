import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    review: "Excellent service! The driver was very professional and the car was spotlessly clean. Will definitely book again for my Chennai trips.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    review: "Booked for airport transfer. On-time pickup, comfortable ride, and very fair pricing. Highly recommended!",
    rating: 5,
  },
  {
    name: "Anitha Devi",
    review: "Used their Pondicherry sightseeing package. The driver doubled as a guide and made our trip memorable. Great value for money.",
    rating: 5,
  },
  {
    name: "Mohammed Arif",
    review: "Reliable cab service between Chennai and Pondicherry. I use them regularly for business trips. Always on time and comfortable.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
            What Our Riders Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl card-shadow p-6 border border-border/50"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < r.rating ? "fill-accent text-accent" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{r.review}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{r.name[0]}</span>
                </div>
                <p className="font-semibold text-foreground text-sm">{r.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
