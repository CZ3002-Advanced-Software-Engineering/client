import React from 'react'
import axios from 'axios'
import Login from '../components/Login'
import Navbar from '../components/Navbar'

const SignIn = () => {
    const x = 1

    const handleClick = () => {
        axios
            .get(`${process.env.REACT_APP_API}/login/student`, {
                params: { collection: 'teacher' },
            })
            .then((res) => console.log(res.data))
            .catch((e) => console.log(e))
    }

    return (
        <>
            <Navbar />
            <Login />
        </>
    )
}

export default SignIn