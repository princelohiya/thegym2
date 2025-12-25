import { motion } from "framer-motion";
import { BRAND } from "../config/BrandConfig";

const Hero = ({ scrollTo }) => {
  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-neutral-950 overflow-hidden"
    >
      {/* 1. Background Enhancement */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Refined Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-20 pb-12 text-center"
      >
        {/* 2. Trust Badge with Glass Effect */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-medium tracking-wider text-neutral-300 uppercase">
              Ghitorni’s Elite Fitness Hub since 1998
            </span>
          </div>
        </motion.div>

        {/* 3. High-Impact Typography */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6"
        >
          TRAIN LIKE A <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-orange-600">
            CHAMPION
          </span>
        </motion.h1>

        {/* 4. Subtext with better readability */}
        <motion.p
          variants={itemVariants}
          className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Stop looking for shortcuts. Experience the most advanced training
          facility in Ghitorni designed for those who dare to be great.
        </motion.p>

        {/* 5. Enhanced Interactive Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollTo("pricing")}
            className="group relative w-full sm:w-auto px-10 py-4 bg-primary text-black font-bold rounded-full overflow-hidden transition-all hover:pr-12"
          >
            <span className="relative z-10">START YOUR JOURNEY</span>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
              →
            </span>
          </button>

          <a
            href={`https://wa.me/${BRAND.phone}`}
            className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all"
          >
            WHATSAPP US
          </a>
        </motion.div>

        {/* 6. Social Proof / Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/5 pt-10"
        >
          <div>
            <div className="text-3xl font-bold text-white">25+</div>
            <div className="text-sm text-neutral-500 uppercase tracking-widest">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">1000+</div>
            <div className="text-sm text-neutral-500 uppercase tracking-widest">
              Members Transformed
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-3xl font-bold text-white">4.9</div>
            <div className="text-sm text-neutral-500 uppercase tracking-widest">
              Google Rating
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Side Decorative Text */}
      <div className="hidden lg:block absolute -left-10 bottom-20 rotate-90 text-[120px] font-black text-white/[0.02] select-none pointer-events-none">
        DISCIPLINE
      </div>
    </section>
  );
};

export default Hero;
