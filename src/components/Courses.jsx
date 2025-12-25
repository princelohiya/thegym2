import { motion } from "framer-motion";
import {
  Download,
  FileText,
  PlayCircle,
  Database,
  Unlock,
  ArrowRight,
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Hypertrophy 101",
      subtitle: "Beginner's Guide to Growth",
      format: "PDF GUIDE",
      size: "2.4 MB",
      icon: FileText,
      link: "#", // Add your Google Drive link here
    },
    {
      title: "Mobility Protocol",
      subtitle: "15 Min Daily Routine",
      format: "VIDEO MODULE",
      size: "145 MB",
      icon: PlayCircle,
      link: "#",
    },
    {
      title: "Nutrition Blueprint",
      subtitle: "Macro Calculation & Meal Prep",
      format: "PDF + SHEETS",
      size: "4.1 MB",
      icon: Database,
      link: "#",
    },
    {
      title: "Core Stability",
      subtitle: "Bulletproof Abs Circuit",
      format: "VIDEO MODULE",
      size: "89 MB",
      icon: PlayCircle,
      link: "#",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="courses"
      className="relative py-24 bg-neutral-950 overflow-hidden"
    >
      {/* Background Grid - Consistent with other sections */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)",
            backgroundSize: "2rem 2rem",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-2 text-primary text-xs font-bold tracking-[0.2em] uppercase">
              <Database size={19} />
              Training Archives
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
              Free{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
                Resources
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-neutral-400 max-w-sm text-sm md:text-right"
          >
            Access our open-source training protocols. <br />
            No payment required. Download and deploy.
          </motion.p>
        </div>

        {/* Course Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {courses.map((course, i) => {
            const Icon = course.icon;
            return (
              <motion.a
                key={i}
                href={course.link}
                target="_blank"
                rel="noreferrer" // Security for external links
                variants={cardVariants}
                className="group relative block h-full"
              >
                <div className="relative h-full bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-none p-6 transition-all duration-300 hover:bg-neutral-900/80 hover:border-primary/50 group-hover:-translate-y-2">
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-green-500/10 border border-green-500/20 px-2 py-1 rounded text-[10px] font-bold text-green-500 uppercase tracking-wider">
                      <Unlock size={10} />
                      Unlocked
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-6 h-6 text-neutral-400 group-hover:text-black transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="mb-8">
                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">
                      {course.format}
                    </div>
                    <h3 className="text-xl font-bold text-white italic mb-1 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {course.subtitle}
                    </p>
                  </div>

                  {/* Footer / Download Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 group-hover:border-primary/20 transition-colors">
                    <span className="text-xs font-mono text-neutral-600">
                      {course.size}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider group-hover:text-primary transition-colors">
                      Access
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>

                  {/* Corner Accent (Tactical UI) */}
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10 group-hover:border-primary transition-colors" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Courses;
