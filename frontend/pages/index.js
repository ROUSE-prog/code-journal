// pages/index.js
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the SplashScreen component, disabling SSR
const SplashScreen = dynamic(() => import('../components/SplashScreen'), {
  ssr: false,
});

const Home = () => {
  return (
    <div>
      <SplashScreen />
    </div>
  );
};

export default Home;
