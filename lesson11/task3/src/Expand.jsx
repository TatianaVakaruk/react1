import React from 'react';

const Expand = (props)=>{
    
    return(
        <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{props.title}</span>
          <button onClick={ () => { this.props.hideDialog(this.state.isOpen)}} className="expand__toggle-btn">
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>
        <div className="expand__content">{props.children}
        </div>
  </div>
    )
}
export default Expand;