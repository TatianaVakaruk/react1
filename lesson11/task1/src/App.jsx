import Numbers from './Numbers';
import OddNumbers from './OddNumbers';
import EvenNumbers from './EvenNumbers';
import React, { Component } from 'react';

class App extends Component{
    state={
        number:0,
    }
    componentDidMount(){
        this.IntervalId=setInterval(()=>{
            this.setState({
                number: this.state.number + 1
            })
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.IntervalId);
    }
    render(){
        return(
            <div className="app">
                <EvenNumbers title="Even numbers" number={this.state.number}/>
                <Numbers title="All numbers" number={this.state.number}/>
                <OddNumbers title="Odd numbers" number={this.state.number}/>
            </div>
        )
    }
}
export default App;