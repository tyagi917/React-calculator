import React from "react";
import "./App.css";
import CalcDisplay from "./CalcDisplay.js";
import Keypad from "./keypad.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      disp: "",
    };
  }

  buttonClicked = pressed => {
    if (pressed === "AC") {
      this.clear();
    } else if (pressed === "DEL") {
      this.backspace();
    } else if (pressed === "=") {
      this.calc();
    } else {
      this.setState({
        disp: this.state.disp + pressed,
      });
    }
  };

  clear = () => {
    this.setState({
      disp: "",
    });
  };

  backspace = () => {
    this.setState({
      disp: this.state.disp.slice(0, -1),
    });
  };

  calc = () => {
    try {
      this.setState({
        disp: eval(this.state.disp),
      });
    } catch (e) {
      this.setState({
        disp: "error, press 'AC'",
      });
    }
  };

  render() {
    return (
      <div className="outer-container">
        <div className="App">
          <div className="calc-body">
            <CalcDisplay disp={this.state.disp}></CalcDisplay>
            <Keypad buttonClicked={this.buttonClicked}></Keypad>
          </div>
          <h1>Kanishk's Calculator</h1>
        </div>
      </div>
    );
  }
}

export default App;