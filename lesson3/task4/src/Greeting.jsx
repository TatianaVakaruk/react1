import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
const rootElement = document.querySelector("#root");

    
const Greeting = (props)=>{
    const difer = new Date() - new Date(props.birthDate);
  const yearsOld = Math.trunc(difer / 31536000000);

    return (
       
        <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I am ${yearsOld} years old`}</div>
     
    )
    
}
export default Greeting;

ReactDOM.render(<Greeting firstName="John" lastName="Doe" birthDate="Feb, 6, 85 20:17:40 GMT+00:00"/>, rootElement);
