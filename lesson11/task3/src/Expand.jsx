import React from 'react';

class Expand extends React.Component{ 
  render(){   
    return(
        <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button onClick={()=>{ this.props.toggleDialog(this.state.isOpen)}} className="expand__toggle-btn">
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>
        <div className="expand__content">{this.props.children}
        </div>
  </div>
    )}
}
export default Expand;