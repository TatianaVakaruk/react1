import React, { Component } from 'react';
import Info from './Info.jsx';
const text1 = 'Price is 500$. Available in 2 colors';
const text2= 'Price is 650$. Not available in 1 color.';

class Page extends Component{
    constructor(props){
        super(props);
        this.state={
            text:null
        }
    }
    Info=text=>{
this.setState({
    text
})
    }
    render(){
        return (
            <div className="page">
  <Info text={this.state.text}/>
  <div className="actions">
    <button  onClick = {()=>this.Info(text1)} className="btn">IPhone 13</button>
    <button onClick = {()=>this.Info(text2)} className="btn">IPhone 13 Pro</button>
    <button onClick = {()=>this.Info('')} className="btn">Clear</button>
  </div>
</div>
        )
    }
}
export default Page;