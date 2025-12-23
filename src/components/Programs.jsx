import {
  Dumbbell,
  Heart,
  Zap,
  Target,
  HeartHandshakeIcon,
  HeartPulseIcon,
  NfcIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, fade } from "../config/motionConfig";
const Programs = () => {
  const programs = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description:
        "Build muscle and increase strength with our tailored programs.",
    },
    {
      icon: HeartPulseIcon,
      title: "Cardio Training",
      description:
        "Boost endurance and cardiovascular health with dynamic cardio workouts.",
    },
    {
      icon: Zap,
      title: "Fat Loss",
      description:
        "Science-backed fat loss programs that preserve muscle and boost metabolism.",
    },
    {
      icon: Target,
      title: "Muscle Building",
      description:
        "Hypertrophy-focused training to maximize muscle growth and definition.",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-neutral-950 ">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our <span className="text-primary">Programs</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                className="bg-black border border-neutral-900 p-8 rounded-xl hover:border-primary"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />

                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>

                <p className="text-neutral-400">{program.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Programs;
