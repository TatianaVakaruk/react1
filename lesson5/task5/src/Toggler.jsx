import React, { Component } from 'react';
let counter = 0;
class Toggler extends Component{
    constructor(props){
        super(props);
        this.state={
            toggle:'Off',
           
        };
    }
    handleClick (){
        counter++;
        if (counter % 2 === 1){
        this.setState({
        toggle:'On',
        
    })
}
if (counter % 2 === 0){
    
    this.setState({
        toggle:'Off',
        
    })
}
    }
    render(){
        return (
            <div onClick={()=>{this.handleClick()}} className="toggler">{this.state.toggle}</div>
        )
    }
    
}

export default Toggler;