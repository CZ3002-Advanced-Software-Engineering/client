import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAbsentees } from '../actions/absentee'
import { fetchUser } from '../actions/user'
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

    const { data, isFetched, isFetchedUser } = useSelector(
        (state) => state.absentee
    )

    useEffect(() => {
        dispatch(fetchAbsentees(_id))
    }, [])

    useEffect(() => {
        if (isFetched) {
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