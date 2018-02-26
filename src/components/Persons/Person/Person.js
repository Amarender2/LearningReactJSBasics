import React from 'react';
import classes from './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media{min-width:500px}' : {
            width: '450px'
        }
    };
    return (
        <div className={classes.Person} style={style}>
            <h1 onClick={props.click}>I am {props.name} and My age is {props.age}</h1>
            <h3>{props.children}</h3>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
    );
};

export default Radium(person);

// When using class component (class Person extends React.Component) its this.props.name.