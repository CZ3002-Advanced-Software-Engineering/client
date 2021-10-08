import React from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </>
    )
}