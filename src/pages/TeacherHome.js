import React from 'react'
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

const TeacherHome = () => {
    const { domain } = useSelector((state) => state.user)
    return (
        <>
            {domain === 'teacher' && (
                <>
                    <Navbar info={NavBarInfoTeacher} />
                    <HeroSection
                        HeroHeader="Welcome"
                        HeroPara="name pass here"
                        getStartedButton="faff"
                    />
                    <InfoSection {...takeAttendanceDesc} />
                    <InfoSection {...viewAttendanceDescTeacher} />
                    <InfoSection {...viewAbsenteesDesc} />
                </>
            )}
            {domain === 'student' && (
                <>
                    <Navbar info={NavBarInfoStudent} />
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

TeacherHome.defaultProps = {
    domain: null,
}

export default TeacherHome