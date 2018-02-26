import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

// class App extends Component {
//   // Not available in function components.
//   // Manipulate state in less places, so app can be maintained well
//   // So use function components if possible
//   // If state changes, dom is re-rendered by react 
//   state = {
//     persons: [
//       { name: 'Amar', age: 26 },
//       { name: 'Reddy', age: 28 },
//       { name: 'Mekala', age: 30 },
//     ]
//   }

//   switchNameHandler = (newName) => {
//     console.log('Function Called');
//     // Dont do this: this.state.persons.name[0]='pranit';
//     this.setState({
//       persons: [
//       { name: newName, age: 26 },
//       { name: 'Reddy123', age: 28 },
//       { name: 'Mekala', age: 32 },
//       ]
//     });
//   }

//   // event will be passed by react
//   nameChangedHandler = (event) => {
//     this.setState({
//       persons: [
//       { name: 'Amarender', age: 26 },
//       { name: event.target.value, age: 28 },
//       { name: 'Mekala', age: 32 },
//       ]
//     });
//   }

//   render() {

//     const style = {
//       backgroundColor : 'white',
//       font : 'inherit',
//       border : '1px solid blue',
//       padding : '8px',
//       cursor : 'pointer',
//     }
//     return (
//       // class cannot be used 
//       // One root element
//       // react provides div, h1 (JSX not HTML)
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <h1>Hi, I am learning React</h1>
//         <p>Hi, I am learning React 2</p>
//         {/* Dont add parantheses, just pass referencem or else function gets executed when diplayed*/}
//         {/* This can be ineffcient, react can re-render too often if this way of handler is used, use bind when possible */}
//         <button style={style} onClick={(event) => this.switchNameHandler('Amarender$')}>Switch Name</button>
//         <Person click={this.switchNameHandler.bind(this, 'Pranit')} name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}> Component Children </Person>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       </div>
//     );
//     // compiles to this
//     // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, React.createElement('h1', null, 'Hi, I am good')), React.createElement('h2', null, 'Hi, I am good2'));
//   }
// }

class App extends Component {
  // Not available in function components.
  // Manipulate state in less places, so app can be maintained well
  // So use function components if possible
  // If state changes, dom is re-rendered by react 
  state = {
    persons: [
      {id: '234rwrwe',  name: 'Amar', age: 26 },
      {id: 'hjhj',  name: 'Reddy', age: 28 },
      {id: 'asdasd',  name: 'Mekala', age: 30 },
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

    const per = {...this.state.persons[personIndex]};
    // const per = Object.assign({}, person); copies object properties into other, makes another copy
    per.name = event.target.value;

    const persons = this.state.persons.slice(); // or use spread operator ... 
    persons[personIndex] = per;

    this.setState({
      persons: persons
    });
  }

  render() {

    let btnClass = '';

    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>
        {
          this.state.persons.map((person, index) => {
            return <Person name={person.name} age={person.age} 
                      click={() => this.deletePersonHandler(index)}
                      key={person.id}
                      changed={(event) => (this.nameChangedHandler(event, person.id))}/> 
                      // or use index as key, this is to help react update dom easily
          })
        }
      </div>)
      btnClass = classes.Red;
    }

    const classNames= [];
    if(this.state.persons.length < 3) {
      classNames.push(classes.red);
    }
    if(this.state.persons.length < 2) {
      classNames.push(classes.bold);
    }
    return (
      // class cannot be used 
      // One root element
      // react provides div, h1 (JSX not HTML)
      <StyleRoot>
        <div className={classes.App}>
          <header className={classes.AppHeader}>
            <img src={logo} className={classes.AppLogo} alt="logo" />
            <h1 className={classes.AppTitle}>Welcome to React</h1>
          </header>
          <h1>Hi, I am learning React</h1>
          <p className={classNames.join(' ')}>It is really working !!! </p>
          {/* Dont add parantheses, just pass referencem or else function gets executed when diplayed*/}
          {/* This can be ineffcient, react can re-render too often if this way of handler is used, use bind when possible */}
          <button className={btnClass} onClick={this.togglePersons}>Toggle Names</button>
          {persons}
        </div>
      </StyleRoot>
    );
    // compiles to this
    // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, React.createElement('h1', null, 'Hi, I am good')), React.createElement('h2', null, 'Hi, I am good2'));
  }
}

export default Radium(App);

// If state or props change, react anaylzes the code previous and code it will render now
// and then updates dom where code is updated

// Use radium for pseudo selectors
// npm i -S radium
// npm run eject to install config folder and modify webpack.config and webpack.prod
