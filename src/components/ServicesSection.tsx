import { motion } from "framer-motion";
import { Car, Plane, Map, Users, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Car,
    title: "Pondicherry to Chennai Cab",
    price: "₹2,500",
    features: ["Experienced Drivers", "AC Vehicles", "Door-to-Door Pickup", "24/7 Support", "Flexible Booking"],
  },
  {
    icon: Car,
    title: "Chennai to Pondicherry Cab",
    price: "₹2,500",
    features: ["Airport & Railway Pickup", "Clean Vehicles", "No Hidden Charges", "Online Booking"],
  },
  {
    icon: Map,
    title: "Local Sightseeing Tours",
    price: "₹2,800",
    features: ["French Quarter & Beaches", "Auroville & Paradise Beach", "Local Guide", "Custom Packages"],
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    price: "₹3,000",
    features: ["Chennai Airport ↔ Pondicherry", "Flight Tracking", "No Waiting Charges", "24/7 Service"],
  },
  {
    icon: Map,
    title: "Outstation Trips",
    price: "₹4,500",
    features: ["Mahabalipuram, Tirupati & more", "Multi-Day Packages", "Custom Itinerary", "Comfortable Vehicles"],
  },
  {
    icon: Users,
    title: "Tempo Traveller Rental",
    price: "₹6,000",
    features: ["12–16 Passengers", "Spacious Seating & AC", "Large Luggage Space", "Ideal for Group Travel"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
            Premium Cab Services
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Choose from our wide range of services designed for your comfort and convenience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-3xl card-shadow hover:card-shadow-hover transition-all duration-300 p-6 md:p-7 border border-border/50 hover:border-primary/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{service.title}</h3>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex gap-2">
                <Button asChild className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold">
                  <a href="#home">
                    Book Now <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-xl border-whatsapp text-whatsapp hover:bg-whatsapp/10 px-3">
                  <a href="https://wa.me/917806986128" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
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

export default ServicesSection;
