import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react"; // Using Lucide icon for cleaner look

// Components
import { Appbar } from "./components/Appbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery"; // Moved up for visual impact
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Courses from "./components/Courses";
import ContactUs from "./components/ContactUs"; // Now includes the Footer

// Config
import { BRAND } from "./config/BrandConfig"; // Assuming you have this, otherwise use local object

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMapError, setIsMapError] = useState(false);

  // --- Scroll Spy Logic ---
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "programs",
        "gallery",
        "pricing",
        "contact",
        "courses",
      ];
      // Offset to trigger active state slightly before the section hits top
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Smooth Scroll Handler ---
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-neutral-950 text-white font-sans min-h-screen selection:bg-primary selection:text-black overflow-x-hidden">
      {/* 1. Navigation */}
      <Appbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* 2. Hero Section */}
      <Hero scrollTo={scrollToSection} />

      {/* 3. Programs (The Product) */}
      <Programs />

      {/* 4. Gallery (Visual Proof - Moved up) */}
      <Gallery />

      {/* 5. Testimonials (Social Proof) */}
      <Testimonials />

      {/* 6. Pricing ( The Offer) */}
      <Pricing scrollToSection={scrollToSection} />

      {/* 7. Free Courses (Lead Magnet) */}
      <Courses />

      {/* 8. Contact (Action & Footer) */}
      <ContactUs isMapError={isMapError} />

      {/* --- Floating Action Button (WhatsApp) --- */}
      <a
        href={`https://wa.me/${BRAND.phone}`} // Uses config phone number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[200] group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping group-hover:bg-primary/50" />
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300">
          <MessageCircle className="w-7 h-7 fill-white" />
        </div>
      </a>
    </div>
  );
};

export default App;
