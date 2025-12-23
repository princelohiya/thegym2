import { fadeUp, fade } from "../config/motionConfig";
import { motion } from "framer-motion";

const Pricing = ({ scrollToSection }) => {
  return (
    <section id="pricing" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            No contracts. No hidden charges. Cancel anytime.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Basic",
              price: "₹999",
              features: [
                "Gym Access",
                "Locker Facility",
                "Basic Equipment",
                "5 Days / Week",
              ],
              popular: false,
            },
            {
              name: "Standard",
              price: "₹1,499",
              features: [
                "Full Gym Access",
                "Personal Trainer (2× / week)",
                "Nutrition Guidance",
                "7 Days / Week",
                "Group Classes",
              ],
              popular: true,
            },
            {
              name: "Pro",
              price: "₹2,499",
              features: [
                "Everything in Standard",
                "Personal Trainer (4× / week)",
                "Custom Meal Plans",
                "Priority Booking",
                "Guest Pass (2× / month)",
              ],
              popular: false,
            },
          ].map((plan, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "tween", duration: 0.12, ease: "easeOut" }}
              className={`relative rounded-2xl border p-8 bg-black transition-all
            ${
              plan.popular
                ? "border-primary shadow-[0_0_0_1px_var(--primary)]"
                : "border-neutral-900 hover:border-primary"
            }`}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-2xl font-bold mb-3 text-center">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-primary">
                  {plan.price}
                </span>
                <span className="text-neutral-400"> / month</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-neutral-300">
                    <span className="text-primary mr-3 text-lg">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => scrollToSection("contact")}
                className={`w-full py-3 rounded-lg font-bold transition-all
              ${
                plan.popular
                  ? "bg-primary text-black hover:bg-primaryHover"
                  : "border-2 border-primary text-primary hover:bg-primary hover:text-black"
              }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
