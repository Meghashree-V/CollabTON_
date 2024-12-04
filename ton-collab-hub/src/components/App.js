// src/components/App.js
import React from 'react';
import logo from '../assets/images/logo.png'; // Fixed path to be relative to 'src/components'
import ConnectWallet from './ConnectWallet';
import ExploreProjects from './ExploreProjects';
import UploadProjects from './UploadProjects';
import HomePage from './HomePage';
import SolveIssues from './SolveIssues'; // Fixed typo in the line (if 'SolveIssues' is correct; no other issue spotted)
import './App.css';



function App() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: 'transparent', color: 'white' }}>
        <div style={{ fontSize: '20px' }}>
          <img src="logo.png" alt="Logo" style={{ height: '40px' }} />
        </div>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
            <li><a href="#upload-projects" style={{ color: 'white' }}>Upload Projects</a></li>
            <li><a href="#explore-projects" style={{ color: 'white' }}>Explore Projects</a></li>
            <li><a href="#solve-issues" style={{ color: 'white' }}>Solve Issues</a></li>
          </ul>
        </nav>
        <div>
          <ConnectWallet /> {/* Changed from WalletButton to ConnectWallet */}
        </div>
      </div>

      <div id="upload-projects">
        <UploadProjects />
      </div>
      <div id="explore-projects">
        <ExploreProjects />
      </div>
      <div id="solve-issues">
        <SolveIssues />
      </div>
    </div>
  );
}

export default App;