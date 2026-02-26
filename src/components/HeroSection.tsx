import { motion } from "framer-motion";
import BookingForm from "./BookingForm";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Chennai to Pondicherry scenic road"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
              🚖 Trusted by 10,000+ Riders
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
              Chennai ↔ Pondicherry{" "}
              <span className="block">Cab Service</span>
              <span className="block text-accent mt-2">Starting from ₹2,500</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-lg leading-relaxed mb-8">
              Safe, comfortable, and affordable cab service with professional drivers and door-to-door pickup.
            </p>

            <div className="flex flex-wrap gap-4 text-primary-foreground/70 text-sm">
              {["24/7 Support", "No Hidden Charges", "AC Vehicles", "Professional Drivers"].map(
                (tag) => (
                  <span key={tag} className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right Form */}
          <div className="flex justify-center lg:justify-end">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
