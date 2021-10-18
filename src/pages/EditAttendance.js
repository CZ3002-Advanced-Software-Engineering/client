import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TableAttendance from '../components/Display/TableAttendance'
import { fetchAttendance, fetchExistingSessionID } from '../actions/attendance'


const EditAttendance = () => {
    const x = 1
    const dispatch = useDispatch()

    const { course, index, date } = useSelector(
        (state) => state.selectedAttendance
    ) 

    const { students, isFetched, isFetchedUser, id } = useSelector(
        (state) => state.attendance
    )

    useEffect(() => {
        dispatch(fetchAttendance(course, index, date))
    }, [])

    return (
        <>
        <div>
            <h1>edit attendance page</h1>
        </div>
            <h1 style={{display: 'flex', alignItems : 'center', justifyContent: 'center', 'padding': 10}}> Course Name : {course}</h1>
            <h3 style={{display: 'flex', alignItems : 'center', justifyContent: 'center'}}> Index Name : {index}</h3>
            <h3 style={{display: 'flex', alignItems : 'center', justifyContent: 'center', 'padding-bottom': 10}}> Date : {date}</h3>
            
            {isFetchedUser && (
                <TableAttendance
                attendanceId={id}
                students={students}
                session={id}
                course={course}
                group={index}
            />
            )}
        </>
    )
}


export default EditAttendance