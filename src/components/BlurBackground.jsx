import React from 'react';
import backgroundImage from '../wallpaper.jpg';

const BlurBackground = () => (
  <div
    className="Blur-background"
    style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  ></div>
);

export default BlurBackground;
