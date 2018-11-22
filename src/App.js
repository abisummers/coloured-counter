import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    colour: "green"
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Hello World</h1>

        <Counter colour={this.state.colour} />
        <Counter colour={this.state.colour === "red" ? "green" : "red"} />
        <button
          onClick={event => {
            this.setState(state => {
              return { colour: state.colour === "green" ? "red" : "green" };
            });
          }}
        >
          Change Colour
        </button>
      </div>
    );
  }
}

export default App;
