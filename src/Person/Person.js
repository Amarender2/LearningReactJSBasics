import React from 'react';
import {Person} from './Person.css';

const person = (props) => {
    return (
        <div className='Person'>
            <h1 onClick={props.click}>I am {props.name} and My age is {props.age}</h1>
            <h3>{props.children}</h3>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
    );
};

export default person;

// When using class component (class Person extends React.Component) its this.props.name.