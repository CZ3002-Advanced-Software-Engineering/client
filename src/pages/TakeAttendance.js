/* eslint-disable react/jsx-boolean-value */
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoCards from '../components/InfoCards'
import {
    NavBarInfo,
    takeAttendanceTeacherBox,
} from '../components/Teacher/Data'
import CourseSelectionFilter from '../components/CourseSelection/CourseSelectionFilter'

/**
 * UI for letting user to choose method of taking attendance
 * @returns {JSX.Element} - Take Attendance Method page
 * @constructor
 */
const TakeAttendance = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { course, index, date } = useSelector(
        (state) => state.selectedAttendance
    )

    return (
        <>
            <Navbar info={NavBarInfo} />
            <HeroSection
                HeroHeader="Take Attendance"
                HeroPara="Please choose the method of taking attendance"
                scroll
                getStartedButton="searchFilter"
            />
            <CourseSelectionFilter mydate={false} />
            <p style={{ textAlign: 'center', marginBottom: '50px' }}>
                Leave date empty to take attendance. Enter date to edit
                atttendance.
            </p>
            <InfoCards {...takeAttendanceTeacherBox} />
        </>
    )
}

export default TakeAttendance