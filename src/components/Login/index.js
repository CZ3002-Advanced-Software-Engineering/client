import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../../actions/teachers'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [domain, setDomain] = useState('teacher')
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(login(email, password, domain))
    }

    return (
        <>
            <section className="login">
                <div className="loginContainer">
                    <label>Email</label>
                    <input
                        type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <select
                        className="domain input-field"
                        required
                        onChange={(e) => setDomain(e.target.value)}
                    >
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                    </select>
                    <div className="btnContainer">
                        <button onClick={handleSubmit}>Sign in</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login