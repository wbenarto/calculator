import React, { Component } from "react";
import Output from './components/Output';
import Keys from './components/Keys';
import './App.css';

class App extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     result: ''
  //   }
  // }
  state = {
    result: ''
  }
  buttonPressed = buttonName => {
    if(buttonName === "=") {
      this.calculate();
    } else
      this.setState({
      result: this.state.result + buttonName
    });

    console.log("ButtonName: "+buttonName)
    console.log('result: '+this.state.result)
  }

  calculate=()=>{
    this.setState({
      result: eval(this.state.result)
    })
  }

  render() {
    return (
      

      <div className='App'> 
        <Output result={this.state.result}/>
        <Keys buttonPressed={this.buttonPressed}/>

      </div>
    );
  }
}


export default App;
