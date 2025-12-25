import { motion } from "framer-motion";
import { Camera, Aperture, PlayCircle } from "lucide-react";

// --- IMPORTS ---
// Images
import gym1 from "../images/gallery/img1.jpg";
import gym2 from "../images/gallery/img2.jpg";
import gym3 from "../images/gallery/img3.jpg";
import gym4 from "../images/gallery/img4.jpg"; // Used as poster for video
import gym5 from "../images/gallery/img5.jpg";
import gym6 from "../images/gallery/img6.jpg";
import gym7 from "../images/gallery/img7.jpg";
import gym8 from "../images/gallery/img8.jpg";
import gym9 from "../images/gallery/img9.jpg";
import gym10 from "../images/gallery/img10.jpg";
import gym11 from "../images/gallery/img11.jpg";
import gym17 from "../images/gallery/img17.jpg";
import gym19 from "../images/gallery/img19.jpg";

// Videos (Replace these paths with your actual video files)
import video1 from "../videos/v1.mp4";
import video2 from "../videos/v2.mp4";
import video3 from "../videos/v3.mp4";
import video4 from "../videos/v4.mp4";
import video5 from "../videos/v5.mp4";
import video6 from "../videos/v6.mp4";

// For demo purposes, I'm using string placeholders for videos.
// // You should use the imports above.
// const video1 =
//   "https://assets.mixkit.co/videos/preview/mixkit-man-working-out-in-a-gym-22606-large.mp4";
// const video2 =
//   "https://assets.mixkit.co/videos/preview/mixkit-athlete-working-out-with-heavy-ropes-in-the-gym-22610-large.mp4";

// --- DATA CONFIG ---
const galleryItems = [
  {
    type: "image",
    src: gym1,
    // tag: "MAIN FLOOR",
    // cam: "CAM-01",
  },
  {
    type: "video", // <--- Set type to video
    src: video6, // <--- Video Source
    poster: gym2, // <--- Image to show while loading
    tag: "STRENGTH ZONE",
    cam: "LIVE-02",
  },
  {
    type: "video", // <--- Set type to video
    src: video4, // <--- Video Source
    poster: gym2, // <--- Image to show while loading
    tag: "STRENGTH ZONE",
    cam: "LIVE-02",
  },
  {
    type: "video", // <--- Set type to video
    src: video1, // <--- Video Source
    poster: gym2, // <--- Image to show while loading
    tag: "STRENGTH ZONE",
    cam: "LIVE-02",
  },
  {
    type: "video", // <--- Set type to video
    src: video5, // <--- Video Source
    poster: gym2, // <--- Image to show while loading
    tag: "STRENGTH ZONE",
    cam: "LIVE-02",
  },
  {
    type: "video", // <--- Set type to video
    src: video3, // <--- Video Source
    poster: gym2, // <--- Image to show while loading
    tag: "STRENGTH ZONE",
    cam: "LIVE-02",
  },

  {
    type: "image",
    src: gym4,
    tag: "FREE WEIGHTS",
    cam: "CAM-05",
  },

  {
    type: "image",
    src: gym7,
    tag: "LOCKER ROOMS",
    cam: "CAM-06",
  },
  {
    type: "image",
    src: gym19,
    tag: "LOCKER ROOMS",
    cam: "CAM-06",
  },

  {
    type: "image",
    src: gym17,
    tag: "LOCKER ROOMS",
    cam: "CAM-06",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="relative py-24 bg-neutral-950 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 text-primary text-xs font-bold tracking-[0.2em] uppercase"
          >
            <Aperture size={14} className="animate-spin-slow" />
            Visual Evidence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter"
          >
            Inside The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
              Facility
            </span>
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Bento Logic: First item and 4th item span 2 columns
              className={`relative group rounded-lg overflow-hidden border border-white/10 bg-neutral-900 ${
                index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              {/* --- MEDIA SWITCHER (IMAGE VS VIDEO) --- */}
              {item.type === "video" ? (
                <video
                  src={item.src}
                  poster={item.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.tag}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-0"
                />
              )}

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* HUD: Top Left (REC Indicator) */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-mono text-red-500 font-bold uppercase tracking-widest">
                  REC
                </span>
              </div>

              {/* HUD: Top Right (Camera ID) */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[10px] font-mono text-primary font-bold">
                {item.cam}
              </div>

              {/* HUD: Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-primary/90 p-3 rounded-full backdrop-blur-sm transform scale-50 group-hover:scale-100 transition-transform">
                  {/* Show Play icon for videos, nothing for images (or zoom icon) */}
                  {item.type === "video" && (
                    <PlayCircle className="text-black w-6 h-6 fill-black" />
                  )}
                </div>
              </div>

              {/* HUD: Bottom Info */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-1">
                  <Camera size={12} />
                  {item.type === "video" ? "Live Feed" : "Snapshot"}
                </div>
                <h3 className="text-xl font-bold text-white italic uppercase tracking-tighter">
                  {item.tag}
                </h3>
              </div>

              {/* Tech Scan Line Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity" />

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300 rounded-lg pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
