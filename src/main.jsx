import React from 'react';
import ReactDOM from 'react-dom/client';
import githubMark from './assets/github-mark-white.png';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>
      <img src="cartoonnetworklogo.png" />
      <p>Memory Game</p>
    </header>
    <App />
    <footer>
      Designed by Mark Elliott{' '}
      <a href="https://github.com/Mark-Elliott5">
        <img className="github-link" src={githubMark} />
      </a>
    </footer>
  </React.StrictMode>,
);
