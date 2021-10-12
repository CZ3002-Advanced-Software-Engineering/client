import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAbsentees } from '../actions/absentee'
import DynamicTable from '../components/Display/DynamicTable'
import { fetchUser } from '../actions/user'

const ViewAbsentee = () => {
    const x = 1
    const dispatch = useDispatch()
    const columns = [
        { path: 'name', name: 'Student' },
        { path: 'checkintime', name: 'Check In Time' },
        { path: 'status', name: 'Status' },
        { path: 'documents', name: 'Documents' },
    ]
    const { course, index, date } = useSelector(
        (state) => state.selectedAttendance
    )

    const { data, isFetched, isFetchedUser } = useSelector(
        (state) => state.absentee
    )

    useEffect(() => {
        dispatch(fetchAbsentees(course, index, date))
    }, [])

    useEffect(() => {
        if (isFetched) {
            console.log('hello from absentee page')
            console.log(data.map((item) => item.student))
            dispatch(fetchUser(data.map((item) => item.student)))
        }
    }, [isFetched])

    const handleClick = () => {
        console.log(data)
    }
    return (
        <>
            <button onClick={handleClick}>hello</button>
            {isFetchedUser && (
                <DynamicTable
                    columns={columns}
                    data={data.map((item) => item)}
                />
            )}
        </>
    )
}

export default ViewAbsentee