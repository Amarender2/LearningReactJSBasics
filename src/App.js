import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      // class cannot be used 
      // One root element
      // react provides div, h1 (JSX not HTML)
      <div className="App">
        <h1>Hi, I am learning React</h1>
        <p>Hi, I am learning React 2</p>
        <Person name='Amar' age='23' />
        <Person name='Reddy' age='26' > Hello </Person>
        <Person name='Mekala' age='43' />
      </div>
    );
    // compiles to this
    // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, React.createElement('h1', null, 'Hi, I am good')), React.createElement('h2', null, 'Hi, I am good2'));
  }
}

export default App;
