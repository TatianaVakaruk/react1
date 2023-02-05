import Profile from './Profile.jsx';
import './index.scss';
import './comment.scss';
import React from 'react';
import ReactDOM from 'react-dom';
const rootElement= document.querySelector("#root");
const userData = {
    firstName: 'James',
    lastName: 'Bond',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London',
  };
  ReactDOM.render(<Profile userData = {userData} />, rootElement);