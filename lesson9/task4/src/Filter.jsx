import React from 'react';
const Filter =(filterText, count, onChange)=>{
    let filter;
 onChange=()=>(e)=>{
    filterText = e.target.value.toLowerCase();

filter = this.props.users.filter(user => {
       return user.name.toLowerCase().includes(filterText);
    
    });
}
let isChange=()=>{
   
    
    count = this.props.users.map(user =>{
      user.name.toLowerCase().includes(filterText);
        
    })
    return count.length;
    
}


    return(
        <div className="filter">
    <span className="filter__count">{isChange}</span>
    <input type="text" onChange={onChange} className="filter__input"  />
  </div>
    )

}

export default Filter;