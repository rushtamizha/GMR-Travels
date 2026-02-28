import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-foreground text-background pt-16 pb-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-12 w-12  rounded-xl  flex items-center justify-center">
                <img
                  src="/logo.png"
                  className="w-full rounded-lg"
                  alt="gmr-logo"
                />
              </div>
              <span className="font-extrabold text-xl">GMR Travels</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Your trusted cab partner for Chennai–Pondicherry travel. Safe,
              reliable, and affordable.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="tel:+917806986128"
                className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917806986128"
                className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-whatsapp transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:lovelyrajkumar7580@gmail.com"
                className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              {["Home", "Services", "Routes", "Why Us", "Reviews"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-background transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              {[
                "Chennai to Pondicherry",
                "Pondicherry to Chennai",
                "Airport Transfers",
                "Sightseeing Tours",
                "Outstation Trips",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="hover:text-background transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                +91 78069 86128
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                lovelyrajkumar7580@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                101,Villanur Main Road , Puducherry,kombakkam , puducherry
                605110, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 mb-20 text-center text-sm text-background/40 space-y-2">
          <p>© {new Date().getFullYear()} GMR Travels. All rights reserved.</p>
          <p>
            Website developed by{" "}
            <a
              href="https://wepzite.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400  font-medium "
            >
              wepzite.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
