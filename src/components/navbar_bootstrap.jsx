import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const StudentNavbar = () => (
    <>
        <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="/student_home">FRAS</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link href="/view_attendance">
                            View Attendance
                        </Nav.Link>
                        <Nav.Link href="/submit_documents">
                            Submit Documents
                        </Nav.Link>
                        <Nav.Link href="/account">Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
)

export default StudentNavbar
