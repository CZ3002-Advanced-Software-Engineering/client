import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useLocation } from 'react-router-dom'
import { Card, Table, Button, Container, Form } from 'react-bootstrap/'
import TeacherNavbar from '../components/navbarTeacher'
import CurrentDateTime from '../components/currentDateTime'
import '../styles/manualAttendance.css'

export default function ManualAttendance() {
    // get details from previous page
    const location = useLocation()
    const { course, group, startTime, endTime } = location.state
    const [studentList, setStudentList] = useState([])

    function handleSubmit() {
        // post to backend here
        alert('Attendance submitted successfully.')
    }

    useEffect(() => {
        axios
            .get('https://api.jsonbin.io/b/6150147d4a82881d6c558bd4/3')
            .then((response) => setStudentList(response.data))
            .then((error) => console.log(error))
    }, [])

    // update attendance status and set/remove check-in time
    const handleChange = (student) => {
        const now = new Date()
        const currentTime = now.toLocaleTimeString('en-US', { hour12: true })
        const newStudentList = [...studentList]

        if (student.attendance === 'present') {
            newStudentList.find((s) => s.id === student.id).attendance =
                'absent'
            newStudentList.find((s) => s.id === student.id).checkintime = '-'
        } else {
            newStudentList.find((s) => s.id === student.id).attendance =
                'present'
            newStudentList.find((s) => s.id === student.id).checkintime =
                currentTime
        }
        setStudentList(newStudentList)
    }

    return (
        <div>
            <TeacherNavbar />
            <Card className="card">
                <Card.Header as="h2">Manual Attendance</Card.Header>
                <Card.Body as="h3">
                    <Card.Text>
                        <CurrentDateTime />
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
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.checkintime}</td>
                                <td>
                                    <Form.Check
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
                <Button variant="primary" size="lg" onClick={handleSubmit}>
                    Submit Attendance
                </Button>
            </Container>
        </div>
    )
}
