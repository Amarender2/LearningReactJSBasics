import React from 'react';
import Person from './Person/Person';
import Radium from 'radium';

class Persons extends React.Component {
   
    componentWillReceiveProps(props) {
        console.log('Persons componentWillReceiveProps' + props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate [Persons.js]');
        // return true;
        return nextProps.persons !== this.props.persons ||
            nextProps.clicked !== this.props.clicked ||
            nextProps.changed !== this.props.changed;
    }

   render() {
       console.log('Persons.js render method');
       return ( 
        <div>   
        {
            this.props.persons.map( (person, index) => {
            // supported in react 16 wihtout single root element, only if it is a list
            return (<Person name={person.name} age={person.age} 
                    click={() => this.props.clicked(index)}
                    key={person.id}
                    changed={(event) => (this.props.changed(event, person.id))}/>)
                })
        }
        </div>  
       )      
    }
}
export default Radium(Persons);