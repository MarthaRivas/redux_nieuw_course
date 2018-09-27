import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

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

export function addStudent(student) {
  return { type: "ADD_STUDENT", payload: student }
}

export function removeStudent(student) {
  return { type: "REMOVE_STUDENT", payload: student }
}

export function addCourse(course) {
  return { type: "ADD_COURSE", payload: course }
}

export function removeCourse(course) {
  return { type: "REMOVE_COURSE", payload: course }
}

export function enroll(student, course) {
  return { type: "ENROLL", payload: { student, course } }
}

export function quit(student, course) {
  return { type: "QUIT", payload: { student, course } }
}


// reducer

function reducer(state, action) {

  if (action.type === "ADD_STUDENT") {
    return {
      ...state,
      students: [...state.students, action.payload],
    }
  }

  if (action.type === "REMOVE_STUDENT") {
    return {
      ...state,
      students: state.students.filter(s => s !== action.payload),
      enrollments: state.enrollments.filter(e => e.student !== action.payload)
    }
  }

  if (action.type === "ADD_COURSE") {
    return {
      ...state,
      courses: [...state.courses, action.payload],
    }
  }

  if (action.type === "REMOVE_COURSE") {
    return {
      ...state,
      courses: state.courses.filter(c => c !== action.payload),
      enrollments: state.enrollments.filter(e => e.course !== action.payload)
    }
  }

  if (action.type === "ENROLL") {
    return {
      ...state,
      enrollments: [...state.enrollments, action.payload]
    }
  }

  if (action.type === "QUIT") {
    const { student, course } = action.payload
    return {
      ...state,
      enrollments: state.enrollments.filter(e =>
        !(e.student === student && e.course === course))
    }
  }

  return state
}

// store

const store = createStore(reducer, initialState, composeWithDevTools());

export default store