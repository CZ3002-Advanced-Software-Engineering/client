import React from 'react'
import { Card, Container } from 'react-bootstrap/'
import TeacherNavbar from '../components/navbarTeacher'
import CommonButton from '../components/commonButton'
import '../styles/studentHome.css'

export default function TeacherHome() {
    return (
        <div>
            <TeacherNavbar />
            <Card className="card">
                <Card.Header as="h2">Welcome</Card.Header>
            </Card>
        </div>
    )
}
