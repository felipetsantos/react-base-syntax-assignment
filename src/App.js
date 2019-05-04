import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    usernames: [
      'Felipe',
      'Carol',
      'Isabela',
      'Guilherme',
    ]
  }

  changeUserNameHandler = (event) => {
    this.setState({usernames: [
      event.target.value,
      'Carol',
      'Isabela',
      'Guilherme',
    ]});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <UserInput 
          changed={this.changeUserNameHandler} 
          userName={this.state.usernames[0]}/>
          <UserOutput userName={this.state.usernames[0]}/>
          <UserOutput userName={this.state.usernames[1]}/>
          <UserOutput userName={this.state.usernames[2]}/>
          <UserOutput userName={this.state.usernames[3]}/>
        </div>
      </div>
    );
  }
}

export default App;
