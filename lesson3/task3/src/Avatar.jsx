import React from 'react';
const rootElement= document.querySelector("#root");
const UserAvatar = (props)=>{
    return (
        <img className="avatar" 
        src={props.avatarUrl}
         alt={props.name} 
         />
    )
}
export default UserAvatar;
