import React from 'react'
import { Card } from 'react-bootstrap/'
import StudentNavbar from '../components/navbarStudent'
import FileUpload from '../components/fileUpload'

export default function SubmitDoc() {
    return (
        <div>
            <StudentNavbar />
            <Card>
                <Card.Header as="h2">Submit Documents</Card.Header>
                <Card.Body>
                    <h3>Absenteeism Records</h3>
                </Card.Body>
                <FileUpload />
            </Card>
        </div>
    )
}
