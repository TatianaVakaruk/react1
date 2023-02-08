import React, { Component } from 'react';

const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
let clock1 =new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));

  let hours = clock1.getHours();
 let  minutes= clock1.getMinutes();
  let seconds = clock1.getSeconds();
  
   let clock;
  if (hours > 12){
    if (seconds < 10){
      seconds = "0" + seconds;
       }
      if (minutes < 10){
        minutes = "0" + minutes;
       
      }
    hours = hours - 12;
clock = `${hours}:${minutes}:${seconds} P.M.`;
  }
  
  else if (hours === 24){
    if (seconds < 10){
        seconds = "0" + seconds;
       }
      if (minutes < 10){
        minutes = "0" + minutes;
       
      }
    clock = `00: ${minutes}:${seconds} A.M.`;
  }
  else{
    if (seconds < 10){
        seconds = "0" + seconds;
       }
      if (minutes < 10){
        minutes = "0" + minutes;
       
      }
    clock = `${hours}: ${minutes}:${seconds} A.M.`;
  }
  return clock;
  }; 

class Clock extends Component {
    constructor(props){
        super(props);
        this.state={
            getTimeWithOffset:getTimeWithOffset(props.offset)
        }
        
setInterval(()=>{
    this.setState({
        getTimeWithOffset:getTimeWithOffset(props.offset)
    });
    
    }, 1000);
    }
    

    render (){
        return (
            <div className= "clock">{this.state.getTimeWithOffset}</div>
        );
    }
}
export default Clock;