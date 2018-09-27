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

export function addStudent() {
  return { type: "ADD_STUDENT", payload: [ "olmo", "anna", "liza"] }
}

export function removeStudent() {
  return { type: "REMOVE_STUDENT", payload: null }
}

export function addCourse() {
  return { type: "ADD_COURSE", payload: null }
}

export function removeCourse() {
  return { type: "REMOVE_COURSE", payload: null }
}

export function enroll() {
  return { type: "ENROLL", payload: null }
}

export function quit() {
  return { type: "QUIT", payload: null }
}


// reducer

function reducer(state, action) {
  return state
}

// store

const store = createStore(reducer, initialState)

export default store