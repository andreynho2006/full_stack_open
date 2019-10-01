import React from 'react'
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App = ({ course }) => {
    const courses = course.map(curs => (
        <div key={curs.id}>
            <Header course={curs} />
            <Content course={curs} />
            <Total course={curs} />
        </div>
        ),
    );

    return (
        <div>
            {courses}
        </div>
    )
  }

export default App