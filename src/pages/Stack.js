import React, { useState } from "react";
import Card from "../components/card/Card";
import Navigation from '../components/navigation/Navigation'
import CardDetail from "../components/card/CardDetail";
import WebDev from "./WebDev";
import ResumeImg from '../components/Images/ResumeImg.jpg';
import code from '../components/Images/code.png'
import code1 from '../components/Images/code1.png'
import code2 from '../components/Images/code2.png'
import MoonWSPage from "./MoonWSPage";
import MoonProject from "./MoonProject";
import MoonWeather from "./MoonWeather";

const Stack = () => {
    const [activeCard, setActiveCard] = useState(null);
  
    const cards = [
      { imgSrc: ResumeImg, title: <WebDev/>, cardTitle:"Resume"},
      { imgSrc: code, title: <MoonWSPage/>, cardTitle:"This Website!" },
      { imgSrc: code1, title: <MoonProject/>, cardTitle:"MoonChallenge" },
      { imgSrc: code2, title: <MoonWeather/>, cardTitle:"MoonWeather" },
      // Aggiungi altri dati delle carte se necessario
    ];
  
    const handleCardOpen = (card) => {
      setActiveCard(card);
    };
  
    const handleCardClose = () => {
      setActiveCard(null);
    };

    return (
        <div>
          <Navigation />
          {activeCard ? (
            <CardDetail
              imgSrc={activeCard.imgSrc}
              title={activeCard.title}
              onClose={handleCardClose}
            >
              {/* Contenuto specifico del CardDetail */}
              {/* Aggiungi qui il contenuto aggiuntivo */}
            </CardDetail>
          ) : (
            <div className="flex flex-wrap">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  imgSrc={card.imgSrc}
                  title={card.title}
                  cardTitle={card.cardTitle}
                  onOpen={() => handleCardOpen(card)}
                />
              ))}
            </div>
          )}
        </div>
      );
    };

export default Stack;
