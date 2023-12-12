import React, { useState } from 'react';
import './Background.css';
import bgImg from './assets/BWJ7H83.jpg';

import paleBlueDotSpeech from './assets/pale_blue_dot_speech.mp3';

import PaleBlueDotSpeechAnimation from './PaleBlueDotSpeechAnimation';

const Background = () => {
  const [zoomed, setZoomed] = useState(false);

  const handleZoomToggle = () => {
    if (!zoomed) {
      // new Audio(paleBlueDotSpeech).play();
      setZoomed(!zoomed);
    }
    if (zoomed) {
      console.log('Show world yes');
    }
  };

  return (
    <div className={`container ${zoomed ? 'zoomed' : ''}`}>
      <div className='background'></div>
      <div className='clickable-area' onClick={handleZoomToggle}></div>
      {zoomed && <PaleBlueDotSpeechAnimation />}
    </div>
  );
}

export default Background;
