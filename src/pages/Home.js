import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import HeroSection from '../components/HeroSection'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} info={[]} />
            <HeroSection
                HeroHeader="Hello"
                HeroPara="hello"
                getStartedButton="login"
            />
        </>
    )
}

export default Home