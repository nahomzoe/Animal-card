import "./App.css";
import { Component } from "react";

import AnimalCard from "./Animal-Card";
import { animals } from "./animals-array";

class App extends Component {
  state = {
    animals: animals,
    search: "",
  };

  /*addLike(animal) {
    animal.likes = animal.likes + 1;
    this.setState({ ...this.state.animals, animal });
  }*/
  addLikeHandler = (name) => {
    this.setState((state) => {
      const updatedAnimalsArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: updatedAnimalsArray,
      };
    });
    console.log(this.state);
  };

  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter((a) => a.name !== name);
    this.setState({
      animals: updatedArray,
    });
  };
  searchHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const animalArray = this.state.animals;
    const animalFilter = animalArray.filter((animal) => {
      return animal.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    return (
      <main>
        <div>
          <h1>{this.state.animals.length} Animals</h1>
          <div className="input">
            {" "}
            <input type="text" onChange={this.searchHandler} />
          </div>
        </div>
        <div className="container">
          {animalFilter.map((animal) => (
            <AnimalCard
              key={animal.name}
              name={animal.name}
              like={animal.likes}
              addLikeOnClick={this.addLikeHandler.bind(this, animal.name)}
              remove={this.removeHandler.bind(this, animal.name)}
              //remove={() => this.removeHandler(animal.name)}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
