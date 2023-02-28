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
    count=0;
    this.props.users.map(user =>{
        if (user.name.toLowerCase().includes(filterText)){
            count++;
        }  
        return count; 
    })
    
}


    return(
        <div className="filter">
    <span className="filter__count">{isChange}</span>
    <input type="text" onChange={onChange} className="filter__input"  />
  </div>
    )

}

export default Filter;