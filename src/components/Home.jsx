import React from 'react';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Outlet /> {/* This will render HomePage or Resume depending on the route */}
    </div>
  );
}

export default Home;
