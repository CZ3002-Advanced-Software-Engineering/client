import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAbsentees, fetchStudentAbsentee } from '../actions/absentee'
import DynamicTable from '../components/Display/DynamicTable'

const ViewAbsentee = () => {
    const dispatch = useDispatch()
    const columns = [
        { path: 'course', name: 'Course' },
        { path: 'index', name: 'Index' },
        { path: 'name', name: 'Student' },
        { path: 'date', name: 'Date absent' },
        { path: 'documents', name: 'Documents' },
    ]

    const { _id } = useSelector((state) => state.user.data)

    const { domain } = useSelector((state) => state.user)

    const { data, isFetchedUser } = useSelector((state) => state.absentee)

    useEffect(() => {
        if (domain === 'teacher') {
            dispatch(fetchAbsentees(_id))
        } else if (domain === 'student') {
            dispatch(fetchStudentAbsentee(_id))
        }
    }, [])

    const handleClick = () => {
        console.log(data)
    }
    return (
        <>
            <button onClick={handleClick}>hello</button>
            {isFetchedUser ? (
                <DynamicTable
                    columns={columns}
                    data={data.map((item) => item)}
                />
            ) : (
                <h1>No attendance record</h1>
            )}
        </>
    )
}

export default ViewAbsentee