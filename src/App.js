import React, { useState, useEffect } from 'react'
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
import { login, authFetch, useAuth } from './auth'

export default function App() {
    const [logged] = useAuth()

    return (
        <Router>
            <Switch>
                {!logged && (
                    <>
                        <Route exact path="/" component={SignIn} />
                        <Redirect to="/" />
                    </>
                )}
                {logged && (
                    <>
                        <Route
                            exact
                            path="/student_home"
                            component={StudentHome}
                        />
                        <Route
                            exact
                            path="/teacher_home"
                            component={TeacherHome}
                        />
                        <Route
                            exact
                            path="/take_attendance"
                            component={TakeAttendance}
                        />
                        <Redirect to="/teacher_home" />
                    </>
                )}
                {/* <Route exact path="/student_home" component={StudentHome} />
                <Route exact path="/teacher_home" component={TeacherHome} />
                <Route
                    exact
                    path="/take_attendance"
                    component={TakeAttendance}
                /> */}
            </Switch>
        </Router>
    )
}
