import { motion } from "framer-motion";
import { fadeUp, fade } from "../config/motionConfig";
import { Dumbbell, Heart, Zap, CheckCircleIcon, User2Icon } from "lucide-react";

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Free <span className="text-primary">Courses</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[Dumbbell, Heart, Zap, CheckCircleIcon, User2Icon].map((Icon, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 }}
              className="bg-black border border-neutral-900 p-8 rounded-xl hover:border-primary"
            >
              <Icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Training Program</h3>
              <p className="text-neutral-400 text-sm">
                Structured workouts designed for real results.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Courses;
