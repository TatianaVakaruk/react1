import React, { Component } from 'react';
import Clock from './Clock.jsx';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            visible:true,
        }
        this.toggle =this.toggle.bind(this);
    }
    toggle(){
        this.setState({
            visible: !this.state.visible
        })
    }
    render(){
        return(
        <div>
            <button onClick={this.toggle}>Toggle</button>
        <div>{this.state.visible && <Clock location="Kiyv" offset={2}/>}</div>

        </div>
        )
};
}
export default App;