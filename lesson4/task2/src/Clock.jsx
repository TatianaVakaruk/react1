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
        this.state = {
          date: getTimeWithOffset(this.props.offset),
        };
        
setInterval(()=>{
    this.setState({
       date:getTimeWithOffset(this.props.offset)
        
    });
    
    }, 1000);
    }
    

    render (){
        return (
        
                       <div className="clock">
              <div className="clock__location">KYIV</div>
              <div className="clock__time">{moment(this.state.date).format('h:mm:ss A')}</div>
                 </div> 
                 
                  );
    }
}
export default Clock;