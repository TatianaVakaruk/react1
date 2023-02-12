import React, { Component } from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0,

        };
        this.decrease= this.decrease.bind(this);
    }
    decrease(){
        this.setState({
           counter:this.state.counter - 1
        })
    }
    increase = ()=>{
        this.setState({
            counter:this.state.counter + 1
         })
    }
    reset(){
        this.setState({
            counter:0
         })
    }
    render(){
        return(
        <div className="counter">
  <button onClick = {this.decrease} className="counter__button">-</button>
  <span className="counter__value"
   onClick ={()=>{this.reset()}}
   >
    {this.state.counter}
    </span>
  <button onClick={this.increase} className="counter__button">+</button>
</div>
);
    }
}
export default Counter;