import React from 'react'
import { Card, Container } from 'react-bootstrap/'
import { IoAlertCircle } from 'react-icons/io5'
import { FaUserCheck } from 'react-icons/fa'
import StudentNavbar from '../components/navbarStudent'
import CommonButton from '../components/button'
import '../styles/studentHome.css'

export default function StudentHome() {
    const hasSetUp = false

    const setup = () => {
        console.log('hello')
    }

    const profileDoneCard = (
        <Card.Body>
            <Card.Text as="h5">
                <div className="row">
                    <div className="icon-col">
                        <FaUserCheck
                            className="icon"
                            size="100"
                            color="green"
                        />
                    </div>

                    <div className="col text">
                        Your facial recognition profile has been set up. You are
                        ready to take attendance using facial recognition.
                    </div>
                </div>
            </Card.Text>
            <CommonButton
                variant="primary"
                size="lg"
                handleClick={setup}
                text="Update Profile"
            />
        </Card.Body>
    )

    const profileUndoneCard = (
        <Card.Body>
            <Card.Text as="h5">
                <div className="row">
                    <div className="icon-col my-auto">
                        <IoAlertCircle
                            className="icon"
                            size="100"
                            color="#1d61a1"
                        />
                    </div>
                    <div className="col text">
                        You have not set up your facial recognition profile yet.
                        Please set up in order to take attendance using facial
                        recognition.
                    </div>
                </div>
            </Card.Text>
            <CommonButton
                variant="primary"
                size="lg"
                handleClick={setup}
                text="Set Up Now"
            />
        </Card.Body>
    )

    return (
        <div>
            <StudentNavbar />
            <Container>
                <Card className="card">
                    <Card.Header as="h2">Profile Status</Card.Header>
                    {hasSetUp ? profileDoneCard : profileUndoneCard}
                </Card>
            </Container>
        </div>
    )
}
