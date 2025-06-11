import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Projects() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-beige flex flex-col items-center p-10">

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className=" text-2xl absolute top-4 left-4 cursor-pointer text-white px-4 py-2 rounded-full shadow-md hover:bg-green-100 transition-all duration-300 z-10 transition-all duration-[1500ms] delay-[600ms] ease-out text-center" // Added z-10
      >
        ←
      </button>

      <div className={`text-7xl text-bold font-visoria text-tealgreen transition-all duration-[1500ms] delay-[300ms] ease-out  ${loaded ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-20 opacity-0'}`}>
        My Projects</div>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full h-full  max-w-8xl max-h-9xl">


      {/* trr */}
      <div className={`bg-white rounded-2xl shadow-lg p-20 border-gray-700 transition-all duration-[1500ms] delay-[800ms] ease-out  ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}>
          <h2 className="text-3xl font-NewElegance mb-4"><span className='text-red'>The Raven's Roost</span>-<span className='text-2xl'>A FullStack Application</span></h2><br></br>
          <p className="text-lg text-gray-700 ">
          <b>A GoT-themed Twitter clone</b><br></br>
          TRR is a fully functional full stack web application built using Next.js,React.js, Mongodb,Express.js, Node.js,TailwindCSS and manymore stacks.The primary was to construct a complete social media app,starting from Authentications and JWT strategies to Deploying it in Vercel.google OAuth was used for authentication and Google is chosen as the provider.After 25 endless nights of work ,I present you <span className='font-bold text-2xl'>"The Raven's Roost"</span>
          </p>
          <a href="https://github.com/karthikvishal-s/Nexus" className="mt-4 px-6 py-3 bg-red text-white font-semibold rounded-full flex items-center gap-2 transition-transform transition-colors duration-200 hover:scale-105 hover:brightness-110">
            View Source <span>➔</span>
          </a>
          <a href="https://varys.vercel.app/" target='_blank' rel='noopener noreferrer' className="mt-4 px-6 py-3 bg-red text-white font-semibold rounded-full flex items-center gap-2 transition-transform transition-colors duration-200 hover:scale-105 hover:brightness-110">
            Live site <span>➔</span>
          </a>
        </div>


        {/* Pensieve */}
        <div className={`bg-white rounded-2xl shadow-lg p-20 border-gray-700 transition-all duration-[1500ms] delay-[800ms] ease-out  ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}>
          <h2 className="text-3xl font-NewElegance mb-4 text-royal-gold">PenSieve -<span className='text-2xl text-blacky'>A FullStack Application</span></h2><br></br>
          <p className="text-lg text-gray-700 ">
          <b>A Public Book Repository for Enthusiasts</b><br></br>
          A full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows book lovers to store, organize, and share links to their favorite books. The UI is styled using TailwindCSS for a clean and responsive experience. Designed to be community-driven, this platform enables users to contribute, discover, and interact with curated book collections.
          </p>
          <a href="https://github.com/karthikvishal-s/BookStore-MERN" className="mt-4 px-6 py-3 bg-royal-gold text-white font-semibold rounded-full flex items-center gap-2 transition-transform transition-colors duration-200 hover:scale-105 hover:brightness-110">
            View Source <span>➔</span>
          </a>
          <a href="https://pensieve-karthik.vercel.app/" className="mt-4 px-6 py-3 bg-royal-gold text-white font-semibold rounded-full flex items-center gap-2 transition-transform transition-colors duration-200 hover:scale-105 hover:brightness-110">
            View Site <span>➔</span>
          </a>
        </div>


        {/* SportsHub */}
        <div className={`bg-white rounded-2xl shadow-lg p-20 border-gray-700 transition-all duration-[1500ms] delay-[1300ms] ease-out  ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}>
          <h2 className="text-3xl font-NewElegance mb-4 text-royal-red">SportsHub - <span className='text-2xl text-blacky'>A FrontEnd Application</span></h2><br></br>
          <p className="text-lg text-gray-700">
            A Front-End website created using HTML, CSS, and JavaScript, and hosted with Electron.
            It's a multi-page application featuring details about famous sportspersons across various sports.
            We also implemented real-time countdowns for upcoming major events, individual stats,
            and sportsperson comparisons.
          </p>

        </div>

        {/* UnitEd */}
        <div className={`bg-white rounded-2xl shadow-lg p-20 border-gray-700 transition-all duration-[1500ms] delay-[1800ms] ease-out  ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}>
          <h2 className="text-3xl font-NewElegance mb-4 text-royal-blue">UnitEd - <span className='text-2xl text-blacky'> A FullStack Web App</span></h2><br></br>
          <p className="text-lg text-gray-700">
            A Full-Stack web application built using React (Frontend), Firebase (Backend),
            and Firestore (Database), hosted on Vercel. Created for the Mega Hackathon 2025
            under the theme of SDE Goals, this app focuses on Goal 4 (Education),
            providing a safe space for students dealing with anxiety and introversion.
          </p>
          <a href="https://github.com/karthikvishal-s/UnitEd" className="mt-4 px-6 py-3 bg-royal-blue text-whity font-semibold rounded-full flex  gap-2 transition-transform transition-colors duration-200 hover:scale-105 hover:brightness-150">
            View Project <span>➔</span>
          </a>
        </div>

        {/* DocHelp*/}
        <div className={`bg-white rounded-2xl shadow-lg p-20 border-gray-700 transition-all duration-[1500ms] delay-[2300ms] ease-out  ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}>
          <h2 className="text-3xl font-NewElegance mb-4 text-royal-purple">DocHelp -<span className='text-2xl text-blacky'> A FullStack Application</span></h2><br></br>
          <p className="text-lg text-gray-700">
            A full-stack application built using the MERN stack and hosted on Vercel.
            Designed to help doctors efficiently manage patient data in an orthopedic clinic.
            Each patient's prescription receipt is printed while securely storing all data in MongoDB.
            (Work in progress.)
          </p>

        </div>

        {/* Portfolio */}
        <div className={`bg-white rounded-2xl shadow-lg p-20 border-gray-700 transition-all duration-[1500ms] delay-[2800ms] ease-out  ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}>
          <h2 className="text-3xl font-NewElegance mb-4 text-royal-gold">Portfolio -<span className='text-2xl text-blacky'>A FrontEnd Application</span></h2><br></br>
          <p className="text-lg text-gray-700">
            A personal portfolio website built using React and TailwindCSS,
            showcasing various animations and transformations.
            Enhanced with multiple React extensions for better interactivity.
            Hosted on Vercel.
          </p>
          <a href="https://github.com/karthikvishal-s/portfolio" className="mt-4 px-6 py-3 bg-royal-gold text-white font-semibold rounded-full flex items-center gap-2 transition-transform transition-colors duration-200 hover:scale-105 hover:brightness-110">
            View Source <span>➔</span>
          </a>
          <a href="https://portfolio-karthik-18.vercel.app/" className="mt-4 px-6 py-3 bg-royal-gold text-white font-semibold rounded-full flex items-center gap-2 transition-transform transition-colors duration-200 hover:scale-105 hover:brightness-110">
            View Site <span>➔</span>
          </a>
        </div>



      </div>
    </div>
  );
}

export default Projects;
