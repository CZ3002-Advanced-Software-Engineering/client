import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { logout, useAuth } from '../auth'

export default function TeacherNavbar() {
    return (
        <div className="row">
            <div className="col-md-12">
                <Navbar
                    bg="dark"
                    variant="dark"
                    expand="lg"
                    className="py-4"
                    style={{ padding: 30 }}
                >
                    <Navbar.Brand href="/teacher_home">
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
                            <Nav.Link href="/take_attendance">
                                Take Attendance
                            </Nav.Link>
                            <Nav.Link href="/view_attendance_class">
                                View Attendance
                            </Nav.Link>
                            <Nav.Link href="/absentees">Absentees</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}
