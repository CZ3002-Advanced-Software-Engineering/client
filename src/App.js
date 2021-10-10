import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import TeacherHome from './pages/TeacherHome'
import StudentHome from './pages/StudentHome'

export default function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" component={SignIn} exact />
                    <Route path="/teacher_home" component={TeacherHome} exact />
                    <Route path="/student_home" component={StudentHome} exact />
                </Switch>
            </Router>
        </>
    )
}