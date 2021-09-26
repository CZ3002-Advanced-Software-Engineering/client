import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import SignIn from './pages/signin'
import StudentHome from './pages/studentHome'
import TeacherHome from './pages/teacherHome'
import TakeAttendance from './pages/takeAttendance'
import ManualAttendance from './pages/manualAttendance'

export default function App() {
    return (
        <Router>
            <Switch>
                <>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/student_home" component={StudentHome} />
                    <Route exact path="/teacher_home" component={TeacherHome} />
                    <Route
                        exact
                        path="/take_attendance"
                        component={TakeAttendance}
                    />
                    <Route
                        exact
                        path="/take_attendance/manual"
                        component={ManualAttendance}
                    />
                </>
            </Switch>
        </Router>
    )
}
