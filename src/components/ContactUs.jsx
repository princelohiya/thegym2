import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  ArrowRight,
  Crosshair,
} from "lucide-react";
import { BRAND } from "../config/BrandConfig";

const ContactUs = ({ isMapError }) => {
  const [focusedField, setFocusedField] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="relative pt-24 pb-10 bg-neutral-950 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* LEFT: THE COMMS FORM */}
          <div className="space-y-12">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 mb-4 text-primary text-xs font-bold tracking-[0.2em] uppercase">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                System Online
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
                Establish <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
                  Comms
                </span>
              </h2>
              <p className="text-neutral-400 text-lg max-w-md">
                Ready to deploy? Send us your coordinates and we'll initiate
                your onboarding protocol.
              </p>
            </motion.div>

            <motion.form variants={itemVariants} className="space-y-8">
              {[
                {
                  label: "Operative Name",
                  type: "text",
                  placeholder: "JOHN DOE",
                },
                {
                  label: "Contact Frequency",
                  type: "tel",
                  placeholder: "+91 98765 43210",
                },
              ].map((field, idx) => (
                <div key={idx} className="relative">
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 block">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    onFocus={() => setFocusedField(field.label)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-medium text-white placeholder-neutral-700 focus:outline-none focus:border-primary transition-all rounded-none"
                  />
                  {/* Animated Underline */}
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                      focusedField === field.label ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              ))}

              <div className="relative">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 block">
                  Mission Objective
                </label>
                <select className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-medium text-white focus:outline-none focus:border-primary transition-all rounded-none appearance-none cursor-pointer">
                  <option className="bg-neutral-900">Muscle Hypertrophy</option>
                  <option className="bg-neutral-900">Fat Loss Protocol</option>
                  <option className="bg-neutral-900">Endurance Training</option>
                  <option className="bg-neutral-900">
                    General Conditioning
                  </option>
                </select>
                <div className="absolute right-0 top-10 pointer-events-none text-neutral-500">
                  ▼
                </div>
              </div>

              <button
                type="button"
                className="group relative w-full py-5 bg-white text-black font-black uppercase italic tracking-wider text-lg overflow-hidden transition-all hover:bg-primary"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Submit Inquiry{" "}
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </span>
              </button>
            </motion.form>
          </div>

          {/* RIGHT: INTEL & MAP */}
          <motion.div
            variants={itemVariants}
            className="space-y-12 flex flex-col justify-between"
          >
            {/* Contact Intel Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 border border-white/5 bg-neutral-900/30 hover:border-primary/30 transition-colors group">
                <MapPin className="text-primary mb-4 w-8 h-8 group-hover:scale-110 transition-transform" />
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">
                  Address Line
                </h4>
                <p className="text-white font-medium leading-relaxed">
                  {BRAND.address}
                </p>
              </div>

              <div className="p-6 border border-white/5 bg-neutral-900/30 hover:border-primary/30 transition-colors group">
                <Clock className="text-primary mb-4 w-8 h-8 group-hover:scale-110 transition-transform" />
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">
                  Operational Hours
                </h4>
                <p className="text-white font-medium">
                  Mon - Sat
                  <br />
                  05:00 - 22:00
                </p>
                <p className="text-neutral-500 text-sm mt-1">
                  Daily Operations
                </p>
              </div>

              <div className="p-6 border border-white/5 bg-neutral-900/30 hover:border-primary/30 transition-colors group">
                <Phone className="text-primary mb-4 w-8 h-8 group-hover:scale-110 transition-transform" />
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">
                  Comms Line
                </h4>
                <p className="text-white font-medium text-lg">
                  +91 {BRAND.phone}
                </p>
              </div>

              <div className="p-6 border border-white/5 bg-neutral-900/30 hover:border-primary/30 transition-colors group">
                <Mail className="text-primary mb-4 w-8 h-8 group-hover:scale-110 transition-transform" />
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">
                  Digital Mail
                </h4>
                <p className="text-white font-medium truncate">{BRAND.email}</p>
              </div>
            </div>

            {/* Tactical Map Container */}
            <div className="relative w-full h-64 border border-white/10 group overflow-hidden">
              {/* HUD Overlays */}
              <div className="absolute top-0 left-0 p-2 z-10 border-t-2 border-l-2 border-primary w-8 h-8" />
              <div className="absolute bottom-0 right-0 p-2 z-10 border-b-2 border-r-2 border-primary w-8 h-8" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <Crosshair
                  className="text-primary w-12 h-12 animate-spin-slow"
                  strokeWidth={1}
                />
              </div>

              {/* The Map */}
              <div className="w-full h-full grayscale-0 opacity-100 invert-[.1] contrast-125 hover:invert-0 transition-all duration-700">
                {isMapError ? (
                  <div className="w-full h-full flex items-center justify-center bg-neutral-900 text-neutral-500">
                    <span className="text-xs font-mono uppercase">
                      Map Data Offline
                    </span>
                  </div>
                ) : (
                  <iframe
                    title={`${BRAND.name} Location`}
                    className="w-full h-full border-0"
                    loading="eager"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade grayscale-0 opacity-100"
                    src="https://www.google.com/maps/embed?pb=!4v1703512800000!6m8!1m7!1s0x390d1ef41c08fd05:0xf287f559941de04!2m2!1d28.495753!2d77.1441903!3f0!4f0!5f0.7820865974627469"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* --- FOOTER SECTION INTEGRATED --- */}
      <footer className="mt-24 pt-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-black italic text-xl text-white uppercase tracking-tighter">
              {BRAND.name}
            </span>
            <span className="text-xs text-neutral-500">© 2025</span>
          </div>

          <div className="flex gap-6">
            {["Instagram", "Twitter", "YouTube"].map((social) => (
              <a
                key={social}
                href=""
                className="text-xs font-bold text-neutral-500 uppercase tracking-widest hover:text-primary transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactUs;
