import React, { Component } from 'react';

class Toggler extends Component{
    
    constructor(props){
        super(props);
        this.state={
            toggle:'Off',
            boolean: true
           
        };
    }
    handleClick (){
        console.log(boolean);
        if (this.state.boolean === true){
        this.setState({
        toggle:'On',
        boolean:false
        
    })
}
      if (this.state.boolean === false){
    
    
    this.setState({
        toggle:'Off',
        boolean : true
        
    })
}
    }
    render(){
        return (
            <div onClick={()=>{this.handleClick()}} className="toggler">{this.state.toggle}{this.state.boolean}</div>
        )
    }
    
}

export default Toggler;