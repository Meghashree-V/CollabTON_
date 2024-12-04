import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to TonCollab Hub</h1>
      <div className="home-options">
        <Link to="/upload">
          <button>Upload Projects</button>
        </Link>
        <Link to="/explore">
          <button>Explore Projects</button>
        </Link>
        <Link to="/solve">
          <button>Solve Issues</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

