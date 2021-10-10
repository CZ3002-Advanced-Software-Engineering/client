import React, { useState } from 'react'
import Navbar from '../Navbar'
import { LoginContainer, LoginSection } from './LoginElements'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Navbar />
            <section className="login">
                <div className="loginContainer">
                    Email
                    <input
                        type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    Password
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </section>
        </>
    )
}

export default Login