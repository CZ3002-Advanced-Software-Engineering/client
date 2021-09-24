import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Container, Button } from 'react-bootstrap/'
import TeacherNavbar from '../components/navbarTeacher'
import { logout, useAuth, authFetch } from '../auth'

export default function TeacherHome() {
    const history = useHistory()

    const [message, setMessage] = useState('')

    useEffect(() => {
        authFetch('http://127.0.0.1:5000/api/protected')
            .then((response) => {
                if (response.status === 401) {
                    setMessage("Sorry you aren't authorized!")
                    // history.push('/')
                    return null
                }
                return response.json()
            })
            .then((response) => {
                if (response && response.message) {
                    setMessage(response.message)
                }
            })
    }, [])

    return (
        <div>
            <TeacherNavbar />
            <Card className="card">
                <Card.Header as="h2">Welcome</Card.Header>
            </Card>
            <Button onClick={() => logout()}>Logout</Button>
            <h2>{message}</h2>
        </div>
    )
}
