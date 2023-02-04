import React from 'react';
import UserAvatar from './Avatar.jsx';
const UserInfo1 = (props)=>{
    return (
<div className="user-info">
        <UserAvatar 
        avatarUrl={props.author.avatarUrl}
        name= {props.author.name}
        />
        <div className="user-info__name">
            {props.author.name}
            </div>
      </div>
    )
}
export default UserInfo1;