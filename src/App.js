import react from "react";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "mohamed hamma",
        bio: "I just love dogs",
        // imgSrc: { myImage },
        profession: "dentist",
      },
      count: 0,
      show: false,
    };
  }
  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => {
        return {
          count: Date().toLocaleString(),
        };
      });
    }, 1000);
  }
  handleShowPerson = () => {
    this.setState({
      ...this.state.Person,
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleShowPerson}>click here</button>
        {this.state.count}
        <hr />
        {this.state.show ? (
          <h1>
            {`full Name:${this.state.Person.fullName},
           
              his bio: ${this.state.Person.bio},
              and he works as ${this.state.Person.profession}`}
          </h1>
        ) : (
          "click to view person "
        )}
      </div>
    );
  }
}

export default App;
