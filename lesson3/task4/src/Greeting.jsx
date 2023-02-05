import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
const rootElem = document.querySelector("#root");

    
function Greeting(props) {
    const difer = new Date() - new Date(props.birthDate);
    const yearsOld = Math.trunc(difer / 31536000000);
  
    return (
      <div className="greeting">
        {`My name is ${props.firstName} ${props.lastName}. I am ${yearsOld} years old`}
      </div>
    );
  }
  
  export default Greeting;

  ReactDOM.render(
    <Greeting firstName="Tom" lastName="Selek" birthDate={new Date(2019, 11, 31)} />,
    rootElem,
  );
