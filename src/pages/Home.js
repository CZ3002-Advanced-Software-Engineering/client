import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import {
    NavBarInfo as NavBarInfoTeacher,
    takeAttendanceDesc,
    viewAbsenteesDesc,
    viewAttendanceDesc as viewAttendanceDescTeacher,
} from '../components/Teacher/Data'
import {
    NavBarInfo as NavBarInfoStudent,
    submitDocumentsDesc,
    viewAttendanceDesc as viewAttendanceDescStudent,
} from '../components/Student/Data'
import Sidebar from '../components/SideBar'

const Home = () => {
    const { domain, data } = useSelector((state) => state.user)
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    return (
        <>
            {domain === 'teacher' && (
                <>
                    <Sidebar
                        isOpen={isOpen}
                        toggle={toggle}
                        info={NavBarInfoTeacher}
                    />
                    <Navbar info={NavBarInfoTeacher} />
                    <HeroSection
                        HeroHeader="Welcome"
                        HeroPara={data.name}
                        getStartedButton="faff"
                    />
                    <InfoSection {...takeAttendanceDesc} />
                    <InfoSection {...viewAttendanceDescTeacher} />
                    <InfoSection {...viewAbsenteesDesc} />
                </>
            )}
            {domain === 'student' && (
                <>
                    <Sidebar
                        isOpen={isOpen}
                        toggle={toggle}
                        info={NavBarInfoStudent}
                    />
                    <Navbar info={NavBarInfoStudent} toggle={toggle} />
                    <HeroSection
                        HeroHeader="Welcome"
                        HeroPara="name pass here"
                        getStartedButton="faff"
                    />
                    <InfoSection {...viewAttendanceDescStudent} />
                    <InfoSection {...submitDocumentsDesc} />
                </>
            )}
        </>
    )
}

Home.defaultProps = {
    domain: null,
}

export default Home