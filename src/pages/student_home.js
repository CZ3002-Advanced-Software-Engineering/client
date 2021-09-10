import React from 'react'
import { Card, Button } from 'react-bootstrap/'
import { IoAlertCircle } from 'react-icons/io5'
import StudentNavbar from '../components/navbarStudent'
import CommonButton from '../components/button'

export default function StudentHome() {
    const hasSetUp = false

    const onClick = () => {
        console.log('hello')
    }

    return (
        <div>
            <StudentNavbar />
            <Card className="card">
                <Card.Header as="h2">Profile Status</Card.Header>
                <Card.Body>
                    <Card.Text as="h5">
                        <IoAlertCircle
                            className="icon"
                            size="100"
                            style={{ margin: 20 }}
                        />
                        You have not set up your facial recognition profile yet.
                    </Card.Text>
                    <CommonButton
                        variant="secondary"
                        size="lg"
                        handleClick={onClick}
                        text="Set Up Now"
                    />
                </Card.Body>
            </Card>
        </div>
    )
}
