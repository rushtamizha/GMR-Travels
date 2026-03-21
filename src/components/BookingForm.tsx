import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Users, MessageCircle } from "lucide-react";

const ADMIN_NUMBER = "917806986128";

const vehicleTypes = [
  { label: "Sedan", icon: "🚗" },
  { label: "SUV", icon: "🚙" },
  { label: "Tempo", icon: "🚐" },
];

export default function BookingForm() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [vehicle, setVehicle] = useState("Sedan");

  const handleWhatsApp = () => {
    if (!pickup || !drop || !date || !time) {
      alert("Please fill all fields");
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

    const url = `https://wa.me/${ADMIN_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-2xl mx-auto bg-white shadow-2xl rounded-3xl p-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Book Your Ride
      </h2>

      <div className="grid gap-4">

        {/* Pickup Input */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5" />
          <input
            type="text"
            placeholder="Enter Pickup Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full pl-10 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Drop Input */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Enter Drop Location"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            className="w-full pl-10 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full pl-10 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full pl-10 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Passengers */}
        <div className="relative">
          <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <select
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="w-full pl-10 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>{n} Passenger{n > 1 ? "s" : ""}</option>
            ))}
          </select>
        </div>

        {/* Vehicle Selection */}
        <div className="flex gap-3">
          {vehicleTypes.map((v) => (
            <button
              key={v.label}
              type="button"
              onClick={() => setVehicle(v.label)}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                vehicle === v.label
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {v.icon} {v.label}
            </button>
          ))}
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 transition"
        >
          <MessageCircle className="w-5 h-5" />
          Book via WhatsApp
        </button>

        {/* Route Info */}
        <p className="text-sm text-gray-500 mt-2 text-center">
          Allowed Routes: Chennai ↔ Any Place | Pondicherry ↔ Any Place
        </p>

      </div>
    </motion.div>
  );
}
