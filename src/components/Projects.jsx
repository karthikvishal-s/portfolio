import React, { useEffect, useState } from 'react';
function Projects() {

    const [loaded, setLoaded] = useState(false);
    
      useEffect(() => {
        setLoaded(true);
      }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige to-white flex flex-col items-center p-10">
             <div className={`text-7xl text-bold font-visoria text-tealgreen transition-all duration-[1500ms] delay-[300ms] ease-out  ${loaded ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-20 opacity-0'}`}>
             My Projects</div>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full h-full  max-w-8xl max-h-9xl">
        
        {/* Project Card 1 */}
        <div className={`bg-white rounded-2xl shadow-lg p-20 border-gray-700 transition-all duration-[1500ms] delay-[800ms] ease-out  ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}>
          <h2 className="text-3xl font-NewElegance mb-4 text-royal-red">SportsHub - <span className='text-2xl text-blacky'>A FrontEnd Application</span></h2><br></br>
          <p className="text-lg text-gray-700">
            A Front-End website created using HTML, CSS, and JavaScript, and hosted with Electron.
            It's a multi-page application featuring details about famous sportspersons across various sports.
            We also implemented real-time countdowns for upcoming major events, individual stats,
            and sportsperson comparisons.
          </p>
          
        </div>

        {/* Project Card 2 */}
        <div className={`bg-white rounded-2xl shadow-lg p-20 border-gray-700 transition-all duration-[1500ms] delay-[1300ms] ease-out  ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}>
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

        {/* Project Card 3 */}
        <div className={`bg-white rounded-2xl shadow-lg p-20 border-gray-700 transition-all duration-[1500ms] delay-[1800ms] ease-out  ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}>
          <h2 className="text-3xl font-NewElegance mb-4 text-royal-purple">DocHelp -<span className='text-2xl text-blacky'> A FullStack Application</span></h2><br></br>
          <p className="text-lg text-gray-700">
            A full-stack application built using the MERN stack and hosted on Vercel.
            Designed to help doctors efficiently manage patient data in an orthopedic clinic.
            Each patient's prescription receipt is printed while securely storing all data in MongoDB.
            (Work in progress.)
          </p>
          
        </div>

        {/* Project Card 4 */}
        <div className={`bg-white rounded-2xl shadow-lg p-20 border-gray-700 transition-all duration-[1500ms] delay-[2300ms] ease-out  ${loaded ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}>
          <h2 className="text-3xl font-NewElegance mb-4 text-royal-gold">Portfolio -<span className='text-2xl text-blacky'>A FrontEnd Application</span></h2><br></br>
          <p className="text-lg text-gray-700">
            A personal portfolio website built using React and TailwindCSS,
            showcasing various animations and transformations. 
            Enhanced with multiple React extensions for better interactivity. 
            Hosted on Vercel.
          </p>
          <a className="mt-4 px-6 py-3 bg-royal-gold text-white font-semibold rounded-full flex items-center gap-2 transition-transform transition-colors duration-200 hover:scale-105 hover:brightness-110">
            View Project <span>➔</span>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Projects;
