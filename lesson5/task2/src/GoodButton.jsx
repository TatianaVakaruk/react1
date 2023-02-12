import React from 'react';

class GoodButton extends React.Component{
    handleClick (e){
        console.log(e.target.textContent);
        alert('Good job!');
    }
    render(){
        return (
            <button className='fancy-button' onClick= {this.handleClick}
            >
                Click Me!
                </button> 
        )
    }
}

export default GoodButton;