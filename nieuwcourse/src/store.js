import { createStore } from 'redux'

// state

const initialState = {
  // students is a list of student name
  // eg: [ "olmo", "anna", "liza" ]
  students: [],

  // courses is a list of course names
  // eg: [ "biology", "science" ]
  courses: [],

  // enrollments specifies who does what course
  // [ { student: "olmo", course: "biology "} ]
  enrollments: [],
}

// actions

export function addStudent(Student) {
  return { type: "ADD_STUDENT", payload: Student }
}

export function removeStudent(quitstudent) {
  return { type: "REMOVE_STUDENT", payload: quitstudent }
}

export function addCourse(course) {
  return { type: "ADD_COURSE", payload: course, }
}

export function removeCourse(course) {
  return { type: "REMOVE_COURSE", payload: course }
}

export function enroll(Student, course) {
  return { type: "ENROLL", payload: Student.course }
}

export function quit(Student, course) {
  return { type: "QUIT", payload: Student.course}
}


// reducer

function reducer(state, action) {
  if (action.type === "ADD_STUDENT")
 
  
  return {...state,}
}

{
  if (action.type === "REMOVE_STUDENT")
 
  
  return {...state,}
}

{
  if (action.type === "ADD_COURSE")
 
  
  return {...state,}
}

{
  if (action.type === "REMOVE_COURSE")
 
  
  return {...state,}
}

{
  if (action.type === "ENROLL")
 
  
  return {...state,
  enrollments: {}}
}

{
  if (action.type === "QUIT")
 
  
  return {...state,}
}


// store

const store = createStore(reducer, initialState)

export default store