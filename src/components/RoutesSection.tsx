import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const routes = [
  { from: "Chennai", to: "Pondicherry", distance: "150 km", duration: "2.5 hrs", price: "₹2,500" },
  { from: "Pondicherry", to: "Chennai", distance: "150 km", duration: "2.5 hrs", price: "₹2,500" },
  { from: "Chennai Airport", to: "Pondicherry", distance: "160 km", duration: "3 hrs", price: "₹3,000" },
  { from: "Chennai", to: "Mahabalipuram", distance: "60 km", duration: "1.5 hrs", price: "₹1,500" },
  { from: "Pondicherry", to: "Tirupati", distance: "280 km", duration: "5 hrs", price: "₹4,500" },
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
                <p className="text-primary font-extrabold text-xl">{route.price}</p>
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
