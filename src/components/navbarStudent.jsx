import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const StudentNavbar = () => (
    <div className="row">
        <div className="col-md-12">
            <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                className="py-4"
                style={{ padding: 30 }}
            >
                <Navbar.Brand href="/student_home">
                    <IoMdCheckmarkCircleOutline
                        size="3rem"
                        color="green"
                        style={{ marginRight: 10 }}
                    />
                    FRAS
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link href="/view_attendance_self">
                            View Attendance
                        </Nav.Link>
                        <Nav.Link href="/submit_documents">
                            Submit Documents
                        </Nav.Link>
                        <Nav.Link href="/account">Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>
)

export default StudentNavbar
