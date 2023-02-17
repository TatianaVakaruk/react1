import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NumbersList from './NumbersList';
const numbers = [1, 2, 3, 4, 5];
const numbersElems = numbers.map(num=><li>{num}</li>)
const rootElement = document.querySelector('#root');
ReactDOM.render( numbersElems, rootElement);