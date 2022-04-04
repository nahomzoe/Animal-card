import "./App.css";
import { Component } from "react";

import AnimalCard from "./Animal-Card";
import { animals } from "./animals-array";

class App extends Component {
  state = {
    animalsState: animals,
  };

  addLike(animal) {
    animal.likes = animal.likes + 1;
    this.setState({ ...this.state.animalsState, animal });
  }

  render() {
    const animalArray = this.state.animalsState;
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
              animal={animal}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
