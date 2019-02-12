import React, { Component } from 'react';
import './App.css';

/**
 * Create a React application that loops through an array of
 * Students and displays a numbered list of the students.
 * Each item in the list should have the student’s personal
 * information such as name, age and hobby. The final
 * solution should render an output text like this:
 */
const classRegister = [
    {
        name: "Temitayo",
        age: 30,
        hobby: "coding",
        subjects:{
            math: 100,
            english: 100,
            art: 100,
        }
    },
    {
        name: "Seun",
        age: 12,
        hobby: "reading and eating",
        subjects:{
            math: 28,
            english: 70,
            art: 92,
        }
    },
    {
        name: "Peter",
        age: 37,
        hobby: "football",
        subjects:{
            math: 54,
            english: 77,
            art: 84,
        }
    },
    {
        name: "Mayowa",
        age: 23,
        hobby: "party",
        subjects:{
            math: 63,
            english: 59,
            art: 37,
        }
    },
    {
        name: "Mosun",
        age: 45,
        hobby: "singing and cooking",
        subjects:{
            math: 81,
            english: 99,
            art: 62,
        }
    }
];

class AppStudentList extends Component {
  render() {
    return  <div>
                {
                    classRegister.map(function(student, index){
                        return <h4>{++index}. Name: {student.name}. Age: {student.age}. Hobbies: {student.hobby}</h4>
                    })
                }
            </div>;
  }
}

export default AppStudentList;