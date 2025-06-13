import React, { useEffect, useState } from 'react';
import ProfileCard from '../ProfileCard';

import { useNavigate } from 'react-router-dom';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaTerminal
} from "react-icons/fa";
import {
  SiFirebase, SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiPython, SiCplusplus, SiC
} from "react-icons/si";

import { motion } from "framer-motion";

function About() {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-beige flex flex-col items-center p-4 relative"> {/* Added p-4 and relative */}
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 bg-tealgreen cursor-pointer text-white px-4 py-2 rounded-full shadow-md hover:bg-green-100 transition-all duration-300 z-10 transition-all duration-[1500ms] delay-[600ms] ease-out text-center" // Added z-10
      >
        ←
      </button>

  
<ProfileCard
  name="Karthik Vishal"
  title="Full Stack Developer"
  handle="kaarthikkkkkk"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/path/to/avatar.jpg"
  showUserInfo={true}
  enableTilt={true}
  onContactClick={() => console.log('Contact clicked')}
/>

      {/* Main Content Area */}
      <div className="w-full max-w-6xl mt-16 md:mt-24"> {/* Adjusted margin-top for button clearance */}

        {/* Introduction */}
        <div
          className={`transition-all duration-[1500ms] delay-[600ms] ease-out text-center mb-8 ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}
        >
          <p className="text-4xl md:text-6xl font-NewElegance">
            Hi, I am <span className="text-tealgreen">Karthik</span>
          </p>
        </div>

        {/* Description */}
        <div className={`transition-all duration-[1200ms] delay-[1200ms] ease-out text-center text-royalblue px-4 ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}>
          <p className="text-base md:text-lg leading-relaxed">
            As a full-stack MERN developer, I'm dedicated to transforming real-world challenges into effective digital solutions. My approach balances technical expertise with genuine problem-solving, creating applications that serve meaningful purposes. I value clean code, intuitive user experiences, and building technology that makes a positive difference in how people interact with software.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 md:mt-20 relative px-4 md:px-10"> {/* Adjusted top margin and padding */}
          <div className={`border-l-2 border-tealgreen pl-6 md:ml-10 transition-all duration-[1200ms] delay-[1600ms] ease-out ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}>
            <div className="mb-10 relative">
              <div className="absolute -left-4 top-0 w-3 h-3 bg-tealgreen rounded-full"></div>
              <h3 className="text-xl md:text-2xl font-semibold text-tealgreen">2022 - Started Coding</h3>
              <p className="text-gray-700 text-sm md:text-base">Wrote my first lines of C++ and Python.</p>
            </div>
            <div className="mb-10 relative">
              <div className="absolute -left-4 top-0 w-3 h-3 bg-tealgreen rounded-full"></div>
              <h3 className="text-xl md:text-2xl font-semibold text-tealgreen">2023 - Learned FrontEnd Developing</h3>
              <p className="text-gray-700 text-sm md:text-base">Built front-end websites with HTML, CSS, JavaScript, and Express.js</p>
            </div>
            <div className="mb-10 relative">
              <div className="absolute -left-4 top-0 w-3 h-3 bg-tealgreen rounded-full"></div>
              <h3 className="text-xl md:text-2xl font-semibold text-tealgreen">2024 - Learned MERN Stack</h3>
              <p className="text-gray-700 text-sm md:text-base">Developed Full-Stack Applications solving Global Concerns</p>
            </div>
            <div className="mb-10 relative">
              <div className="absolute -left-4 top-0 w-3 h-3 bg-tealgreen rounded-full"></div>
              <h3 className="text-xl md:text-2xl font-semibold text-tealgreen">2025 - Ready for Internships</h3>
              <p className="text-gray-700 text-sm md:text-base">Preparing for internships and industry placements while working on projects.</p>
            </div>
          </div>
        </div>

        {/* Skills/Icons Section */}
        <div className={`flex flex-wrap justify-center gap-10 p-10 mt-16 md:mt-20 duration-[1500ms] delay-[2000ms] ease-out text-center ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
            <motion.div whileHover={{ scale: 1.5, rotate: 15 }}><SiPython className="text-8xl text-tealgreen" /></motion.div>
            <motion.div whileHover={{ scale: 1.5, rotate: 15 }}><SiCplusplus className="text-8xl text-tealgreen" /></motion.div>
            <motion.div whileHover={{ scale: 1.5, rotate: 15 }}><SiC className="text-8xl text-tealgreen" /></motion.div>
            <motion.div whileHover={{ scale: 1.5, rotate: 15 }}><FaTerminal className="text-8xl text-tealgreen" /></motion.div>
            <motion.div whileHover={{ scale: 1.5, rotate: 15 }}><FaHtml5 className="text-8xl text-tealgreen" /></motion.div>
            <motion.div whileHover={{ scale: 1.5, rotate: 15 }}><FaCss3Alt className="text-8xl text-tealgreen" /></motion.div>
            <motion.div whileHover={{ scale: 1.5, rotate: 15 }}><FaJsSquare className="text-8xl text-tealgreen" /></motion.div>
            <motion.div whileHover={{ scale: 1.5, rotate: 15 }}><FaReact className="text-8xl text-tealgreen" /></motion.div>
            <motion.div whileHover={{ scale: 1.5, rotate: 15 }}><SiExpress className="text-8xl text-tealgreen" /></motion.div>
            <motion.div whileHover={{ scale: 1.5, rotate: 15 }}><FaNodeJs className="text-8xl text-tealgreen" /></motion.div>
            <motion.div whileHover={{ scale: 1.5, rotate: 15 }}><SiFirebase className="text-8xl text-tealgreen" /></motion.div>
            <motion.div whileHover={{ scale: 1.5, rotate: 15 }}><SiMongodb className="text-8xl text-tealgreen" /></motion.div>
            <motion.div whileHover={{ scale: 1.5, rotate: 15 }}><SiTailwindcss className="text-8xl text-tealgreen" /></motion.div>
            <motion.div whileHover={{ scale: 1.5, rotate: 15 }}><FaGithub className="text-8xl text-tealgreen" /></motion.div>
            <motion.div whileHover={{ scale: 1.5, rotate: 15 }}><SiNextdotjs className="text-8xl text-tealgreen" /></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;