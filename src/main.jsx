import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import './index.css';
import './css/tailwind.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// You can remove or keep reportWebVitals if necessary
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
