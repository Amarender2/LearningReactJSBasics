import React from 'react';
import classes from './Person.css';
import Radium from 'radium';

class Person extends React.Component{
    
    componentWillReceiveProps(props) {
        console.log(this.props);
        console.log(this.props.name === props.name);
        console.log('Person child' + JSON.stringify(props));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Chidl Updated', JSON.stringify(prevProps), JSON.stringify(prevState));
    }

    componentWillUnmount() {
        console.log('child unmounted');
    }

    render() {
        const style = {
            '@media{min-width:500px}' : {
                width: '450px'
            }
        };

        console.log('[Person.js] render method');
        return (
            <div className={classes.Person} style={style}>
                <h1 onClick={this.props.click}>I am {this.props.name} and My age is {this.props.age}</h1>
                <h3>{this.props.children}</h3>
                <input type='text' onChange={this.props.changed} value={this.props.name}></input>
            </div>
        );
        
    }
    
}
    
export default Radium(Person);

// When using class component (class Person extends React.Component) its this.props.name.