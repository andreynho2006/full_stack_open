import React from 'react';

const Total = ({course}) => {

    const total = course.parts.reduce((sum, p ) => {
        return sum += p.exercises
    }, 0 )

    return (
        <p><strong>total of: {total} exercises</strong></p>
    )
}

export default Total