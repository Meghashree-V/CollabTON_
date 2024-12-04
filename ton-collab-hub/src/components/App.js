import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Router components
import logo from '../assets/images/logo.png'; // Correct logo path
import ConnectWallet from './ConnectWallet';
import ExploreProjects from './ExploreProjects';
import UploadProjects from './UploadProjects';
import HomePage from './HomePage'; // For the home route
import SolveIssues from './SolveIssues';
import './App.css';

function App() {
  return (
    <Router> {/* Router wrapper */}
      <div>
        {/* Navbar Section */}
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 50px',
            backgroundColor: 'transparent', // Transparent navbar
            position: 'absolute',
            width: '100%',
            top: 0,
            zIndex: 1000,
            color: 'white',
          }}
        >
          <div style={{ fontSize: '100px', display: 'flex', alignItems: 'center', gap: '50px' }}>
            <img src={logo} alt="Logo" style={{ height: '200px' , width:"200px" }} /> {/* Larger Logo */}
            <span></span>
          </div>
          <nav>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '30px', margin: 0 }}>
              <li>
                <Link
                  to="/"
                  style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/upload"
                  style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}
                >
                  Upload Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/explore"
                  style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}
                >
                  Explore Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/solve"
                  style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}
                >
                  Solve Issues
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <button
              style={{
                backgroundColor: '#1abc9c',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#16a085')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#1abc9c')}
            >
              <ConnectWallet />
            </button>
          </div>
        </header>

        {/* Routes */}
        <main style={{ marginTop: '100px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<UploadProjects />} />
            <Route path="/explore" element={<ExploreProjects />} />
            <Route path="/solve" element={<SolveIssues />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;