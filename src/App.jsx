import "./buttons.scss";
import "./crud.scss";
import rand from "./Components/rand";
import randIdentifier from "./Components/randIdentifier";

import Sheep from "./Components/Sheep";
import Cow from "./Components/Cow";

import { useState, useEffect } from "react";

export default function App() {
  const [animals, setAnimals] = useState([]);
  const renderAnimals = () => {
    setAnimals(
      (prevAnimals) =>
        (prevAnimals = JSON.parse(localStorage.getItem("animals")))
    );
  };
  const releaseAnimals = () => {
    localStorage.removeItem("animals");
    setAnimals([]);
  };
  const handleClick = (id) => {
    setAnimals((prevAnimals) => {
      // Find the animal
      let animalToMove = prevAnimals.find((animal) => animal.id === id);

      if (!animalToMove) return prevAnimals; // If not found, return unchanged

      // Update the pen
      let updatedAnimal = {
        ...animalToMove,
        pen: animalToMove.pen === "baa" ? "moo" : "baa",
      };

      // Remove it from the array & add it to the end
      let updatedAnimals = prevAnimals.filter((animal) => animal.id !== id);
      updatedAnimals.push(updatedAnimal);

      // Save to localStorage
      localStorage.setItem("animals", JSON.stringify(updatedAnimals));

      return updatedAnimals;
    });
  };

  useEffect((_) => {
    const storedAnimals = localStorage.getItem("animals");
    if (storedAnimals) {
      try {
        const parsedAnimals = JSON.parse(storedAnimals);
        setAnimals(parsedAnimals);
        return;
      } catch (error) {
        console.error("Error parsing animals from localStorage:", error);
      }
    }
    let farmAnimals = [];
    for (let i = 0; i < rand(5, 20); i++) {
      farmAnimals.push({
        id: randIdentifier("K"),
        pen: "moo",
        style: "cow",
      });
    }
    for (let i = 0; i < rand(5, 20); i++) {
      farmAnimals.push({
        id: randIdentifier("A"),
        pen: "baa",
        style: "sheep",
      });
    }
    localStorage.setItem("animals", JSON.stringify(farmAnimals));
  }, []);

  return (
    <div className="App">
      <div className="farm">
        <h1>Ganykla</h1>
        <div className="header">
          <button className="red" onClick={renderAnimals}>
            Į ganyklą
          </button>
          <button className="red" onClick={releaseAnimals}>
            Į laukus
          </button>
        </div>
        <div className="ganykla">
          <div className="col-4 cows pen">
            <h3>MOOOOOO</h3>
            {animals.map((animal, index) =>
              animal.pen === "moo" ? (
                <Cow key={index} animal={animal} handleClick={handleClick} />
              ) : null
            )}
          </div>
          <div className="col-4 pen">
            <h3>BAAAAAA</h3>
            {animals.map((animal, index) =>
              animal.pen === "baa" ? (
                <Sheep key={index} animal={animal} handleClick={handleClick} />
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
