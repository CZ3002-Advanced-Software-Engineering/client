import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import {
    NavBarInfo,
    submitDocumentsDesc,
    viewAttendanceDesc,
} from '../components/Student/Data'

const StudentHome = () => (
    <>
        <Navbar info={NavBarInfo} />
        <HeroSection
            HeroHeader="Welcome"
            HeroPara="name pass here"
            getStartedButton="faff"
        />
        <InfoSection {...viewAttendanceDesc} />
        <InfoSection {...submitDocumentsDesc} />
    </>
)

export default StudentHome