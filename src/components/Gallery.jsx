import { motion } from "framer-motion";

import gym1 from "../images/gallery/img1.jpg";
import gym2 from "../images/gallery/img2.jpg";
import gym3 from "../images/gallery/img3.jpg";
import gym4 from "../images/gallery/img4.jpg";
import gym5 from "../images/gallery/img5.jpg";
import gym6 from "../images/gallery/img6.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function Gallery() {
  return (
    <section id="gallery" className="bg-[#0b0b0b] py-20">
      <div className="container page-padding">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-primary text-2xl font-extrabold uppercase tracking-widest mb-3">
            gallery
          </p>
          <h2 className="text-2xl font-bold text-white leading-tight">
            Inside Dronacharya’s The Gym
          </h2>
          <p className="text-[#b4b4b4] text-base mt-4">
            Real gym. Real training. No filters.
          </p>
        </motion.div>

        {/* GRID — MOBILE FIRST */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className={`
            {for mobile}
            grid grid-cols-1 gap-5 
            
            {for desktop}
            sm:grid-cols-2 lg:grid-cols-3 m-1`}
        >
          {[gym1, gym2, gym3, gym4, gym5, gym6].map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="relative overflow-hidden rounded-lg border border-white/10"
            >
              <motion.img
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-100px" }}
                src={img}
                alt="Dronacharya’s The Gym"
                className="w-full h-80 sm:h-[240px] gap-2 lg:h-[260px] object-cover hover:scale-105 transition-transform duration-300 bg-top "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;
