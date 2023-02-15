import React from 'React';
const Logout = (props)=>{
    
    return (
        setTimeout((<button onClick = {props.onLogout} class="logout btn">Logout</button>
    ), 2000)
    )
}
export default Logout;