import React, {useState, useEffect} from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection() {

const API = "http://localhost:3001/pokemon";
const [cardsToRender, setCardsToRender] = useState([])

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(setCardsToRender);
  }, []);





  return (
    <Card.Group itemsPerRow={6}>
      {cardsToRender.map((card) =>(
        <PokemonCard
          key = {card.id}
          name = {card.name}
          hp = {card.hp}
          image = {card.sprites.front}
        />
      ))

      }
    
    </Card.Group>
  );
}

export default PokemonCollection;
