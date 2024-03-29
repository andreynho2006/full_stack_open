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

const Content = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

const Total = (props) => {
    return (
        <p>Total: {props.exercises1 + props.exercises2 + props.exercises3} exercises</p>
    )
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
      name: 'Fundamentals of React',
      exercises : 10,
  };
  const part2 = {
      name: 'Using props to pass data',
      exercises : 7
  };
  const part3 = {
      name: 'State of a component',
      exercises : 14
  };

  return (
    <div>
      <Header course={course} />
      <Content>
        <Part part={part1.name} exercises={part1.exercises} />
        <Part part={part2.name} exercises={part2.exercises} />
        <Part part={part3.name} exercises={part3.exercises} />
      </Content>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))