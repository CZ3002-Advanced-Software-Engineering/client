import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import {
    NavBarInfo,
    takeAttendanceDesc,
    viewAbsenteesDesc,
    viewAttendanceDesc,
} from '../components/Teacher/Data'

const TeacherHome = ({ isOpen, toggle }) => (
    <>
        <Navbar info={NavBarInfo} />
        <HeroSection
            HeroHeader="Welcome"
            HeroPara="name pass here"
            getStartedButton="faff"
        />
        <InfoSection {...takeAttendanceDesc} />
        <InfoSection {...viewAttendanceDesc} />
        <InfoSection {...viewAbsenteesDesc} />
    </>
)

export default TeacherHome