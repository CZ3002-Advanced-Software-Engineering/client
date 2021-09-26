import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useLocation } from 'react-router-dom'
import { Card, Container, Button } from 'react-bootstrap/'
import TeacherNavbar from '../components/navbarTeacher'
import CurrentDateTime from '../components/currentDateTime'

export default function ManualAttendance() {
    const location = useLocation()
    const { course, group, startTime, endTime } = location.state

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
        </div>
    )
}
