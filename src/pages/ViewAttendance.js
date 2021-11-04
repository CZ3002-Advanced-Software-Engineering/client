import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAttendance } from '../actions/attendance'
import DynamicTable from '../components/Display/DynamicTable'
import Title from '../components/Shared/Title'
import Navbar from '../components/Navbar'
import { NavBarInfo as NavBarInfoStudent } from '../components/Student/Data'
import { NavBarInfo as NavBarInfoTeacher } from '../components/Teacher/Data'

/**
 * UI for viewing of student attendance records
 * @returns {JSX.Element} - View Attendance Page
 * @constructor
 */
const ViewAttendance = () => {
    const dispatch = useDispatch()

    const { _id } = useSelector((state) => state.user.data)
    const { domain } = useSelector((state) => state.user)

    const { course, index, date } = useSelector(
        (state) => state.selectedAttendance
    )

    const { students, isFetched, isFetchedUser } = useSelector(
        (state) => state.attendance
    )

    useEffect(() => {
        dispatch(fetchAttendance(course, index, date, students))
    }, [])

    const columns = [
        { path: 'name', name: 'Student' },
        { path: 'checkintime', name: 'Check In Time' },
        { path: 'status', name: 'Status' },
    ]

    return (
        <>
            <Navbar
                info={
                    domain === 'teacher' ? NavBarInfoTeacher : NavBarInfoStudent
                }
            />
            <Title title={`Course Name: ${course}`} />
            <Title title={`Index Name: ${index}`} />
            <Title title={`Date: ${date}`} />
            {isFetchedUser ? (
                <>
                    <DynamicTable
                        id="id"
                        columns={columns}
                        data={
                            domain === 'teacher'
                                ? students
                                : students.filter(
                                      (student) => student.student === _id
                                  )
                        }
                    />
                </>
            ) : (
                <h1 style={{ textAlign: 'center' }}>No attendance record</h1>
            )}
        </>
    )
}

ViewAttendance.defaultProps = {
    students: [],
}

export default ViewAttendance