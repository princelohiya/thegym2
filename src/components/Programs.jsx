import {
  Dumbbell,
  HeartPulseIcon,
  Zap,
  Target,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const Programs = () => {
  const programs = [
    {
      icon: Dumbbell,
      title: "Strength Protocol", // Renamed for impact
      description:
        "Heavy compound movements designed to maximize raw power and structural integrity.",
    },
    {
      icon: HeartPulseIcon,
      title: "Endurance Engine",
      description:
        "High-intensity cardiovascular conditioning to expand your energy systems.",
    },
    {
      icon: Zap,
      title: "Metabolic Shred",
      description:
        "High-frequency interval training to ignite fat loss while preserving lean mass.",
    },
    {
      icon: Target,
      title: "Hypertrophy",
      description:
        "Volume-based isolation training specifically engineered for muscle aesthetics.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="programs"
      className="relative py-24 bg-neutral-950 overflow-hidden"
    >
      {/* Background Grid - Keeping it consistent but subtle */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold tracking-widest uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Training Systems
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter"
          >
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
              Battlefield
            </span>
          </motion.h2>
        </div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programs.map((program, i) => {
            const Icon = program.icon;
            // Pad index with zero (01, 02, etc)
            const indexStr = `0${i + 1}`;

            return (
              <motion.div
                key={program.title}
                variants={cardVariants}
                className="group relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 p-8 h-full overflow-hidden transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(255,122,0,0.2)]"
              >
                {/* Decorative Corner Markers */}
                <div className="absolute top-0 right-0 p-3 opacity-50 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 border-t border-r border-white/30 group-hover:border-primary" />
                </div>
                <div className="absolute bottom-0 left-0 p-3 opacity-50 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 border-b border-l border-white/30 group-hover:border-primary" />
                </div>

                {/* Giant Background Number */}
                <div className="absolute -right-4 -top-8 text-[120px] font-black text-white/[0.02] group-hover:text-primary/[0.04] transition-colors select-none pointer-events-none italic">
                  {indexStr}
                </div>

                {/* Icon Box */}
                <div className="relative w-14 h-14 mb-6 flex items-center justify-center bg-neutral-800 rounded-lg group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white uppercase italic mb-3 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors">
                    {program.description}
                  </p>

                  {/* Learn More Link (Visual only) */}
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
                    View Details
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>

                {/* Bottom Highlight Bar */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
