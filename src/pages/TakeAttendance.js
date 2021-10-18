/* eslint-disable react/jsx-boolean-value */
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoCards from '../components/InfoCards'
import {
    NavBarInfo,
    takeAttendanceTeacherBox,
} from '../components/Teacher/Data'
import CourseSelectionFilter from '../components/CourseSelection/CourseSelectionFilter'

const TakeAttendance = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Navbar info={NavBarInfo} />
            <HeroSection
                HeroHeader="Take Attendance"
                HeroPara="Please choose the method of taking attendance"
            />
            <CourseSelectionFilter mydate={false}/>
            <InfoCards {...takeAttendanceTeacherBox} />
        </>
    )
}

export default TakeAttendance