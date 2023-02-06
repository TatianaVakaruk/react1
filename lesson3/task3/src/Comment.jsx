import React from 'react';
import ReactDOM from 'react-dom';
import UserInfo1 from './UserInfo.jsx';
import './comment.scss';
import './index.scss';
import moment from 'moment';

const formatDate = date => moment(date).format('DD MMM YYYY');

function Comment(props) {
  return (
    <div className="comment">
        <UserInfo1 user={props.author} />
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}
export default Comment;
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