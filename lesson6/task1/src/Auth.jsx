import React, { Component } from 'react';
import Greeting from './Greeting';
class Auth extends Component{
    constructor(props){
        super(props);
        this.state= {
            isLoggedIn: false
        }
    }
    hangleLogin = ()=>{
        this.setState({
         isLoggedIn:true   
        })
    }
    hangleLogout = ()=>{
        this.setState({
         isLoggedIn:false   
        })
    }
    render(){
        
        
        
        return (
            <div className = "panel">
            <Greeting isLoggedIn={this.state.isLoggedIn}/>
            {this.state.isLoggedIn
            ?
            (<button  className= "btn logout"onClick = {this.hangleLogout}>Logout</button>) 
            : 
            (<button className= "btn login" onClick = {this.hangleLogin}>Login</button>)}
            </div>
        )
    }
}

export default Auth;