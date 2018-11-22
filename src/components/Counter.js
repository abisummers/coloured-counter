import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }
  render() {
    // console.log(this.props);

    let display = this.state.count;

    if (this.state.count % 15 === 0) {
      display = "fizzBuzz";
    } else if (this.state.count % 3 === 0) {
      display = "fizz";
    } else if (this.state.count % 5 === 0) {
      display = "buzz";
    }

    return (
      <div>
        <h3 style={{ color: this.props.colour }}>Counter: {display}</h3>

        <button
          onClick={event => {
            this.setState(state => {
              return { count: state.count + 1 };
            });
          }}
        >
          Increase
        </button>

        <button
          onClick={event => {
            this.setState({ count: 1 });
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
