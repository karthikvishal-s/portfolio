import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from "framer-motion"; // make sure this is imported too!



function HomePage() {
    const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setLoaded(true);
  }, []);


  return (
    <div className="min-h-screen bg-beige flex flex-col justify-center items-center">
      <br></br><br></br><br></br>
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>
    <br></br><br></br>
   
    
      <h1
      className={`font-visoria text-tealgreen text-9xl font-bold text-center transition-all duration-[3000ms] ease-out ${loaded ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}
    >
      Portfolio
    </h1>
    <br></br><br></br> <br></br><br></br>
    <Link to="/resume" className={`font-NewElegance  hover:-translate-y-1 hover:bg-indigo-500 hover:scale-150 text-2xl text-center transition-all delay-[1000ms] duration-[1700ms] ease-out  ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
    Resume
     </Link>
    <br></br>
    <Link to="/about" className={`font-NewElegance  hover:-translate-y-1 hover:scale-150 text-2xl text-center transition-all delay-[1300ms] duration-[1700ms] ease-out  ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
     About 
     </Link>
     <br></br>
     <Link to="/projects" className={`font-NewElegance  hover:-translate-y-1 hover:bg-indigo-500 hover:scale-150 text-2xl text-center transition-all delay-[1600ms] duration-[1700ms] ease-out  ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
     Projects
     </Link>
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>
    <br></br>
    <div>
        {/* Here we i want those links for gihub,linkedin,mailto*/}
    </div>
    <div className="flex gap-14 justify-center items-center mt-10">
  {/* GitHub */}
  <div className={`font-NewElegance  hover:-translate-y-1 hover:bg-indigo-500 hover:scale-150 text-2xl text-center transition-all delay-[1800ms] duration-[1700ms] ease-out  ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
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
  
  <div className={`font-NewElegance  hover:-translate-y-1 hover:bg-indigo-500 hover:scale-150 text-2xl text-center transition-all delay-[2000ms] duration-[1700ms] ease-out  ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
  {/* LinkedIn */}
  <motion.a 
    href="https://linkedin.com/in/karthik-vishal-s-851921287" 
    target="_blank" 
    rel="noopener noreferrer" 
    whileHover={{ scale: 1.5, rotate: 10 }}
    className="text-tealgreen">
    <FaLinkedin className="text-5xl" />
  </motion.a>
  </div>
  
  <div className={`font-NewElegance  hover:-translate-y-1 hover:bg-indigo-500 hover:scale-150 text-2xl text-center transition-all delay-[2200ms] duration-[1700ms] ease-out  ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
  {/* Email */}
  <motion.a 
    href="mailto:karthikvishal1506@gmail.com.com" 
    whileHover={{ scale: 1.5, rotate: -10 }}
    className="text-tealgreen">
    <FaEnvelope className="text-5xl" />
  </motion.a>
</div>

</div>
    </div>
  );
}

export default HomePage;
