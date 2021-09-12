import React from 'react'
import { Card } from 'react-bootstrap/'
import TeacherNavbar from '../components/navbarTeacher'

export default function TakeAttendance() {
    return (
        <div>
            <TeacherNavbar />
            <Card className="card">
                <Card.Header as="h2">Take Attendance</Card.Header>
            </Card>
        </div>
    )
}
