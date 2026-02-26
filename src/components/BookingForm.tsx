import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Users, Search, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ADMIN_NUMBER = "919876543210"; // change to your admin number (with country code)

const pickupLocations = [
  "Chennai", "Pondicherry", "Chennai Airport",
  "Chennai Railway Station", "Mahabalipuram", "ECR", "OMR",
];

const vehicleTypes = [
  { label: "Sedan", icon: "🚗" },
  { label: "SUV", icon: "🚙" },
  { label: "Tempo Traveller", icon: "🚐" },
];

const BookingForm = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [vehicle, setVehicle] = useState("Sedan");
  const [loading, setLoading] = useState(false);

  const generateWhatsAppLink = () => {
    if (!pickup || !drop || !date || !time) {
      alert("Please fill all required fields");
      return;
    }

    const message = `
🚖 *New Cab Booking Request*

📍 Pickup: ${pickup}
📍 Drop: ${drop}

📅 Date: ${date}
⏰ Time: ${time}

👥 Passengers: ${passengers}
🚗 Vehicle: ${vehicle}

Please confirm fare & availability.
    `;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${ADMIN_NUMBER}?text=${encodedMessage}`;

    window.open(url, "_blank");
  };

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
      <h3 className="text-lg font-bold text-foreground mb-5">
        Book Your Ride
      </h3>

      <div className="grid gap-4">

        {/* Pickup */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
          <select
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-secondary rounded-2xl"
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
            className="w-full pl-11 pr-4 py-3.5 bg-secondary rounded-2xl"
          >
            <option value="">Drop Location</option>
            {pickupLocations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="pl-4 pr-4 py-3.5 bg-secondary rounded-2xl"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="pl-4 pr-4 py-3.5 bg-secondary rounded-2xl"
          />
        </div>

        {/* Passengers */}
        <select
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          className="pl-4 pr-4 py-3.5 bg-secondary rounded-2xl"
        >
          {[1,2,3,4,5,6,7,8].map((n) => (
            <option key={n} value={n}>
              {n} Passenger{n > 1 ? "s" : ""}
            </option>
          ))}
        </select>

        {/* Vehicle */}
        <div className="flex gap-2">
          {vehicleTypes.map((v) => (
            <button
              key={v.label}
              onClick={() => setVehicle(v.label)}
              type="button"
              className={`flex-1 py-3 rounded-2xl text-sm font-semibold ${
                vehicle === v.label
                  ? "bg-primary text-white"
                  : "bg-secondary"
              }`}
            >
              {v.icon} {v.label}
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-2">
          <Button
            onClick={handleCheckFare}
            disabled={loading}
            className="rounded-2xl py-6 text-base font-bold"
          >
            {loading ? "Checking..." : (
              <>
                <Search className="w-4 h-4 mr-2" />
                Check Fare
              </>
            )}
          </Button>

          <Button
            onClick={generateWhatsAppLink}
            className="bg-accent text-white rounded-2xl py-6 text-base font-bold"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingForm;

export default BookingForm;
