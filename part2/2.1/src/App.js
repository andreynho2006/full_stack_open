import React from 'react'
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  }

export default App