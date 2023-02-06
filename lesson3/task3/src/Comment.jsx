import React from 'react';
import moment from 'moment';
import UserInfo1 from './UserInfo.jsx';

const formatDate = date => moment(date).format('DD MMM YYYY');

function Comment(props) {
  return (
    <div className="comment">
        <UserInfo1 author={props.user} />
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}
export default Comment;