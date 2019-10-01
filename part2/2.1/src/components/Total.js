import React from 'react';

let sum = 0;

const Total = ({course}) => {

    course.parts.forEach(element => {
        sum += element.exercises;
        return sum;
    });

    console.log(sum);
    return (
        <p><strong>total of: {sum} exercises</strong></p>
    )
}

export default Total