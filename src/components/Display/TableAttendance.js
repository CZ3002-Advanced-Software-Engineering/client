import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FormControl } from 'react-bootstrap'

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



const TableAttendance = ({ passattrecord, students, session, course, group }) => {
    const { REACT_APP_API } = process.env
    // const [tableData, setTableData] = useState([])
    // console.log('pass attendance record here')
    // console.log(passattrecord)
    // const studentAttendance = passattrecord.students
    // console.log('this is studentAttendance')
    console.log(passattrecord)
    console.log(students)
    console.log('session id', session)
    console.log('group', group)
    console.log('course', course)

    const onSubmit = () => {
        console.log('data submitted')
    }

    // axios
    //     .get(`${REACT_APP_API}/get_data/student=615abd43789fb41cf8fd3269`, {
            
    //     })
    //     .then((res) => {
    //         console.log(res.data.name)
    //     })

    // eslint-disable-next-line array-callback-return
    // studentAttendance.map((item) => {
    //     console.log(item)
    //     // console.log(item.student)
    //     axios
    //         .get(`${REACT_APP_API}/get_data/student=${item.student}`)
    //         .then((res) => {
    //             console.log(res.data.name)
    //         })
    // })
    
    // console.log(studentAttendance.length)
    // eslint-disable-next-line no-plusplus
    // for (let i=0; i<studentAttendance.length; i++) {
    //     console.log(studentAttendance[i].student)
    //     axios
    //         .get(`${REACT_APP_API}/get_all_items`, {
    //             params: {collection: 'student', id: JSON.stringify(studentAttendance[i].student)},
    //         })
    //         .then((res) => {
    //             console.log(res)
    //         })
    // }

    
    // console.log('back')
    
    return(
        <>
        <h1>table here</h1>
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
                            <select name="status" id="status">
                                <option value="pending">pending</option>
                                <option value="present">present</option>
                                <option value="absent">absent</option>
                            </select>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </form>
        <button type='submit'>Submit</button>
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