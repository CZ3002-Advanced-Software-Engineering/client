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
                <Route exact path="/" component={SignIn} />
                <Route exact path="/student_home" component={StudentHome} />
                <Route exact path="/teacher_home" component={TeacherHome} />
                <Route
                    exact
                    path="/take_attendance"
                    component={TakeAttendance}
                />
            </Switch>
        </Router>
    )
}

export default App
