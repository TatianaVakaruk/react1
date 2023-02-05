import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
const rootElement = document.querySelector("#root");
ReactDOM.render(
    <Greeting firstName="Tom" lastName="Selek" birthDate={new Date(2019, 11, 31)} />,
    rootElement,
  );
