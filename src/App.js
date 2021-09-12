import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from './pages/signin'
import StudentHome from './pages/studentHome'
import TeacherHome from './pages/teacherHome'
import TakeAttendance from './pages/takeAttendance'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={SignIn} exact />
                <Route path="/student_home" component={StudentHome} exact />
                <Route path="/teacher_home" component={TeacherHome} exact />
                <Route
                    path="/take_attendance"
                    component={TakeAttendance}
                    exact
                />
            </Switch>
        </Router>
    )
}

export default App
