import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SyncLoader } from 'react-spinners'
import { fetchAbsentees, fetchStudentAbsentee } from '../actions/absentee'
import Navbar from '../components/Navbar'
import { NavBarInfo as NavBarInfoTeacher } from '../components/Teacher/Data'
import { NavBarInfo as NavBarInfoStudent } from '../components/Student/Data'
import Title from '../components/Shared/Title'
import DynamicTable from '../components/Display/DynamicTable'

/**
 * UI for viewing of absentee records
 * @returns {JSX.Element} - View Absentee page
 * @constructor
 */
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

    const { data, isFetchedUser, isLoading } = useSelector(
        (state) => state.absentee
    )

    useEffect(() => {
        if (domain === 'teacher') {
            dispatch(fetchAbsentees(_id))
        } else if (domain === 'student') {
            dispatch(fetchStudentAbsentee(_id))
        }
    }, [])
    return (
        <>
            <Navbar
                info={
                    domain === 'teacher' ? NavBarInfoTeacher : NavBarInfoStudent
                }
            />
            <Title title="Absentees for your courses" />
            <SyncLoader
                loading={isLoading}
                size={15}
                margin={2}
                color="#01BF71"
                css={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            />
            {isFetchedUser && !isLoading ? (
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