import React from 'react';
import backgroundImage from './wallpaper.jpg';

const BlurBackground = () => (
  <div
    className='Background'
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className='BlurBackground'></div>
  </div>
);

export default BlurBackground;
