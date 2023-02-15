import React from 'react';
const Spinner = (props)=>{
    return (
        setTimeout(
        (<span size={props.size} class="spinner"></span>), 2000
    )
    )
}
export default Spinner;