import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Arjun K.",
      role: "Member since 2023",
      result: "LOST 15KG",
      quote:
        "The trainers here don't just count reps; they analyze your form like engineers. The flexible schedule saved me.",
    },
    {
      name: "Priya M.",
      role: "Member since 2022",
      result: "LEAN MUSCLE GAIN",
      quote:
        "I was intimidated by weights before. Now? I feel stronger than I ever have. The discipline here is contagious.",
    },
    {
      name: "Rahul S.",
      role: "Powerlifting Track",
      result: "STRENGTH +40%",
      quote:
        "No nonsense, no AC-chilling loiterers. Just serious people lifting heavy iron. Best investment for my health.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Background Texture (Consistent with Hero) */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <Star className="w-5 h-5 text-primary fill-primary" />
            <Star className="w-5 h-5 text-primary fill-primary" />
            <Star className="w-5 h-5 text-primary fill-primary" />
            <Star className="w-5 h-5 text-primary fill-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
            Real{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
              Results
            </span>
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto">
            We don't sell memberships. We sell transformations.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="relative group bg-neutral-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl transition-colors hover:border-primary/30 hover:bg-neutral-900/80"
            >
              {/* Giant Watermark Quote */}
              <div className="absolute top-4 right-6 text-primary/5 group-hover:text-primary/10 transition-colors">
                <Quote size={37} />
              </div>

              {/* The "Result" Badge - High Priority Info */}
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-primary text-xs font-black tracking-widest uppercase">
                  {t.result}
                </span>
              </div>

              {/* Quote Content */}
              <p className="relative z-10 text-neutral-300 text-lg leading-relaxed italic mb-8 group-hover:text-white transition-colors">
                "{t.quote}"
              </p>

              {/* Footer / Profile */}
              <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-6">
                <div>
                  <h4 className="text-white font-bold text-lg">{t.name}</h4>
                  <p className="text-neutral-500 text-xs uppercase tracking-wider">
                    {t.role}
                  </p>
                </div>

                {/* Verified Check */}
                <div className="flex flex-col items-end">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mb-1" />
                  <span className="text-[10px] text-neutral-600 uppercase font-bold">
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Social Proof Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 py-8 border-y border-white/5 flex flex-wrap justify-center gap-8 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {/* Logos could go here, for now text placeholders */}
          {["Men's Health", "BodyBuilding.com", "HealthKart"].map((brand) => (
            <span
              key={brand}
              className="text-xl font-black text-white italic uppercase tracking-tighter"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
