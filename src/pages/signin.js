import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap/'
import '../styles/signin.css'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { fetchUser } from '../actions/teachers'

export default function SignIn() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [domain, setDomain] = useState('Staff')
    const dispatch = useDispatch()
    const hello = useSelector((state) => state)

    function validateForm() {
        return email.length > 0 && password.length > 0
    }

    const text = () => {
        dispatch(fetchUser())
        console.log(hello)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (domain === 'Staff') {
            console.log(domain)
            history.push('/teacher_home')
        } else if (domain === 'Student') {
            console.log(domain)
            history.push('/student_home')
        }
        // const opts = {
        //     email,
        //     password,
        // }
        // console.log(opts)
        // fetch('/api/login', {
        //     method: 'post',
        //     body: JSON.stringify(opts),
        // })
        //     .then((r) => r.json())
        //     .then((token) => {
        //         if (token.access_token) {
        //             login(token)
        //             console.log(token)
        //             history.push('/teacher_home')
        //         } else {
        //             console.log('Please type in correct username/password')
        //         }
        //     })
    }

    return (
        <div className="Login">
            <button onClick={text}>HELLO</button>
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
                                // type="email"
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