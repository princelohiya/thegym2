import { motion } from "framer-motion";
import { fadeUp, fade } from "../config/motionConfig";
import { Dumbbell, NfcIcon } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Real transformations from real members
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Arjun K.",
              result: "Lost 15kg in 4 months",
              quote:
                "The trainers here understand real-life schedules. Flexible timings and amazing support.",
            },
            {
              name: "Priya M.",
              result: "Built lean muscle",
              quote:
                "This gym feels like a family. The energy, discipline, and motivation are unmatched.",
            },
            {
              name: "Rahul S.",
              result: "Increased strength by 40%",
              quote:
                "Best decision I made for my health. Affordable plans and serious results.",
            },
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "tween", duration: 0.12, ease: "easeOut" }}
              className="bg-neutral-950 p-8 rounded-xl border border-neutral-900 hover:border-primary transition-all"
            >
              {/* Quote icon */}

              <div className="text-primary text-5xl leading-none mb-4">
                <NfcIcon></NfcIcon>
              </div>

              {/* Quote */}
              <p className="text-neutral-300 mb-8 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Footer */}
              <div className="pt-4 border-t border-neutral-900">
                <div className="font-semibold text-white">
                  {testimonial.name}
                </div>
                <div className="text-primary text-sm mt-1">
                  {testimonial.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
