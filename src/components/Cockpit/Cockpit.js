import React from 'react';
import classes from './Cockpit.css'
import logo from '../../assets/logo.svg';

const cockpit = (props) => {
    let btnClass = '';
    
    if(props.showPersons) {
        btnClass = classes.red;
    }
    const classNames= [];
    if(props.length < 3) {
      classNames.push(classes.red);
    }
    if(props.length < 2) {
      classNames.push(classes.bold);
    }

    return (
        <div>
            <header className={classes.AppHeader}>
            <img src={logo} className={classes.AppLogo} alt="logo" />
            <h1 className={classes.AppTitle}>Welcome to React</h1>
            </header>
            <h1>Hi, I am learning React</h1>
            <p className={classNames.join(' ')}>It is really working !!! </p>
            {/* Dont add parantheses, just pass referencem or else function gets executed when diplayed*/}
            {/* This can be ineffcient, react can re-render too often if this way of handler is used, use bind when possible */}
            <button className={btnClass} onClick={props.clicked}>Toggle Names</button>
        </div>
    )
}

export default cockpit;