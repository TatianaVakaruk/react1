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
    let result =(this.state.isOpen===true && <Children/>)
    return(
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button onClick={this.toggleDialog} className="expand__toggle-btn">
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>
        <div className="expand__content">{result}
        </div>
  </div>
    )}
}
export default Expand;