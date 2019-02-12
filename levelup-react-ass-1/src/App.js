import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const students = [
  {
    name: 'Chudi',
    Age: 10,
    Hobbies: 'Singing, dancing'
  },
  {
    name: 'Tony',
    Age: 20,
    Hobbies: 'Eating'
  },
  {
    name: 'Arnold',
    Age: 25,
    Hobbies: 'Playing'
  },
  {
    name: 'Chudi',
    Age: 28,
    Hobbies: 'Running'
  },
  {
    name: 'Richard',
    Age: 20,
    Hobbies: 'Coding'
  }
]
class App extends Component {
  render() {
    return (
      <div className="App">
        {
          students.map((student, index) => {
            return <h3 key={index}>Name: {student.name}. Age: {student.Age}. Hobbies include: {student.Hobbies}</h3>

          })
        }
      </div>
    );
  }
}

export default App;
