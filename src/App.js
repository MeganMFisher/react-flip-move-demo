import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlipMove from 'react-flip-move';
import axios from 'axios';


class App extends Component {
  constructor() {
    super() 

    this.state = {
      people: []
    }
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/people').then(res => {
      console.log(res.data.results)
      this.setState({
        people: res.data.results
      })
    })
  }

  handleClick(index) {
 
      var newArr = this.state.people.splice(index, 1)
      this.setState({
        people: this.state.people
      })
  }

  render() {

  const peoples = this.state.people.map((person, i) => {
    return (
        <div key={i} onClick={() => this.handleClick(i)}>
          <h1>{person.name}</h1>
        </div>
      )
    })
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FlipMove duration={750} easing="ease-out">
          {peoples}
        </FlipMove>
      </div>
    );
  }
}

export default App;
