import { motion } from "framer-motion";
import { Shield, Clock, Sparkles, BadgeCheck, Headphones, CreditCard } from "lucide-react";

const features = [
  { icon: BadgeCheck, title: "Professional Drivers", desc: "Verified, experienced, and courteous drivers for every ride." },
  { icon: Clock, title: "On-Time Pickup", desc: "We value your time. Always on schedule, every time." },
  { icon: Sparkles, title: "Clean & Sanitized Cars", desc: "Spotless vehicles sanitized before every trip." },
  { icon: CreditCard, title: "Transparent Pricing", desc: "No hidden charges. What you see is what you pay." },
  { icon: Headphones, title: "24/7 Customer Support", desc: "Round-the-clock assistance for all your queries." },
  { icon: Shield, title: "Safe & Insured", desc: "Fully insured rides for your complete peace of mind." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
            Your Comfort, Our Priority
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-5 rounded-2xl hover:bg-card hover:card-shadow transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">{f.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
