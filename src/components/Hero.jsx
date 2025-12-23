import { motion } from "framer-motion";
import { fadeUp } from "../config/motionConfig";
import { BRAND } from "../config/BrandConfig";
import logo from "../images/gallery/hero-img.jpg";

const Hero = ({ scrollTo }) => {
  return (
    <section id="home" className="min-h-screen pt-16 flex items-center">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        viewport={{ once: false }}
        animate="visible"
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 text-center"
      >
        {/* <img src={logo} alt="UrbanFit Logo" className="w-full relative" /> */}
        <h1 className="text-5xl lg:text-7xl font-bold mb-6">
          Transform Your <span className="block text-primary">Body & Mind</span>
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
          Professional training, modern equipment, real results.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => scrollTo("pricing")}
            className="bg-primary text-black px-8 py-4 rounded-lg font-bold hover:bg-primaryHover"
          >
            Join Now
          </button>
          <a
            href={`https://wa.me/${BRAND.phone}`}
            className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-black"
          >
            WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
