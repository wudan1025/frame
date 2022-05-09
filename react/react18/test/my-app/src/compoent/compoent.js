/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import React from 'react';
// client.js / index.js 版本差异
import ReactDOM, { render } from 'react-dom';

// 例子1 开始
function UserGreeting(props) {
  return <h1>User</h1>;
}

function GuestGreeting(props) {
  return <h1>Guest</h1>;
}

function Greeting(props) {
  const isLoggein = props.isLoggein;
  if (isLoggein) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

// ReactDOM.render(
//   <Greeting isLoggein={true}></Greeting>,
//   document.getElementById('compoent')
// );
// 例子1 结束

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLoginClick(this);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLoginClick() {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;

    if (isLoggedIn) {
      button = <logoutButton onClick={this.handleLogoutClick}></logoutButton>;
    } else {
      button = <loginButton onClick={this.handleLoginClick}></loginButton>;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}></Greeting>
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl></LoginControl>,
  document.getElementById('compoent')
);
