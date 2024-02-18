import React, { useEffect, useState } from 'react';
import Fowad from '../assets/illustrations/Fowad.jpg';

const Banner = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 780);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div id="heroBanner">
        <h1>Portfolio Fowad</h1>
        {isSmallScreen && <img id="myface" src={Fowad} alt="Fowad"></img>}
      </div>
    </div>
  );
};

export default Banner;
