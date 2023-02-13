import React, { Component } from 'react';
const buttonCoral= document.querySelector(".picker__button.picker__button_coral");
const buttonAqua= document.querySelector(".picker__button.picker__button_aqua");
const buttonBisque= document.querySelector(".picker__button.picker__button_bisque");
class ColorPicker extends Component {
    
        constructor(props){
            super(props);
            this.state={
                toggle:'',
               
            };
        }
        setColor(){
        if (buttonCoral){
            this.setState({
                toggle:'Coral',
        })
    }
        if (buttonAqua){
            this.setState({
                toggle:'Aqua',
        })
        }
        if (buttonBisque){
            this.setState({
                toggle:'Bisque',
        })
        }
    }
    Clear(){
        this.setState({
            toggle:''
        })
    }
    render(){
        return (
            <div>
  <div className="picker__title">{this.state.toggle}</div>
  <div>
    <button onMouseEnter={()=>this.setColor()} onMouseLeave={()=>this.Clear()} className="picker__button picker__button_coral"></button>
    <button onMouseEnter={()=>this.setColor()} onMouseLeave={()=>this.Clear()} className="picker__button picker__button_aqua"></button>
    <button onMouseEnter={()=>this.setColor()} onMouseLeave={()=>this.Clear()} className="picker__button picker__button_bisque"></button>
  </div>
</div>
        )
    }
}
export default ColorPicker;