import React from 'react';
// If you want to display an existing PDF
import resumePDF from '/Resume-1.pdf';

const Resume = () => {
  return (
    <div className="resume-container bg-white">
      
      {/* Option 1: Display the PDF using an iframe or object tag */}
      <object
        data={resumePDF}
        type="application/pdf"
        width="100%"
        height="1500"

      >
        <p>Your browser doesn't support PDF viewing. <a href={resumePDF}>Download Resume</a></p>
      </object>
    </div>
  );
};

export default Resume;