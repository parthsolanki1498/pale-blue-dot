import React, { useState } from 'react';
import './Background.css';
import bgImg from './assets/BWJ7H83.jpg';

const Background = () => {
  const [zoomed, setZoomed] = useState(false);

  const handleZoomToggle = () => {
    setZoomed(!zoomed);
  };

  return (
    <div className={`container ${zoomed ? 'zoomed' : ''}`}>
      <div className='background'></div>
      <div className='clickable-area' onClick={handleZoomToggle}></div>
    </div>
  );
}

export default Background;
