import axios from 'axios'
import React, { useEffect } from 'react'
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



const TableAttendance = ({ passattrecord, course, group }) => {
    const { REACT_APP_API } = process.env
    console.log('pass attendance record here')
    console.log(passattrecord)
    const studentAttendance = passattrecord.students
    console.log('this is studentAttendance')
    console.log(studentAttendance)
    console.log('group', group)
    console.log('course', course)

    // axios
    //     .get(`${REACT_APP_API}/get_data/student=615abd43789fb41cf8fd3269`, {
            
    //     })
    //     .then((res) => {
    //         console.log(res.data.name)
    //     })

    // eslint-disable-next-line array-callback-return
    studentAttendance.map((item) => {
        console.log(item)
        // console.log(item.student)
        axios
            .get(`${REACT_APP_API}/get_data/student=${item.student}`)
            .then((res) => {
                console.log(res.data.name)
            })
    })
    
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
        <h1>table here</h1>
        
    )
}

TableAttendance.defaultProps = {
    id: 'id',
    columns: [],
    data: [],
    takeAttendance: false,
}

export default TableAttendance