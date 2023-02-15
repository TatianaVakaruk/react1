import React from 'React';
const Logout = (props)=>{
    return (
        <button onClick = {props.onLogout} class="logout btn">Logout</button>
    )
}
export default Logout;