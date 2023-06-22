import React from 'react';
import Hex from '../assets/images/circle-blues.png';

const PatternHex = () => {
  return (
    <div
      className=" mb-20 flex flex-col justify-center items-center bg-cover bg-center h-128 sm:h-128 mx-auto my-8 p-4 sm:py-8"
      style={{
        backgroundImage: `url(${Hex})`,
        backgroundSize: 'cover',
      }}
    >
        <div className='py-20'>
        <h1 className="text-xl sm:text-2xl text-white text-center">This is something</h1>
      <h2 className="text-2xl sm:text-4xl text-white font-bold mb-5 mt-5 text-center">Example</h2>
      <h3 className="text-base sm:text-lg text-white text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Voluptatum odit, doloribus perspiciatis nobis officia minima itaque expedita, assumenda consectetur, non ea voluptate! <br /> 
      Facilis, officia consectetur! Amet aperiam debitis quasi itaque?</h3>   
        </div>

    </div>
  );
};

export default PatternHex;
