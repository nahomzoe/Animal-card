import "./App.css";

import AnimalCard from "./Animal-Card";
import animals from "./animals-array";

const App = (props) => {
  /*const addLike = (animal) => {
    animal.likes = animal.likes + 1;
    setState([...animals, animal]);
  };*/

  return (
    <main>
      <div>
        <h1>Animals</h1>
      </div>
      <div className="container">
        {animals.map((animal) => (
          <AnimalCard
            key={animal.name}
            name={animal.name}
            like={animal.likes}
            /*addLike={() => addLike()}
            animal={animal}*/
          />
        ))}
      </div>
    </main>
  );
};

export default App;
