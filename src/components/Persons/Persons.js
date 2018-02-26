import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map( (person, index) => {
    // supported in react 16 wihtout single root element, only if it is a list
    return <Person name={person.name} age={person.age} 
                click={() => props.clicked(index)}
                key={person.id}
                changed={(event) => (props.changed(event, person.id))}/>
});
export default persons;