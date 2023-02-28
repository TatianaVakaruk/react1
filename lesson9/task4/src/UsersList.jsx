import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  constructor(props){
    super(props);
  this.state={
    sorting:null,
    term: '',
   }
  }
  
 dataSearch = () => {
  let filter;
  this.props.onChange;

 this.setState({
    sorting: filter,
   term:value,

  });
}
    render(){
     

        return(
            <div>
<Filter value={this.state.term} onChange={this.dataSearch}/>
  <ul className="users">
  {this.props.users.map(user => <User key= {user.id} {...user}/>)}
  </ul>
  </div>
        )
    }
}
export default UsersList;