import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Part = (props) => (
    <p>Part: {props.part} : {props.exercises} exercises</p>
)

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
let sum = 0;

const Total = ({course}) => {

    course.parts.forEach(element => {
        sum += element.exercises;
        return sum;
    });

    console.log(sum);
    return (
        <p>Total: {sum} exercises</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))