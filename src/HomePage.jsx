import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiX } from "react-icons/fi";

// Import your image here:
import assiaImg from "./assia.png";
import bkServicesImg from"./bkservices.png";
import asiaSkinImg from "./skin.png";
import  ghardaiaHotelImg from "./ghardaia.png"
export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleWorkClick = () => setModalOpen(true);
  const handleConfirm = () => {
    setModalOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleCancel = () => setModalOpen(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && modalOpen) setModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans min-h-screen overflow-x-hidden">

      <Particles
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-70"
        options={{
          fpsLimit: 120,
          interactivity: {
            events: { 
              onHover: { 
                enable: true, 
                mode: "bubble",
                parallax: { enable: true, force: 30 }
              } 
            }
          },
          particles: {
            color: { value: ["#A855F7", "#EC4899", "#8B5CF6"] },
            links: { 
              enable: true, 
              color: "#A855F7", 
              distance: 150,
              opacity: 0.3 
            },
            move: { 
              enable: true, 
              speed: 1.5,
              outModes: "bounce" 
            },
            number: { density: { enable: true, value_area: 800 }, value: 80 },
            size: { 
              value: { min: 1, max: 3 },
              animation: {
                enable: true,
                speed: 3
              }
            },
            opacity: {
              animation: {
                enable: true,
                speed: 0.5
              }
            }
          }
        }}
      />

      {/* GLASSMORPHISM HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div 
          className="backdrop-blur-md bg-white/5 p-12 rounded-3xl shadow-2xl border border-white/10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
     <div className="relative w-32 h-32 mx-auto mb-20"> {/* big bottom margin */}
  <div className="absolute inset-0 rounded-full border-4 border-purple-500 animate-spin-slow opacity-30"></div>
  <div className="absolute inset-0 rounded-full border-t-4 border-purple-500 border-b-4 border-transparent animate-spin-fast"></div>
  <div className="absolute inset-0 rounded-full shadow-[0_0_30px_10px_rgba(168,85,247,0.3)]"></div>
  <img 
    src={assiaImg} 
    alt="Assia" 
    className="absolute inset-4 rounded-full object-cover" 
  />
</div>

<motion.h1
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="mt-20 text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6"
>
  Hi, I'm Assia
</motion.h1>


          <motion.p
            className="text-2xl text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I'm a{" "}
            <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              <Typewriter
                words={[
                  "Flutter Developer",
                  "Full-Stack Developer",
                  "AI Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.p>

          <motion.button
            onClick={handleWorkClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white text-xl font-medium group"
          >
            <span className="relative z-10">Work With Me</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 shadow-[0_0_20px_5px_rgba(168,85,247,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </motion.button>
        </motion.div>

        <motion.div 
          className="mt-16 animate-bounce"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-2 bg-purple-400 rounded-full mt-1"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* GLASS ABOUT SECTION */}
      <motion.section 
        className="py-16 px-8 my-20 max-w-4xl mx-6 md:mx-auto backdrop-blur-md bg-white/5 rounded-3xl shadow-xl border border-white/10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-8 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg border border-purple-700/20">
            <img
              src={assiaImg}
              alt="Assia"
              className="w-full h-300 object-cover rounded-2xl"
            />
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            I'm a passionate developer with a background in Information Systems.
            I create elegant, performant mobile apps and web solutions that solve
            real-world problems. Fluent with <span className="text-purple-400">Flutter</span>, <span className="text-purple-400">Firebase</span>, 
            <span className="text-purple-400"> React</span>, <span className="text-purple-400">Node.js</span>, and more. My mission is to 
            transform complex ideas into intuitive digital experiences that delight users.
          </p>
        </div>
      </motion.section>

      {/* PROJECTS WITH HOVER EFFECTS */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          My Creations
        </motion.h2>
        
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[
    {
      title: "BK Services",
      desc: "A platform connecting clients with local service providers like electricians, plumbers, and more.",
      tech: ["React", "Node.js", "Firebase"],
      color: "from-purple-500 to-pink-500",
      link: "https://bkservices-6c71d.web.app/",
      image: bkServicesImg
    },
    {
      title: "AsiaSkin Care",
      desc: "A modern e-commerce website for skincare and beauty products.",
      tech: ["React", "Tailwind CSS"],
      color: "from-rose-400 to-amber-300",
      link: "https://sakuraskincareasian.vercel.app/",
      image: asiaSkinImg
    },
    {
      title: "Ghardaïa Hotel Site",
      desc: "Responsive hotel website showcasing rooms, amenities, and booking info.",
      tech: ["React", "Tailwind CSS", "Node.js", "Firebase"],
      color: "from-emerald-500 to-teal-400",
      link: "https://ghardaia-booking.web.app/",
      image: ghardaiaHotelImg
    }
  ].map(({ title, desc, tech, color, link, image }) => (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden backdrop-blur-sm bg-white/5 rounded-xl p-6 cursor-pointer border border-white/10 hover:border-purple-500/50 transition-all duration-300"
    >
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
      <div className="relative z-10">
        <div className="h-40 mb-6 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map(t => (
            <span key={t} className="text-xs bg-black/30 text-purple-300 px-3 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full transition"
        >
          View Site
        </a>
      </div>
      <div className="absolute inset-0 shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  ))}
</div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-16 px-8 my-20 max-w-4xl mx-6 md:mx-auto backdrop-blur-md bg-white/5 rounded-3xl shadow-xl border border-white/10"
      >
        <motion.h2 
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>
        
        <motion.p 
          className="text-gray-300 mb-10 text-lg text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          Ready to bring your ideas to life? I'm currently available for freelance work and collaborations.
        </motion.p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <motion.a
            href="mailto:assiacoding@gmail.com"
            whileHover={{ y: -5 }}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white text-lg font-medium"
          >
            <FiMail className="text-xl" /> Email Me
          </motion.a>
          
          <div className="flex justify-center gap-6">
          {[
              { icon: <FiGithub />, url: "https://github.com/Assiabk", color: "hover:text-purple-400" },
              { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/assia-benkhelifa-4bb313229/", color: "hover:text-blue-400" },
              { icon: <FiInstagram />, url: "https://www.instagram.com/code_with_assia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", color: "hover:text-pink-400" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-gray-400 ${item.color} transition-colors`}
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ENHANCED MODAL */}
      {modalOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative backdrop-blur-lg bg-white/5 rounded-2xl p-8 max-w-md w-full border border-white/10 shadow-xl"
          >
            <button 
              onClick={handleCancel}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FiX size={24} />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 border border-purple-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
                Ready to start your project?
              </h3>
              <p className="text-gray-300 mb-8">
                Let's discuss how I can help bring your vision to life with cutting-edge technology.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button
                  onClick={handleConfirm}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-medium flex-1"
                >
                  Let's Build It!
                </motion.button>
                <motion.button
                  onClick={handleCancel}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-purple-500 text-purple-400 px-6 py-3 rounded-full font-medium flex-1 hover:bg-purple-900/20 transition-colors"
                >
                  Maybe Later
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* ANIMATED FOOTER */}
      <motion.footer 
        className="py-8 text-center text-gray-500 text-sm border-t border-gray-800 mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center gap-6 mb-4">
            {["🚀", "💡", "✨", "👩‍💻"].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: i * 0.3 }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
          <p>© {new Date().getFullYear()} Assia Benkhelifa. Crafted with passion and React.</p>
          <p className="mt-2 text-xs text-gray-600">Proudly pushing pixels since 2021</p>
        </div>
      </motion.footer>
    </div>
  );
}
