import React, { Component } from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';
import Online from '../../task4/src/Online';
class Auth extends Component{
    constructor(props){
        super(props);
        this.state= {
            state: true,
            
        }
    }
    onLogin =()=>{
        this.state= {
            state: false,
            
        }
    }
    onLogout=()=>{
        this.state= {
            state:true,
        }
    }
    render(){
        return (
          <div>{this.state.state ? (<Login onLogin = {this.onLogin}/>) : ((<Spinner size={10}/>) (<Logout onLogout = {this.onLogout}/>))}</div>

        )
    }

   
}
export default Auth;