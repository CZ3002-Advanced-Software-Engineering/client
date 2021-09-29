import React from 'react'
import { Card } from 'react-bootstrap/'
import StudentNavbar from '../components/navbarStudent'
import SetUpProfileCard from '../components/setUpProfileCard'

export default function StudentHome() {
    const setUpDone = false

    return (
        <div>
            <StudentNavbar />
            <Card>
                <Card.Header as="h2">Welcome</Card.Header>
                {/* <SetUpProfileCard hasSetUp={setUpDone} /> */}
            </Card>
        </div>
    )
}
