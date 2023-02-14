import React, { Component } from 'react';
import Info from './Info.jsx';
const info1 = 'Price is 500$. Available in 2 colors';
const info2= 'Price is 650$. Not available in 1 color';

class Page extends Component{
    constructor(props){
        super(props);
        this.state={
            info:null
        }
    }
    Info=info=>{
this.setState({
    info
})
    }
    render(){
        return (
            <div className="page">
  <Info info={this.state.info}/>
  <div className="actions">
    <button  onClick = {()=>this.Info(info1)} className="btn">IPhone 13</button>
    <button onClick = {()=>this.Info(info2)} className="btn">IPhone 13 Pro</button>
    <button onClick = {()=>this.Info('')} className="btn">Clear</button>
  </div>
</div>
        )
    }
}
export default Page;