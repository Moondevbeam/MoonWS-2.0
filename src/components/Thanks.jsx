import React from 'react';
import ThanksBG from '../assets/images/circle-blues.webp';

const Thanks = () => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center h-128 sm:h-128 mx-auto sm:py-8"
      style={{
        backgroundImage: `url(${ThanksBG})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="py-20 flex flex-col sm:flex-row justify-center align-center items-center">
        <div className="w-full">
          <h1 className="text-3xl text-white text-center">
          Thank you for visiting my page
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
