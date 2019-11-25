import React, {Component} from 'react';

class BritishPound extends Component{
    constructor(){
        super()
        this.state = {
            britishPound: 2,
        }
        this.multiplyFunction = this.multiplyFunction.bind(this)
    }
    render () {
        return (
          <div className="moneyValue">
            <p>{this.state.britishPound } </p>
          </div>
        );
      };
}


  export default BritishPound;