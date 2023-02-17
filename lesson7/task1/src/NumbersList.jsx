import React from 'react';
const NumbersList = (props)=>{
   return(
<ul>
    <li>{props.numbers[0]}</li>
    <li>{props.numbers[1]}</li>
    <li>{props.numbers[2]}</li>
    <li>{props.numbers[3]}</li>
    <li>{props.numbers[4]}</li>
</ul>
        )
    }
export default NumbersList;