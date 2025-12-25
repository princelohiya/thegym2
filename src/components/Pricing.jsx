import { motion } from "framer-motion";
import { Check, Zap, Crown } from "lucide-react";

const Pricing = ({ scrollToSection }) => {
  const plans = [
    {
      name: "Starter", // Renamed for better fit
      tier: "TIER 01",
      price: "999",
      features: [
        "Standard Gym Access",
        "Locker Facility",
        "Basic Equipment Zone",
        "Access: 5 Days/Week",
      ],
      popular: false,
    },
    {
      name: "Athlete",
      tier: "TIER 02",
      price: "1,499",
      features: [
        "Unrestricted Gym Access",
        "Personal Trainer (2x/Wk)",
        "Nutrition Macro Audit",
        "Access: 7 Days/Week",
        "Group Class Access",
      ],
      popular: true,
    },
    {
      name: "Elite",
      tier: "TIER 03",
      price: "2,499",
      features: [
        "All Athlete Features",
        "Personal Trainer (4x/Wk)",
        "Custom Meal Plans",
        "Priority Machine Booking",
        "Guest Passes (2x/Mo)",
      ],
      popular: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="pricing"
      className="relative py-24 bg-neutral-950 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase">
              Membership Protocol
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter"
          >
            Invest In Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              Power
            </span>
          </motion.h2>
          <p className="mt-4 text-neutral-400 font-medium">
            No hidden fees. No contracts. Just results.
          </p>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-10 items-center"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`relative group flex flex-col h-full ${
                plan.popular ? "md:-mt-8 md:mb-8 z-10" : "z-0"
              }`}
            >
              {/* Card Container */}
              <div
                className={`relative h-full flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? "bg-neutral-900 border-primary shadow-[0_0_40px_-10px_rgba(255,122,0,0.3)] scale-100 md:scale-105"
                    : "bg-neutral-900/40 border-white/5 hover:border-white/20 hover:bg-neutral-900/60"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <div className="bg-primary text-black px-6 py-2 text-xs font-black uppercase tracking-widest rounded-sm skew-x-[-10deg] shadow-lg">
                      <span className="block skew-x-[10deg] flex items-center gap-2">
                        <Zap size={14} fill="black" /> Best Value
                      </span>
                    </div>
                  </div>
                )}

                {/* Tier Label */}
                <div
                  className={`text-xs font-bold tracking-widest uppercase mb-4 ${
                    plan.popular ? "text-primary" : "text-neutral-500"
                  }`}
                >
                  {plan.tier}
                </div>

                {/* Name & Price */}
                <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-6">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1 mb-8 border-b border-white/5 pb-8">
                  <span className="text-sm font-bold text-neutral-500">₹</span>
                  <span
                    className={`text-5xl font-black tracking-tighter ${
                      plan.popular ? "text-white" : "text-neutral-200"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-neutral-500 font-medium">/mo</span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className={`mt-1 p-0.5 rounded-full ${
                          plan.popular
                            ? "bg-primary text-black"
                            : "bg-neutral-800 text-neutral-400"
                        }`}
                      >
                        <Check size={10} strokeWidth={4} />
                      </div>
                      <span className="text-sm font-medium text-neutral-300 leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`w-full py-4 text-sm font-black uppercase italic tracking-wider transition-all duration-300 skew-x-[-6deg] ${
                    plan.popular
                      ? "bg-primary text-black hover:bg-white hover:scale-[1.02]"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black"
                  }`}
                >
                  <span className="block skew-x-[6deg]">
                    {plan.popular ? "Start Transformation" : "Select Plan"}
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Trust Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        ></motion.div>
      </div>
    </section>
  );
};

export default Pricing;
