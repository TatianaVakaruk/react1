import React from 'react';
import './comment.scss';
import './index.scss';
import moment from 'moment';
import UserInfo1 from './UserInfo.jsx';

const formatDate = date => moment(date).format('DD MMM YYYY');
const UserInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatar1.githubusercontent.com'
};
function Comment(props) {
  return (
    <div className="comment">
        <UserInfo1 author={props.author} />
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

const rootElement = document.querySelector("#root");

ReactDOM.render(
     <Comment 
    author={UserInfo}
    text="Good job"
    data={new Data('2012-04-23T18:25:43.511Z')} 
  
    />,
    rootElement
);