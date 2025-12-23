import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../config/motionConfig";
import { BRAND } from "../config/BrandConfig";
import { Menu, X, Dumbbell } from "lucide-react";

export const Appbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-neutral-900">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Dumbbell className="w-8 h-8 text-orange-400" />
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold cursor-pointer"
            >
              {BRAND.name}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              "home",
              "programs",
              "pricing",
              "contact",
              "courses",
              "gallery",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={` cursor-pointer capitalize transition-colors ${
                  activeSection === item
                    ? "text-primary"
                    : "text-main hover:text-primary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-neutral-900">
          <div className="px-4 py-4 space-y-3">
            {["home", "programs", "pricing", "contact", "gallery"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize py-2 hover:text-primary transition-colors"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
