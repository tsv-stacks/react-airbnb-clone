import "./App.css";
import React from "react";
import cardData from './assets/card-images/data.jsx'
import Card from "./components/card";

function App() {
  console.log(cardData);
  const cardApp = cardData.map(card => {
    console.log(card.coverImg);
    return (<Card
      img={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      title={card.title}
      price={card.price}
    />)
  })
  console.log(cardApp);
  return cardApp;
}

export default App;
