import React, { Component } from "react";
import Output from "./components/Output";
import Keys from "./components/Keys";
import "./App.css";

class App extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     result: ''
  //   }
  // }
  state = {
    result: "",
  };
  buttonPressed = (buttonName) => {
    if (buttonName === "=") {
      this.calculate();
    } else if (buttonName === 'C') {
      this.reset()
    } else if (buttonName === 'CE') {
      console.log(typeof this.state.result)
      
      this.backspace();
    } else
      this.setState({
        result: this.state.result + buttonName,
      });

     

    console.log("ButtonName: " + buttonName);
    console.log("result: " + this.state.result);
  };

  reset = () => {
    this.setState({
      result:''
    })
  }

  backspace = () => {
  
    this.setState({
      result: this.state.result.slice(0,-1)
    })
  }

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "")
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calc-body">
          {/* Navbar */}
        
          <Output result={this.state.result} />
          <Keys buttonPressed={this.buttonPressed} />
        </div>
      </div>
    );
  }
}

export default App;
