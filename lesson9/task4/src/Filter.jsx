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
    for (let i=0; i< this.props.users.length; i++){
        if (this.props.users.name.toLowerCase().includes(filterText)){
            count++;
        }
        return count;
    }
}


    return(
        <div className="filter">
    <span className="filter__count">{isChange}</span>
    <input type="text" onChange={onChange} className="filter__input"  />
  </div>
    )

}

export default Filter;