import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Users, Car, Search, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const pickupLocations = [
  "Chennai", "Pondicherry", "Chennai Airport", "Chennai Railway Station",
  "Mahabalipuram", "ECR", "OMR",
];

const vehicleTypes = [
  { label: "Sedan", icon: "🚗" },
  { label: "SUV", icon: "🚙" },
  { label: "Tempo Traveller", icon: "🚐" },
];

const BookingForm = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicle, setVehicle] = useState("Sedan");
  const [loading, setLoading] = useState(false);

  const handleCheckFare = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="w-full max-w-2xl bg-card rounded-3xl card-shadow p-6 md:p-8"
    >
      <h3 className="text-lg font-bold text-foreground mb-5">Book Your Ride</h3>

      <div className="grid gap-4">
        {/* Pickup */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
          <select
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-secondary rounded-2xl text-foreground text-sm font-medium border-0 focus:ring-2 focus:ring-primary outline-none appearance-none cursor-pointer"
          >
            <option value="">Pickup Location</option>
            {pickupLocations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Drop */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
          <select
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-secondary rounded-2xl text-foreground text-sm font-medium border-0 focus:ring-2 focus:ring-primary outline-none appearance-none cursor-pointer"
          >
            <option value="">Drop Location</option>
            {pickupLocations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="date"
              className="w-full pl-11 pr-4 py-3.5 bg-secondary rounded-2xl text-foreground text-sm font-medium border-0 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="time"
              className="w-full pl-11 pr-4 py-3.5 bg-secondary rounded-2xl text-foreground text-sm font-medium border-0 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
        </div>

        {/* Passengers */}
        <div className="relative">
          <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <select
            className="w-full pl-11 pr-4 py-3.5 bg-secondary rounded-2xl text-foreground text-sm font-medium border-0 focus:ring-2 focus:ring-primary outline-none appearance-none cursor-pointer"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>{n} Passenger{n > 1 ? "s" : ""}</option>
            ))}
          </select>
        </div>

        {/* Vehicle Type */}
        <div className="flex gap-2">
          {vehicleTypes.map((v) => (
            <button
              key={v.label}
              onClick={() => setVehicle(v.label)}
              className={`flex-1 py-3 rounded-2xl text-sm font-semibold transition-all ${
                vehicle === v.label
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-foreground hover:bg-muted"
              }`}
            >
              <span className="mr-1">{v.icon}</span> {v.label}
            </button>
          ))}
        </div>

        {/* CTAs */}
        <div className="grid grid-cols-2 gap-3 mt-2">
          <Button
            onClick={handleCheckFare}
            disabled={loading}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl py-6 text-base font-bold"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                Checking...
              </span>
            ) : (
              <>
                <Search className="w-4 h-4 mr-2" />
                Check Fare
              </>
            )}
          </Button>
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl py-6 text-base font-bold"
          >
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingForm;
