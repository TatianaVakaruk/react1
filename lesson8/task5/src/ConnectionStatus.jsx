import React, { Component } from 'react';

class ConnectionStatus extends Component{
    state={
        status: "online"
    }

    componentDidMount(){
        
              window.addEventListener(`online`,this.isOnline);
            window.addEventListener(`offline`, this.isOffline);
            this.isOff();
              
       }
       isOff=()=>{
        if (this.props.status === 'offline'){
            div.classList.add('status_offline');
        }
    }
    
    isOnline=()=>{
        this.setState({
            status:"online"
        })
    }
    isOffline=()=>{
        this.setState({
            status:"offline"
        })
    }
    componentWillUnmount(){
        window.removeEventListener(`online`,this.isOnline);
        window.removeEventListener(`offline`, this.isOffline);
        this.isOff();
    }
    render(){
       
        return <div className='status'>{this.state.status}</div>
    }
}
export default ConnectionStatus;