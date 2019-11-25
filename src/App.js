import React from 'react';
import logo from './logo.svg';
import './App.css';
import britishPound from './britishPound.js';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      americanDollar: 1,
    }
    this.incrementByOne = this.incrementByOne.bind(this)
    this.multiplyFunction = this.multiplyFunction.bind(this)
  }
  incrementByOne(){
    this.setState({
      americanDollar: this.state.americanDollar +1
    })
  }
  multiplyFunction = () => {
    this.setState({
      counter2: this.state.britishPound *6.94
    })
  }


  render () {
    var britishPound = 5;
    return (
      <div className="moneyValue">
        <p> American Dollar is: {this.state.americanDollar} </p>
        <button onClick={this.incrementByOne}> add 1</button>
        <p> British Pound is <britishPound  /> </p>
        <button onClick={this.multiplyFunction}> add2 </button>
      </div>
    );
  };
}

export default App;
