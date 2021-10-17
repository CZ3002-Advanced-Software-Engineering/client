import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAttendance } from '../actions/attendance'
import DynamicTable from '../components/Display/DynamicTable'

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
        { path: 'documents', name: 'Documents' },
    ]

    return (
        <>
            <h1> Course Name : {course}</h1>
            <h1> Index Name : {index}</h1>
            <h1> Date : {date}</h1>
            {isFetchedUser && (
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
            )}
        </>
    )
}

ViewAttendance.defaultProps = {
    students: [],
}

export default ViewAttendance