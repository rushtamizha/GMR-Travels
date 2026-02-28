import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const routes = [
  { from: "Chennai", to: "Pondicherry", distance: "150 km", duration: "3 hrs", price: "₹2,500" },
  { from: "Pondicherry", to: "Chennai", distance: "150 km", duration: "3 hrs", price: "₹2,500" },

  { from: "Chennai", to: "Bangalore", distance: "350 km", duration: "6–7 hrs", price: "₹6,500" },

  { from: "Chennai", to: "Tirupati", distance: "135 km", duration: "3–4 hrs", price: "₹3,000" },

  { from: "Pondicherry", to: "Tirupati", distance: "300 km", duration: "6 hrs", price: "₹6,000" },

  { from: "Pondicherry", to: "Chidambaram", distance: "65 km", duration: "1.5 hrs", price: "₹2,000" },

  { from: "Pondicherry", to: "Kumbakonam", distance: "135 km", duration: "3 hrs", price: "₹3,500" },

  { from: "Chennai", to: "Trichy", distance: "330 km", duration: "6 hrs", price: "₹6,000" },

  { from: "Chennai", to: "Madurai", distance: "460 km", duration: "8 hrs", price: "₹8,000" },

  { from: "Chennai", to: "Cuddalore", distance: "180 km", duration: "4 hrs", price: "₹3,500" },

  { from: "Chennai", to: "Kerala (Kochi)", distance: "680 km", duration: "11–12 hrs", price: "₹11,000" },

  { from: "Pondicherry", to: "Kerala (Kochi)", distance: "620 km", duration: "10–11 hrs", price: "₹10,000" },
];

const RoutesSection = () => {
  return (
    <section id="routes" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Popular Routes</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
            Most Booked Routes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {routes.map((route, i) => (
            <motion.div
              key={`${route.from}-${route.to}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl card-shadow p-5 border border-border/50 hover:border-primary/20 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    {route.from} → {route.to}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {route.distance}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {route.duration}
                </span>
              </div>

              <div className="flex items-center justify-between">
                
                <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold">
                  <a href="#home">
                    Book <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoutesSection;
