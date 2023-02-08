import React, { Component } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset=> {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}
class Clock extends Component {
    constructor(props){
        super(props);
        this.state={
            getTimeWithOffset:moment(getTimeWithOffset(props.offset)).format('h:mm:ss')
}
        
setInterval(()=>{
    this.setState({
        getTimeWithOffset:moment(getTimeWithOffset(props.offset)).format('h:mm:ss')
        
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