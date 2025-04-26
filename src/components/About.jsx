import React, { useEffect, useState } from 'react';
import vkPic from "../assets/vk_pic.jpeg";
import { 
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaTerminal 
  } from "react-icons/fa";
  import { 
    SiFirebase, SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiPython, SiCplusplus, SiC 
  } from "react-icons/si";
  

import { motion } from "framer-motion";

function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-beige flex">
      {/* Left Side */}
      <div
        className={`w-80 h-90 bg-blend-overlay bg-center bg-cover mt-0  transition delay-[500ms] duration-[1500ms] ease-in-out hover:-translate-y-1 hover:scale-110 ${loaded ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0'}`}
        style={{
          backgroundImage: `linear-gradient(rgba(249, 249, 95, 0.5), rgba(240, 222, 103, 0.5)), url(${vkPic})`,
          width:"20%"
        }}
      ></div>

      {/* Right Side */}
      <div className=" flex flex-col "
      style={{width:"80%"}}>
        <div
          className={`transition-all duration-[1500ms] delay-[1600ms] ease-out  ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}
            style={{height:"10%"}}
        >
          <p className="text-6xl mt-10 mb-11 font-NewElegance ">&nbsp;&nbsp; Hi , I am <span className="text-tealgreen">Karthik</span> </p>
          </div><div style={{height:"10%"}}>
          <p className={`transition-all duration-[1200ms] delay-[2000ms] ease-out ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; As a full-stack MERN developer, I'm dedicated to transforming real-world challenges into effective digital solutions. My approach balances technical expertise <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with genuine problem-solving, creating applications that serve meaningful purposes. I value clean code, intuitive user experiences, and building technology<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; that makes a positive difference in how people interact with software.
          </p></div><div></div>
          <div style={{width:"20%"}}></div>
          <div className="mt-20 relative" style={{height:"30%"}}>
        
        <div className={`border-l-2 border-tealgreen pl-6 ml-10 transition-all duration-[1200ms] delay-[2600ms] ease-out ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}>
          <div className="mb-10 relative">
            <div className="absolute -left-4 top-0 w-3 h-3 bg-tealgreen rounded-full"></div>
            <h3 className="text-2xl font-semibold text-tealgreen">2022 - Started Coding </h3>
            <p className="text-gray-700">Wrote my first lines of C++ and Python.</p>
          </div>
          <div className="mb-10 relative">
            <div className="absolute -left-4 top-0 w-3 h-3 bg-tealgreen rounded-full"></div>
            <h3 className="text-2xl font-semibold text-tealgreen">2023 - Learned FrontEnd Developing </h3>
            <p className="text-gray-700">Built front-end websites with HTML, CSS, JavaScript and Express.js</p>
          </div>
          <div className="mb-10 relative">
            <div className="absolute -left-4 top-0 w-3 h-3 bg-tealgreen rounded-full"></div>
            <h3 className="text-2xl font-semibold text-tealgreen">2024 - Learned MERN Stack </h3>
            <p className="text-gray-700">Developed Full-Stack Applications solving Global Concerns</p>
          </div>
          <div className="mb-10 relative">
            <div className="absolute -left-4 top-0 w-3 h-3 bg-tealgreen rounded-full"></div>
            <h3 className="text-2xl font-semibold text-tealgreen">2025 - Ready for Internships </h3>
            <p className="text-gray-700">Preparing for internships and industry placements while working on projects.</p>
          </div>
       
      </div>
      {/* Timeline End */}

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
         
          
          <div className={`flex flex-wrap justify-center gap-10 p-10 duration-[1500ms] delay-[3000ms] ease-out text-center ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}
          style={{gap:"130px", padding:"0px",height:"30%",width:"100%"
          }}
          >

<div >
  {/* Python */}
  <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
    <SiPython className="text-8xl text-tealgreen " />
  </motion.div>

  {/* C++ */}
  <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
    <SiCplusplus className="text-8xl text-tealgreen" />
  </motion.div>

  {/* C */}
  <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
    <SiC className="text-8xl text-tealgreen" />
  </motion.div></div>

  {/* Java 
  <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
    <SiJava className="text-8xl text-red-500" />
  </motion.div>*/}
<div>
  {/* Shell Scripting */}
  <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
    <FaTerminal className="text-8xl text-tealgreen" />
  </motion.div>

  {/* HTML5 */}
  <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
    <FaHtml5 className="text-8xl text-tealgreen" />
  </motion.div>

  {/* CSS3 */}
  <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
    <FaCss3Alt className="text-8xl text-tealgreen" />
  </motion.div>
  </div>
  <div>
  {/* JavaScript */}
  <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
    <FaJsSquare className="text-8xl text-tealgreen" />
  </motion.div>

  {/* React */}
  <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
    <FaReact className="text-8xl text-tealgreen" />
  </motion.div>

  {/* Express.js */}
  <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
    <SiExpress className="text-8xl text-tealgreen" />
  </motion.div>
  </div>
  <div>
  {/* Node.js */}
  <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
    <FaNodeJs className="text-8xl text-tealgreen" />
  </motion.div>
  
  {/* Firebase */}
  <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
    <SiFirebase className="text-8xl text-tealgreen" />
  </motion.div>

  {/* MongoDB */}
  <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
    <SiMongodb className="text-8xl text-tealgreen" />
  </motion.div>
  </div>
  <div>
  {/* TailwindCSS */}
  <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
    <SiTailwindcss className="text-8xl text-tealgreen" />
  </motion.div>

  {/* GitHub */}
  <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
    <FaGithub className="text-8xl text-tealgreen" />
  </motion.div>

  {/* Next.js */}
  <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
    <SiNextdotjs className="text-8xl text-tealgreen" />
  </motion.div>
  </div>
</div>

        </div>
      </div>
    
  );
}

export default About;
