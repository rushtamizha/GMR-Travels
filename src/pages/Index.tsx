import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import RoutesSection from "@/components/RoutesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBookBar from "@/components/MobileBookBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <RoutesSection />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBookBar />
    </div>
  );
};

export default Index;
