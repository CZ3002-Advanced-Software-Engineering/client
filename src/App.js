import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from './pages/signin'
import StudentHome from './pages/student_home'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={SignIn} exact />
                <Route path="/student_home" component={StudentHome} exact />
            </Switch>
        </Router>
    )
}

export default App
