import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TableAttendance from '../components/Display/TableAttendance'
import { fetchSessionID } from '../actions/attendance'

const { REACT_APP_API } = process.env

/**
 * UI for manual attendance of students
 * @returns {JSX.Element} - Manual attendance page
 * @constructor
 */
const ManualAttendance = () => {
    const x = 1
    const dispatch = useDispatch()
    const [myBool, setMyBool] = useState(false)

    const { course, index, date } = useSelector(
        (state) => state.selectedAttendance
    )

    const { students, isFetched, isFetchedUser, id } = useSelector(
        (state) => state.attendance
    )

    useEffect(() => {
        dispatch(fetchSessionID(course, index))
    }, [])

    const columns = [
        { path: 'student', name: 'Student' },
        { path: 'checkintime', name: 'Check In Time' },
        { path: 'status', name: 'Status' },
    ]
    return (
        <>
            <h1
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 10,
                }}
            >
                {' '}
                Course Name : {course}
            </h1>
            <h3
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {' '}
                Index Name : {index}
            </h3>
            <h3
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    'padding-bottom': 10,
                }}
            >
                {' '}
                Date : {date}
            </h3>
            <TableAttendance
                attendanceId={id}
                students={students}
                session={id}
                course={course}
                group={index}
            />
        </>
    )
}

export default ManualAttendance