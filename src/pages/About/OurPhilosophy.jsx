import React from 'react';
import './OurPhilosophy.css';
import LittleFrankie from '../../assets/LittleFrankie.mp4';

export default function OurPhilosophy() {
  return (
    <div className="ourPhilosophySection">
      <div className="crop-container aspect-ratio-16x9">
        <video className='LittleFrankie' src={LittleFrankie} autoPlay loop muted />
      </div>
      <div className="philosophy-text">
        <h3>Our Philosophy:</h3>
        <p>
          Our philosophy is rooted in the belief that every project is an opportunity to create something extraordinary and unique. Just like Dr. Frankenstein brought life to his creature, we breathe life into your brand, injecting it with personality, flair, and a dash of unconventional brilliance. We embrace the idea of pushing boundaries, defying norms, and unleashing the full potential of design to craft visual experiences that captivate and astound.
        </p>
      </div>
    </div>
  );
}
