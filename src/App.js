import "./App.css";
import { Component } from "react";

import AnimalCard from "./Animal-Card";
import { animals } from "./animals-array";

class App extends Component {
  state = {
    animals: animals,
  };

  addLike(animal) {
    animal.likes = animal.likes + 1;
    this.setState({ ...this.state.animals, animal });
  }
  removeHandler = (animal) => {
    const updatedArray = this.state.animals.filter(
      (a) => a.name !== animal.name
    );
    this.setState({
      animals: updatedArray,
    });
  };

  render() {
    const animalArray = this.state.animals;
    return (
      <main>
        <div>
          <h1>Animals</h1>
        </div>
        <div className="container">
          {animalArray.map((animal) => (
            <AnimalCard
              key={animal.name}
              name={animal.name}
              like={animal.likes}
              addLikeOnClick={this.addLike.bind(this)}
              remove={this.removeHandler.bind(this)}
              animal={animal}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
