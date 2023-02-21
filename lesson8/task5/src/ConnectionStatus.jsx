import React, { Component } from 'react';

class ConnectionStatus extends Component{
    state={
        date: "online"
    }

    componentDidMount(){
        if (navigator.online){
            return   window.addEventListener(`online`,this.isOnline);
           }
              else{
               return window.addEventListener(`offline`, this.isOffline);
              }
       }
    
    isOnline(){
        this.setState({
            date:"online"
        })
    }
    isOffline(){
        this.setState({
            date:"offline"
        })
    }
    render(){
        return <div className="status ">{this.state.date}</div>
    }
}
export default ConnectionStatus;