import React from 'react';
import code from '../assets/images/cards/code.png';
import code1 from '../assets/images/cards/code1.png';
import code2 from '../assets/images/cards/code2.png';
import code3 from '../assets/images/cards/code3.png';

const CardSlider = () => {
  const cardData = [
    {
      title: 'MoonWS 2.5',
      description: 'PortFolio',
      additionalText: 'This is my upgraded and totale rebranded portfolio, also made with React, Using TailwindCSS.',
      image: code,
      backgroundColor: 'bg-blue-900',
    },
    {
      title: 'MoonChallenge',
      description: 'Coding Challenge, Arrays and JSON',
      additionalText: 'A code challenge for arrays and JSON files, Using React',
      image: code1,
      backgroundColor: 'bg-[#716ACA]',
    },
    {
      title: 'Moonweather',
      description: 'Weather Web App, made with React',
      additionalText: 'Weather Web App, using React and Openweather APIs, Also made with React',
      image: code2,
      backgroundColor: 'bg-[#426BD1]',
    },
    {
      title: 'MoonAnimeList',
      description: 'Anime Web App, using Jikan API',
      additionalText: 'Anime List Web App, React ',
      image: code3,
      backgroundColor: 'bg-[#299882]',
    },
    // Aggiungi altri oggetti per creare carte aggiuntive
  ];

  return (
    <div className="flex flex-col items-center">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`w-auto md:w-full p-6 flex ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          <div
            className={`rounded-xl shadow-lg ${card.backgroundColor}`}
          >
            <div>
              <img src={card.image} alt={card.title} className="w-72 h-auto object-cover rounded-lg rounded-b-none" />
            </div>
            <div className="py-4 px-4">
              <div className="font-bold text-xl mb-2">{card.title}</div>
              <p className="text-gray-200 text-base">{card.description}</p>
            </div>
          </div>
          <div className={`flex flex-col justify-center ml-4 mr-4 hidden md:block ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
            <p className="text-lg">{card.additionalText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSlider;
