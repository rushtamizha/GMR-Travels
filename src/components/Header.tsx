import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Routes", href: "#routes" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#footer" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const handleMobileClick = (href) => {
  setMobileOpen(false);

  setTimeout(() => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 250); // wait for animation to close
};

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-12 w-12  rounded-full flex items-center justify-center">
            <img src="/logo.png" className="w-full rounded-lg" alt="gmr-logo" />
          </div>
          <span
            className={`font-extrabold text-xl ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            GMR Travels
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className={`flex items-center gap-2 text-sm font-semibold ${
              scrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            <Phone className="w-4 h-4" />
            +91 7806986128
          </a>
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold rounded-xl px-5"
          >
            <a href="#home">Book Now</a>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="container mx-auto py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileClick(link.href);
                  }}
                  className="px-4 py-3 rounded-lg text-foreground hover:bg-muted font-medium text-sm"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 mt-3 px-4">
                <Button
                  asChild
                  className="flex-1 bg-primary text-primary-foreground rounded-xl"
                >
                  <a href="#home"  >Book Now</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 rounded-xl border-whatsapp text-whatsapp"
                >
                  <a
                    href="https://wa.me/917806986128"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
