import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileBookBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-card/95 backdrop-blur-md border-t border-border p-3 flex gap-2">
      <Button asChild className="flex-1 bg-primary text-primary-foreground rounded-xl py-5 font-bold">
        <a href="#home">
          Book Now <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </Button>
      <Button asChild variant="outline" className="rounded-xl py-5 px-4 border-primary text-primary">
        <a href="tel:+919876543210">
          <Phone className="w-4 h-4" />
        </a>
      </Button>
    </div>
  );
};

export default MobileBookBar;
