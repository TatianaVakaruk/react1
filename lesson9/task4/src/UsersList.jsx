import React, { Component } from "react";
import User from "./User";
import Filter from "./Filter";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
     
      //filterUsers:this.props.users,
      filterText:''
    };
  }

  dataSearch = (event) => {
   let filterText= event.target.value.toLowerCase();

    this.setState({
    //...this.state,
      filterText,
      
    });
  };
  render() {
    let filterUsers= this.props.users.filter(user=>user.name.toLowerCase().includes(this.state.filterText));
    return (
      <div>
        <Filter count ={filterUsers.length} filterText={this.state.filterText} onChange={this.dataSearch} />
        <ul className="users">
          {filterUsers.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UsersList;
