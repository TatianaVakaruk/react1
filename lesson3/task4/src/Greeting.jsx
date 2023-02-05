import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
const rootElement = document.querySelector("#root");

    
const Greeting = (props)=>{
    let age = new Date(props.birthDate);
   let age1 = age.getTime();
   let age2 = new Date().getTime();
   let age3 = Math.abs(Math.round((age2 - age1)/ (24 * 3600 * 365 * 1000)));
    return (
       
        <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I am ${age3} years old`}</div>
     
    )
    
}
export default Greeting;

ReactDOM.render(<Greeting firstName="John" lastName="Doe" birthDate="Jan, 15, 85 20:17:40 GMT+00:00"/>, rootElement);
