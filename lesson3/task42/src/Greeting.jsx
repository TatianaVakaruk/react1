import React from 'react';
const Greeting = (props)=>{
  let age = new Date(props.birthDate);
 let age1 = age.getTime();
 let age2 = new Date().getTime();
 let age3 = Math.abs(Math.floor((age2 - age1)/ (24 * 3600 * 365 * 1000)));
  return (
     
      <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I am ${age3} years old`}</div>
   
  )
  
}
export default Greeting;