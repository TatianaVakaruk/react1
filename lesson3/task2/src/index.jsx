import './index.scss';
import './search.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx'

const rootElement = document.querySelector("#root");

ReactDOM.render(<Search name="Bob"/>, rootElement);
