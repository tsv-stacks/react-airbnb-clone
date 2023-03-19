import "./App.css";
import React from "react";
import cardData from './assets/card-images/data.jsx'
import Card from "./components/card";

function App() {
  const cardApp = cardData.map(card => {
    return (<Card
      key={card.id}
      card={card}
    />)
  })
  return (
    <section className="cards-list">
      {cardApp}
    </section>
  )
}

export default App;
