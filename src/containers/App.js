import React, { Component } from 'react';
import classes from './App.css';
import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  // Not available in function components.
  // Manipulate state in less places, so app can be maintained well
  // So use function components if possible
  // If state changes, dom is re-rendered by react 
  state = {
    persons: [
      { id: '234rwrwe', name: 'Amar', age: 26 },
      { id: 'hjhj', name: 'Reddy', age: 28 },
      { id: 'asdasd', name: 'Mekala', age: 30 },
    ],
    showPersons: false,
  }

  deletePersonHandler = (index) => {
    //let exisitingPersons = this.state.persons.slice();
    let exisitingPersons = [...this.state.persons];
    exisitingPersons.splice(index, 1);

    this.setState({
      persons: exisitingPersons
    });
  }

  togglePersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  // event will be passed by react
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id); // find
    const per = { ...this.state.persons[personIndex] };
    // const per = Object.assign({}, person); copies object properties into other, makes another copy
    per.name = event.target.value;
    const persons = this.state.persons.slice(); // or use spread operator ... 
    persons[personIndex] = per;
    this.setState({
      persons: persons
    });
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      </div>)
    }

   return (
     <StyleRoot>
        <div className={classes.App}>
          <button onClick={() => this.setState({ showPersons : true})}>Show Persons</button>
          <Cockpit length={this.state.persons.length} clicked={this.togglePersons} showPersons={this.state.showPersons} />
          {persons}
        </div>
      </StyleRoot>
    );
  }
}
export default Radium(App);