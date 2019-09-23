import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    console.log(props);
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => (
    <p>Part: {props.part} : {props.exercises} exercises</p>
)

const Content = ({parts}) => {
    const part = parts.map((part, index) => (
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

const Total = ({parts}) => {

    parts.forEach(element => {
        sum += element.exercises;
        return sum;
    });

    console.log(sum);
    return (
        <p>Total: {sum} exercises</p>
    )
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises : 10,
    },
    {
      name: 'Using props to pass data',
      exercises : 7
    },
    {
      name: 'State of a component',
      exercises : 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))