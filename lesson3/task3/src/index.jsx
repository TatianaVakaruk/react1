import React from 'react';
import ReactDOM from 'react-dom';
import './comment.scss';
import './index.scss';
import Comment from './Comment.jsx';
const rootElement = document.querySelector("#root");
const UserInfo = {
    name: 'Tom',
    avatarUrl: 'https://avatars1.githubusercontent.com/u10001'
  };
ReactDOM.render(
     <Comment 
    author={UserInfo}
    text="Good job"
    data={new Date('2012-04-23T18:25:43.511Z')} 
  />,
    rootElement
);