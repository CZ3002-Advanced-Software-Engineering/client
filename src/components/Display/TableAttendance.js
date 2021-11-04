import React from 'react'
import { useDispatch } from 'react-redux'
import { selectStatus } from '../../actions/selected'
import { submitAttendance } from '../../actions/attendance'

const tableSyle = {
    border: '1px solid #1AC57F',
    borderWidth: '1px green',
    borderCollapse: 'collapse',
    borderColor: 'white',
    borderStyle: 'solid',
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
}

const thStyle = {
    border: '1px solid #01BF71',
    background: '#01BF71',
    color: 'black',
    padding: '5px',
}

const tdStyle = {
    border: '1px solid #1AC57F',
    background: 'white',
    padding: '5px',
    width: '15rem',
}

/**
 * UI to display the table when teacher is taking/editing attendance
 * @param {String} attendanceId - attendance ID
 * @param {Array} students - students in this course
 * @param {String} session - session ID
 * @param {String} course - Course name
 * @param {String} group - Index name
 * @returns {JSX.Element} - UI for the table
 * @constructor
 */
const TableAttendance = ({
    attendanceId,
    students,
    session,
    course,
    group,
}) => {
    const { REACT_APP_API } = process.env
    const dispatch = useDispatch()

    console.log(students)
    console.log('session id', session)
    console.log('group', group)
    console.log('course', course)

    const onSubmit = () => {
        console.log('data submitted')
    }

    const myDate = new Date()
    // eslint-disable-next-line prefer-template
    const time = myDate.toLocaleTimeString('en-us')
    console.log(time)

    const handleSubmit = () => {
        dispatch(submitAttendance(attendanceId, students))
        // eslint-disable-next-line no-alert
        alert('Successfully submitted attendance')
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <table style={tableSyle}>
                    <tbody>
                        <tr>
                            <th style={thStyle}>Name</th>
                            <th style={thStyle}>Check in time</th>
                            <th style={thStyle}>Status</th>
                            <th style={thStyle}>Mark attendance here</th>
                        </tr>
                        {students.map((student, index) => (
                            <tr key={student}>
                                <td style={tdStyle}>{student.name}</td>
                                <td style={tdStyle}>{student.checkintime}</td>
                                <td style={tdStyle}>{student.status}</td>
                                <td style={tdStyle}>
                                    <select
                                        name="status"
                                        id="status"
                                        value={student.status}
                                        onChange={(e) =>
                                            dispatch(
                                                selectStatus(
                                                    e.target.value,
                                                    student.student,
                                                    myDate.toLocaleTimeString(
                                                        'en-us'
                                                    )
                                                )
                                            )
                                        }
                                    >
                                        <option value="present">Present</option>
                                        <option value="pending">Pending</option>
                                        <option value="absent">Absent</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </form>
            <button
                type="submit"
                onClick={handleSubmit}
                style={{
                    'background-color': '#069459',
                    color: 'black',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    'margin-top': 20,
                    'margin-left': '33%',
                    width: '33%',
                }}
            >
                Submit
            </button>
        </>
    )
}

TableAttendance.defaultProps = {
    id: 'id',
    columns: [],
    data: [],
    takeAttendance: false,
}

export default TableAttendance