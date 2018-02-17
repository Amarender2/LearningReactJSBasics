import React from "react";

const person = (props) => {
    return (
        <div>
            <h1>I am {props.name} and My age is {props.age}</h1>
            <h6>{props.children}</h6>
        </div>
    );
};

export default person;