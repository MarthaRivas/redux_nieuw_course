/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/

import store, { addStudent, addCourse, enroll, quit, removeCourse, removeStudent } from './store'

const inspect = () => console.log("state:", store.getState())
inspect()
store.subscribe(inspect)

store.dispatch(addStudent("olmo"))
store.dispatch(addStudent("anna"))
store.dispatch(addStudent("liza"))

store.dispatch(addCourse("maths"))
store.dispatch(addCourse("bio"))

store.dispatch(enroll("olmo", "bio"))
store.dispatch(enroll("anna", "bio"))
store.dispatch(enroll("anna", "maths"))
store.dispatch(enroll("liza", "maths"))

store.dispatch(quit("olmo", "bio"))

store.dispatch(removeCourse("maths"))

store.dispatch(removeStudent("olmo"))
