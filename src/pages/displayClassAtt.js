import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useLocation } from 'react-router-dom'
import { Card, Table, Button, Container, Form } from 'react-bootstrap/'
import TeacherNavbar from '../components/navbarTeacher'

export default function DisplayClassAtt() {
    // get details from previous page
    const location = useLocation()
    const { date, course, group, startTime, endTime } = location.state

    const dateString = date.toLocaleDateString(
        'fr-CA', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        }
    )

    const [studentList, setStudentList] = useState([])

    // whether editing of attendance is disabled
    const [editDisabled, setEditDisabled] = useState(true)

    useEffect(() => {
        axios
            // .get('https://api.jsonbin.io/b/6150147d4a82881d6c558bd4/3')
            .get(`http://127.0.0.1:5000/view_attendance?course=${course}&group=${group}&date=${dateString}`)
            .then((response) => setStudentList(response.data))
            .then((error) => console.log(error))
    }, [])

    // update attendance status and set/remove check-in time
    const handleChange = (student) => {
        // const now = new Date()
        // const currentTime = now.toLocaleTimeString('en-US', { hour12: true })
        const newStudentList = [...studentList]

        if (student.attendance === 'present') {
            newStudentList.find((s) => s.class_index === student.class_index).attendance =
                'absent'
            newStudentList.find((s) => s.class_index === student.class_index).checkintime = '-'
        } else {
            newStudentList.find((s) => s.class_index === student.class_index).attendance =
                'present'
            newStudentList.find((s) => s.class_index === student.class_index).checkintime =
                'Edited'
        }
        setStudentList(newStudentList)
    }

    // for now just refresh page
    const cancelChange = () => {
        if (window.confirm('Cancel changes?')) window.location.reload(false)
    }

    function handleUpdate() {
        if (window.confirm('Confirm update?')) {
            // POST to backend here
            alert('Attendance updated successfully.')
            setEditDisabled(false)
        }
    }

    return (
        <div>
            <TeacherNavbar />
            <Card className="card">
                <Card.Header as="h2">View Class Attendance</Card.Header>
                <Card.Body as="h3">
                    <Card.Text>
                        {date.toLocaleDateString('en-sg', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        })}
                    </Card.Text>
                    <Card.Text>
                        {course.toUpperCase()}, {group}, {startTime} - {endTime}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Student Name</th>
                            <th>Check-in Time</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentList.map((student) => (
                            <tr key={student.class_index}>
                                <td>{student.class_index}</td>
                                <td>{student.name.toUpperCase()}</td>
                                <td>{student.checkintime}</td>
                                <td>
                                    <Form.Check
                                        disabled={editDisabled}
                                        type="checkbox"
                                        defaultChecked={
                                            student.attendance === 'present'
                                        }
                                        onChange={() => handleChange(student)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Button
                    disabled={!editDisabled}
                    variant="primary"
                    size="lg"
                    onClick={() => setEditDisabled(false)}
                >
                    Edit Attendance
                </Button>
                <Button
                    disabled={editDisabled}
                    variant="primary"
                    size="lg"
                    onClick={cancelChange}
                >
                    Cancel
                </Button>
                <Button
                    disabled={editDisabled}
                    variant="primary"
                    size="lg"
                    onClick={handleUpdate}
                >
                    Update
                </Button>
            </Container>
        </div>
    )
}
