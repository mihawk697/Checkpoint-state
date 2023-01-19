import './App.css';
import React, { Component } from 'react'
import Profile from './component/Profile';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show : false}
  }
handleclick =()=> this.setState({show:!this.state.show})

  render() {
    return (
      <div class="App">
      <button onClick={this.handleclick }>show/hide</button>
      {
        this.state.show && <Profile /> 
      }

      </div>
    );
  }
}

