import React from 'react';
import Part from './Part';

const Content = ({course}) => {
    const part = course.parts.map((part, index) => (
        <Part  part={part.name} key={index} exercises={part.exercises} />
        ),
    );

    return (
        <div>
            { part }
        </div>
    )
}

export default Content