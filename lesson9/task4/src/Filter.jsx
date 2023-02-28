import React from 'react';
const Filter =({filterText, count, onChange})=>{
   /* let filter;
 onChange=()=>(e)=>{
    filterText = e.target.value.toLowerCase();

/*filter = this.props.users.filter(user => {
       return user.name.toLowerCase().includes(filterText);
    
    });
}*/



    return(
        <div className="filter">
    <span className="filter__count">{count}</span>
    <input type="text" value ={filterText} onChange={onChange} className="filter__input"  />
  </div>
    )

}

export default Filter;