import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';
import React, { Component } from 'react';
class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      spinner: false,
    };
  }
  handleLogoinClick = () => {
    this.setState({
      isSpinnerOn: true,
    });

setTimeout(
  () =>
    this.setState({
      isLoggedIn: true,
      isSpinnerOn: false,
    }),
  2000,
);
  };

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <>
        {this.state.isLoggedIn ? (
          <Logout onLogout={this.handleLogoutClick} />
        ) : this.state.isSpinnerOn ? (
          <Spinner size={50} />
        ) : (
          <Login onLogin={this.handleLogoinClick} />
        )}
      </>
    );
  }
}
export default Auth;