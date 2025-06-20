import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from "framer-motion";
import Orb from './Orb';

function HomePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-beige flex flex-col justify-center items-center p-6 sm:p-12 relative overflow-hidden">

    

      {/* Foreground Content */}
      <div className="flex flex-col items-center w-full z-10 relative">
        <div className="mt-24 sm:mt-32">
          <h1 className={`font-visoria text-tealgreen text-6xl sm:text-9xl font-bold text-center transition-all duration-[3000ms] ease-out ${loaded ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
            Portfolio
          </h1>
        </div>

        <div className="flex flex-col items-center mt-12 space-y-8">
          <div className={`transition-all delay-[1200ms] duration-[1700ms] ease-out ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[200%]'}`}>
            <Link to="/resume" className="font-NewElegance text-2xl text-center block transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-110">
              Resume
            </Link>
          </div>

          <div className={`transition-all delay-[1700ms] duration-[1700ms] ease-out ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[200%]'}`}>
            <Link to="/about" className="font-NewElegance text-2xl text-center block transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-110">
              About
            </Link>
          </div>

          <div className={`transition-all delay-[2200ms] duration-[1700ms] ease-out ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[200%]'}`}>
            <Link to="/projects" className="font-NewElegance text-2xl text-center block transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-110">
              Projects
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-10 mt-20 sm:gap-14">
          {/* GitHub */}
          <div className={`font-NewElegance hover:-translate-y-1 hover:bg-indigo-500 hover:scale-150 text-2xl text-center transition-all delay-[2500ms] duration-[1700ms] ease-out ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <motion.a
              href="https://github.com/karthikvishal-s"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.5, rotate: 10 }}
              className="text-tealgreen"
            >
              <FaGithub className="text-5xl" />
            </motion.a>
          </div>

          {/* LinkedIn */}
          <div className={`font-NewElegance hover:-translate-y-1 hover:bg-indigo-500 hover:scale-150 text-2xl text-center transition-all delay-[2800ms] duration-[1700ms] ease-out ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <motion.a
              href="https://linkedin.com/in/karthik-vishal-s-851921287"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.5, rotate: 10 }}
              className="text-tealgreen"
            >
              <FaLinkedin className="text-5xl" />
            </motion.a>
          </div>

          {/* Email */}
          <div className={`font-NewElegance hover:-translate-y-1 hover:bg-indigo-500 hover:scale-150 text-2xl text-center transition-all delay-[3100ms] duration-[1700ms] ease-out ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <motion.a
              href="mailto:karthikvishal1506@gmail.com"
              whileHover={{ scale: 1.5, rotate: -10 }}
              className="text-tealgreen"
            >
              <FaEnvelope className="text-5xl" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
