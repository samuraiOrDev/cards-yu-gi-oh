

import { Card } from "./components/Card"
import { cardsData } from "./data/data"
import "./css/Card.css"

function App() {
  return (
    <>
      {
        cardsData.map((card, index) => (
          <Card
            key={index}
            start={card.start}
            type={card.type}
            name={card.name}
            image={card.image}
            description={card.description}
            attribute={card.attribute}
            attack={card.attack}
            defense={card.defense}
            typeClass={card.typeClass}
            color={card.color}
            fontSizeDescription={card.fontSizeDescription}
          />

        ))
      }
    </>
  )
}

export default App
