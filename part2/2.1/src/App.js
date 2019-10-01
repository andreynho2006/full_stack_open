import React from 'react'
import Header from './components/Header';
import Content from './components/Content';

const App = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
      </div>
    )
  }

export default App