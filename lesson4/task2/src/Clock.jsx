import React, { Component } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset=> {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
return moment(new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset))).format('h:mm:ss');
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
          <>
          <div>{getTimeWithOffset.props.location}</div>
            <div className= "clock">{this.state.getTimeWithOffset}</div>
            </>
        );
    }
}
export default Clock;