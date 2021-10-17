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
import Home from './pages/Home'
import TakeAttendance from './pages/TakeAttendance'
import ViewAttendance from './pages/ViewAttendance'
import CourseSelection from './pages/CourseSelection'
import ViewAbsentee from './pages/ViewAbsentee'
import ManualAttendance from './pages/ManualAttendance'
import FacialRecognition from './pages/Facial Recognition'

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
                    <Route path="/home" component={Home} exact />
                    <Route
                        path="/take_attendance"
                        component={TakeAttendance}
                        exact
                    />
                    <Route
                        path="/course_selection/view_attendance_teacher"
                        component={ViewAttendance}
                        exact
                    />
                    <Route
                        path="/view_absentees"
                        component={ViewAbsentee}
                        exact
                    />
                    <Route
                        path="/course_selection/:slug"
                        component={CourseSelection}
                        exact
                    />
                    <Route
                        path="/manual_attendance"
                        component={ManualAttendance}
                        exact
                    />
                    <Route
                        path="/facial_recognition"
                        component={FacialRecognition}
                        exact
                    />
                </Switch>
            </Router>
        </>
    )
}