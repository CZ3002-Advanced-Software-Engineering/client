import React from 'react'
import { Card } from 'react-bootstrap/'
import StudentNavbar from '../components/navbarStudent'

export default function SubmitDoc() {
    return (
        <div>
            <StudentNavbar />
            <Card>
                <Card.Header as="h2">Submit Documents</Card.Header>
                <Card.Body>
                    <h3>Absenteeism Records</h3>
                </Card.Body>
                <div className="custom-file">
                    <input type="file" id="inputGroupFile01" />
                </div>
            </Card>
        </div>
    )
}
