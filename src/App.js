import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from './pages/SignIn'
import TeacherHome from './pages/TeacherHome'
import StudentHome from './pages/StudentHome'
import TakeAttendance from './pages/TakeAttendance'
import ViewAttendance from './pages/ViewAttendance'

export default function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" component={SignIn} exact />
                    <Route path="/teacher_home" component={TeacherHome} exact />
                    <Route path="/student_home" component={StudentHome} exact />
                    <Route
                        path="/take_attendance"
                        component={TakeAttendance}
                        exact
                    />
                    <Route
                        path="/view_attendance_teacher"
                        component={ViewAttendance}
                        exact
                    />
                </Switch>
            </Router>
        </>
    )
}