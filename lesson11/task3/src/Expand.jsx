import React from 'react';
import Children from './Children';

class Expand extends React.Component{ 
  state={
    isOpen: false,
}

toggleDialog=()=>{
 if (this.state.isOpen === false){
  this.setState({
    isOpen:true
  })
 }
 else{
  this.setState({
    isOpen:false
  })
 }
}     
   
  render(){  
    let result =(this.state.isOpen===true && <Children/>);
    let teg;
    if (this.state.isOpen){
      teg= <i className="fas fa-chevron-up"></i>
    }
    else {
      teg=<i className="fas fa-chevron-down"></i>
    }
    return(
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button onClick={this.toggleDialog} className="expand__toggle-btn">
          {teg}
          </button>
        </div>
        <div className="expand__content">{result}
        </div>
  </div>
    )}
}
export default Expand;