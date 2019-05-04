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

  changeNameHandler = (event) => {
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
        <p className="App-intro">
          <UserInput 
          changed={this.changeNameHandler} 
          user={this.state.usernames[0]}/>
          <UserOutput user={this.state.usernames[0]}/>
          <UserOutput user={this.state.usernames[1]}/>
          <UserOutput user={this.state.usernames[2]}/>
          <UserOutput user={this.state.usernames[3]}/>
        </p>
      </div>
    );
  }
}

export default App;
