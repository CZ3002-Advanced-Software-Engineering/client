import React from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import SignIn from './pages/SignIn'
import TeacherHome from './pages/TeacherHome'
import TakeAttendance from './pages/TakeAttendance'
import ViewAttendance from './pages/ViewAttendance'

export default function App() {
    const { isAuthenticated } = useSelector((state) => state.user)

    return (
        <>
            <Router>
                <Switch>
                    <Route
                        path="/"
                        render={() =>
                            isAuthenticated ? (
                                <Redirect to="home" />
                            ) : (
                                <SignIn />
                            )
                        }
                        exact
                    />
                    <Route path="/home" component={TeacherHome} exact />
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