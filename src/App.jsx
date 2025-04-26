import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import HomePage from './components/HomePage'
import Resume from './components/Resume';
import About from './components/About'
import Projects from './components/Projects';
function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomePage />}/>
          <Route path="resume" element={<Resume />} />
          <Route path="about" element={<About/>}/>
          <Route path="projects" element={<Projects/>}/>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;