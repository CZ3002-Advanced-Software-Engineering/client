import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import CourseSelectionFilter from '../components/CourseSelection/CourseSelectionFilter'
import { Button } from '../components/ButtonElements'
import HeroSection from '../components/HeroSection'
import { BtnWrap } from '../components/InfoSection/InfoElements'
import Navbar from '../components/Navbar'
import { NavBarInfo as NavBarInfoTeacher } from '../components/Teacher/Data'
import { NavBarInfo as NavBarInfoStudent } from '../components/Student/Data'

const BtnWrapper = styled(BtnWrap)`
    justify-content: center;
`

const CourseSelection = ({ match }) => {
    const { course, index, date } = useSelector(
        (state) => state.selectedAttendance
    )

    const { domain } = useSelector((state) => state.user)

    const { slug } = match.params

    const handleClick = (e) => {
        if (!(course && index && date)) {
            e.preventDefault()
        }
    }
    return (
        <>
            <Navbar
                info={
                    domain === 'teacher' ? NavBarInfoTeacher : NavBarInfoStudent
                }
            />
            <HeroSection
                HeroHeader="Choose your course and index"
                HeroPara="Choose the date too"
            />
            <CourseSelectionFilter />
            <BtnWrapper>
                {slug === 'absentees' ? (
                    <Button
                        to="view_absentees"
                        big
                        fontBig
                        onClick={handleClick}
                    >
                        Go
                    </Button>
                ) : (
                    <Button
                        to="view_attendance_teacher"
                        big
                        fontBig
                        onClick={handleClick}
                    >
                        Go
                    </Button>
                )}
            </BtnWrapper>
        </>
    )
}

CourseSelection.defaultProps = {
    absentees: false,
}

export default CourseSelection