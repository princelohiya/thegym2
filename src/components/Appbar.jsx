import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "../config/BrandConfig";
import { Menu, X, Dumbbell, ArrowRight } from "lucide-react";

export const Appbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "home",
    "programs",
    "pricing",
    "contact",
    "courses",
    "gallery",
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] transition-all duration-500">
      <div
        className={`mx-auto transition-all duration-500 ${
          isScrolled ? "max-w-4xl mt-4 px-4" : "max-w-7xl mt-0 px-6"
        }`}
      >
        <div
          className={`relative flex items-center justify-between transition-all duration-500 px-6 ${
            isScrolled
              ? "h-14 rounded-full bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "h-20 bg-transparent border-b border-white/5"
          }`}
        >
          {/* LOGO */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group"
          >
            <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary transition-colors duration-300">
              <Dumbbell className="w-5 h-5 text-primary group-hover:text-black" />
            </div>
            <span className="font-black tracking-tighter text-xl text-white uppercase italic">
              {BRAND.name}
            </span>
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeSection === item
                    ? "text-primary bg-primary/10"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}

            {/* CTA in Nav */}
            <button
              onClick={() => scrollToSection("pricing")}
              className="ml-4 px-5 py-2 bg-primary text-black text-[11px] font-black uppercase rounded-full hover:scale-105 active:scale-95 transition-all"
            >
              Join Now
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] md:hidden bg-neutral-950/95 backdrop-blur-2xl flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-black italic text-2xl text-primary uppercase">
                {BRAND.name}
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-5 flex-grow">
              {navLinks.map((item, idx) => (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setIsMenuOpen(false);
                  }}
                  className={`text-4xl font-black uppercase italic text-left flex justify-between items-center group ${
                    activeSection === item ? "text-primary" : "text-white"
                  }`}
                >
                  {item}
                  <ArrowRight className="opacity-0 group-hover:opacity-100 text-primary transition-all" />
                </motion.button>
              ))}
            </div>

            <div className="mt-auto pb-10">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("pricing");
                }}
                className="w-full py-5 bg-primary text-black font-black uppercase italic text-xl skew-x-[-6deg]"
              >
                Get Started Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
