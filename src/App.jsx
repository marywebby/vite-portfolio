import React from 'react';
import StarrySky from './components/StarrySky';
import Body from './components/Body';
import './App.css';
import './css/tailwind.css';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className='background: radial-gradient(600px at 966px 268px, rgba(29, 78, 216, 0.15), transparent 80%)'>
      <StarrySky />
      <div>
        <Body />
        <div>
          <Analytics />
        </div>
      </div>
    </div>
  );
}

export default App;
