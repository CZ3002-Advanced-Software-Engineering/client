import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap/'
import '../styles/signin.css'
import { useHistory } from 'react-router-dom'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

export default function SignIn() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [domain, setDomain] = useState('Staff')

    function validateForm() {
        return email.length > 0 && password.length > 0
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (domain === 'Staff') {
            console.log(domain)
            // history.push('/teacher_home')
        } else if (domain === 'Student') {
            console.log(domain)
            history.push('/student_home')
        }
    }

    return (
        <div className="Login">
            <Card bg="light">
                <Card.Body>
                    <IoMdCheckmarkCircleOutline size="10rem" color="green" />
                    <br />
                    <h1>FRAS</h1>
                    <h4>Sign In</h4>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group
                            className="input-field"
                            size="lg"
                            controlId="email"
                        >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="input-field"
                            size="lg"
                            controlId="password"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <select
                            className="domain input-field"
                            required
                            onChange={(e) => setDomain(e.target.value)}
                        >
                            <option value="Staff">Staff</option>
                            <option value="Student">Student</option>
                        </select>
                        <Button
                            className="signin-btn"
                            size="lg"
                            type="submit"
                            disabled={!validateForm()}
                        >
                            Sign In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
