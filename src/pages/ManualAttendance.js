import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TableAttendance from '../components/Display/TableAttendance'
import { fetchSessionID } from '../actions/attendance'

const { REACT_APP_API } = process.env

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

    // useEffect(() => {
    //     if (isFetched) {
    //         console.log('hello')
    //         dispatch(fetchUser(students.map((item) => item.student)))
    //     }
    // }, [isFetched])

    // useEffect(() => {
    //     axios
    //         .get(`${REACT_APP_API}/take_attendance/manual`, {
    //             params: {
    //                 course,
    //                 group: index
    //             }
    //         })
    //         .then((res) => {
    //             // console.log('response from /take_attendance/manual')
    //             // console.log(res.data)
    //             setAttRecord(res.data)
    //         })
    //         .then(() => {
    //             setMyBool(true)
    //         })
    // }, [isFetchedUser])
    // console.log('current attendance record')
    // console.log(attRecord)
    // console.log(students)
    // console.log(attRecord.students)

    const columns = [
        { path: 'student', name: 'Student' },
        { path: 'checkintime', name: 'Check In Time' },
        { path: 'status', name: 'Status' },
    ]
    return (
        <>
            <h1 style={{display: 'flex', alignItems : 'center', justifyContent: 'center', 'padding': 10}}> Course Name : {course}</h1>
            <h3 style={{display: 'flex', alignItems : 'center', justifyContent: 'center'}}> Index Name : {index}</h3>
            <h3 style={{display: 'flex', alignItems : 'center', justifyContent: 'center', 'padding-bottom': 10}}> Date : {date}</h3>
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