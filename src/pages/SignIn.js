import React from 'react'
import Login from '../components/Login'
import Navbar from '../components/Navbar'

/**
 * Login page for users to log in
 * @returns {JSX.Element} - Login page
 * @constructor
 */
const SignIn = () => (
    <>
        <Navbar />
        <Login />
    </>
)

export default SignIn