import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Heart, Zap, Target, MapPin, Clock, Phone, Mail } from 'lucide-react';
import { motion } from "framer-motion";


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMapError, setIsMapError] = useState(false);

  const BRAND = {
  name: "Dronacharya's THE GYM",
  phone: "8265826307",
  email: "thegym@gmail.com",
  address : "Mangu Mohalla, road, near SFS computer, Ghitorni, New Delhi, Delhi 110030",
  phone: "99990 05956",


  };

  const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'programs', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-neutral-900">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Dumbbell className="w-8 h-8 text-orange-400" />
              <span className="text-xl font-bold">{BRAND.name}</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'programs', 'pricing', 'contact', 'Courses'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? 'text-primary'
                      : 'text-main hover:text-primary'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          </motion.div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-neutral-900">
            <div className="px-4 py-4 space-y-3">
              {['home', 'programs', 'pricing', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize py-2 hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
  {/* HERO */}
      <section id="home" className="min-h-screen pt-16 flex items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
            viewport={{once: false}}

          animate="visible"
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Transform Your <span className="block text-primary">Body & Mind</span>
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
            Professional training, modern equipment, real results.
          </p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => scrollTo("pricing")}
              className="bg-primary text-black px-8 py-4 rounded-lg font-bold hover:bg-primaryHover"
            >
              Join Now
            </button>
            <a
              href={`https://wa.me/${BRAND.phone}`}
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-black"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-neutral-950">
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
            {[Dumbbell, Heart, Zap, Target].map((Icon, i) => (
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

      {/* Testimonials */}
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
          <div className="text-primary text-5xl leading-none mb-4">“</div>

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

{/* Pricing Section */}
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
              <li
                key={i}
                className="flex items-center text-neutral-300"
              >
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get <span className="text-primary">Started</span>
            </h2>
            <p className="text-neutral-400 text-lg">Visit us or drop a message. We're here to help!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-neutral-950 p-8 rounded-lg border border-neutral-900">
              <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 focus:hover:bg-primaryHover focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 focus:hover:bg-primaryHover focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Fitness Goal</label>
                  <select className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 focus:hover:bg-primaryHover focus:outline-none transition-colors">
                    <option>Select your goal</option>
                    <option>Weight Loss</option>
                    <option>Muscle Gain</option>
                    <option>General Fitness</option>
                    <option>Athletic Performance</option>
                  </select>
                </div>
                <button
                  onClick={() => alert('Form submission is UI only. Connect to your backend!')}
                  className="w-full bg-primary text-black py-3 rounded-lg font-bold hover:bg-primaryHover transition-all"
                >
                  Submit Inquiry
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-neutral-950 p-8 rounded-lg border border-neutral-900">
                <h3 className="text-2xl font-bold mb-6">Visit Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-neutral-400">123 Fitness Street, University Area, City - 560001</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium">Timings</div>
                      <div className="text-neutral-400">Mon - Sat: 5:00 AM - 11:00 PM</div>
                      <div className="text-neutral-400">Sun: 6:00 AM - 9:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-neutral-400">+91 {BRAND.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-neutral-400">{BRAND.email}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Map */}
              <div className="bg-neutral-900 rounded-lg overflow-hidden h-64">
                {isMapError ? (
                  <div className="w-full h-full flex flex-col items-center justify-center space-y-3">
                    <MapPin className="w-16 h-16 text-primary" />
                    <p className="text-neutral-400 text-sm px-4 text-center">
                      Map is currently unavailable. Showing location icon instead.
                    </p>
                  </div>
                ) : (
                  <iframe
                    title={`${BRAND.name} Location`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.518157327004!2d77.69504171094573!3d27.577460831109445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736f99c2d2e329%3A0x4294ba7a839c4126!2sROYAL%20FITNESS%20GYM!5e0!3m2!1sen!2sin!4v1766046398103!5m2!1sen!2sin"
                    onError={() => setIsMapError(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-neutral-400">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Dumbbell className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-white">{BRAND.name}</span>
          </div>
          <p>&copy; 2025 {BRAND.name}. Transform your body, elevate your life.</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/8265826307"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-primary text-black p-4 rounded-full shadow-lg hover:bg-primaryHover transition-all z-50 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;