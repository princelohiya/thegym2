import { fadeUp, fade } from "../config/motionConfig";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND } from "../config/BrandConfig";

const ContactUs = ({ isMapError }) => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get <span className="text-primary">Started</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Visit us or drop a message. We're here to help!
          </p>
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
                <label className="block text-sm font-medium mb-2">
                  Fitness Goal
                </label>
                <select className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 focus:hover:bg-primaryHover focus:outline-none transition-colors">
                  <option>Select your goal</option>
                  <option>Weight Loss</option>
                  <option>Muscle Gain</option>
                  <option>General Fitness</option>
                  <option>Athletic Performance</option>
                </select>
              </div>
              <button
                onClick={() =>
                  alert("Form submission is UI only. Connect to your backend!")
                }
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
                    <div className="text-neutral-400">
                      123 Fitness Street, University Area, City - 560001
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium">Timings</div>
                    <div className="text-neutral-400">
                      Mon - Sat: 5:00 AM - 11:00 PM
                    </div>
                    <div className="text-neutral-400">
                      Sun: 6:00 AM - 9:00 PM
                    </div>
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
  );
};

export default ContactUs;
