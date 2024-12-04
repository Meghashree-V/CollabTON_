// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( // Use the new render method for React 18
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
