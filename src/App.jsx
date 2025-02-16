import "./buttons.scss";
import "./crud.scss";
import rand from "./Components/rand";
import randIdentifier from "./Components/randIdentifier";
import * as D from "./Components/default";
import Sheep from "./Components/Sheep";
import Cow from "./Components/Cow";

import { useState, useEffect } from "react";

export default function App() {
  const [animalCount, setAnimalCount] = useState({});
  const [animals, setAnimals] = useState(D.defaultAnimals);

  const handleAnimalCount = () => {
    setAnimalCount((a) => ({ ...a, karves: rand(5, 20), avys: rand(5, 20) }));
  };
  const releaseAnimals = () => {
    localStorage.removeItem("animals");
    setAnimals(D.defaultAnimals);
  };
  const handleCow = (i) => {
    let movingAnimal = animals.karves[i];

    setAnimals((prevAnimals) => {
      const updatedAnimals = {
        ...prevAnimals,
        karves: prevAnimals.karves.filter(
          (karve) => karve.id !== movingAnimal.id
        ),
        avys: [...prevAnimals.avys, movingAnimal],
      };
      localStorage.setItem("animals", JSON.stringify(updatedAnimals));

      return updatedAnimals;
    });
  };
  const handleSheep = (i) => {
    let movingAnimal = animals.avys[i];

    setAnimals((prevAnimals) => {
      const updatedAnimals = {
        ...prevAnimals,
        avys: prevAnimals.avys.filter((avis) => avis.id !== movingAnimal.id),
        karves: [...prevAnimals.karves, movingAnimal],
      };
      localStorage.setItem("animals", JSON.stringify(updatedAnimals));

      return updatedAnimals;
    });
  };

  //on page render i get data from local storage and set animals state with data if local storage is empty nothing happens
  useEffect((_) => {
    const storedAnimals = localStorage.getItem("animals");
    if (storedAnimals) {
      try {
        const parsedAnimals = JSON.parse(storedAnimals);
        setAnimals(parsedAnimals);
      } catch (error) {
        console.error("Error parsing animals from localStorage:", error);
      }
    }
  }, []);

  //when button is clicked it generates number counts, that triggers useEffect, which generates animal objects those animal objects are created and placed in local storage and also used to set animal state.
  //*on reload these objects are overwritten from local storage */
  //on reload animal count is initialized which counts as change in state which triggers the useEffect, therefore we are checking if animalCount is true or false if it doesnt exist the useEffect doesnt work
  useEffect(
    (_) => {
      if (!animalCount.karves && !animalCount.avys) return;
      let karves = [];
      let avys = [];
      for (let i = 0; i < animalCount.karves; i++) {
        karves.push({
          id: randIdentifier("K"),
          type: "cow",
          style: "cow",
        });
      }
      for (let i = 0; i < animalCount.avys; i++) {
        avys.push({
          id: randIdentifier("A"),
          type: "sheep",
          style: "sheep",
        });
      }
      console.log(karves, "karves");
      console.log(avys, "avys");
      localStorage.setItem(
        "animals",
        JSON.stringify({ karves: karves, avys: avys })
      );
      setAnimals({ karves: karves, avys: avys });
    },
    [animalCount]
  );

  return (
    <div className="App">
      <div className="farm">
        <h1>Ganykla</h1>
        <div className="header">
          <button className="red" onClick={handleAnimalCount}>
            Į ganyklą
          </button>
          <button className="red" onClick={releaseAnimals}>
            Į laukus
          </button>
        </div>
        <div className="ganykla">
          <div className="col-4 cows pen">
            {animals.karves.length !== 0 &&
              animals.karves.map((karve, index) => (
                <Cow karve={karve} index={index} handleCow={handleCow} />
              ))}
          </div>
          <div className="col-4 pen">
            {animals.avys.length !== 0 &&
              animals.avys.map((avis, index) => (
                <Sheep avis={avis} index={index} handleSheep={handleSheep} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
