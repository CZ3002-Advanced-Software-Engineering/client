import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from './pages/signin'
import StudentHome from './pages/student_home'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/signin" component={SignIn} />
                <Route path="/student_home" component={StudentHome} />
            </Switch>
        </Router>
    )
}

export default App
