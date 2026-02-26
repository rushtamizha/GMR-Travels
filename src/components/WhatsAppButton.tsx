import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20cab"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-20 right-6 z-50 flex items-center gap-2 bg-whatsapp text-accent-foreground px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-shadow group"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-semibold text-sm hidden sm:inline">Inquire on WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;
