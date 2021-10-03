import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, Table } from 'react-bootstrap/'
import StudentNavbar from '../components/navbarStudent'
import FileUpload from '../components/fileUpload'

export default function SubmitDoc() {
    const [records, setRecords] = useState([])

    useEffect(() => {
        axios
            .get('https://api.jsonbin.io/b/615838faaa02be1d4452c67a/3')
            .then((response) => setRecords(response.data))
            .then((error) => console.log(error))
    }, [])

    return (
        <div>
            <StudentNavbar />
            <Card>
                <Card.Header as="h2">Submit Documents</Card.Header>
                <Card.Body>
                    <h3>Absenteeism Records</h3>
                </Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Course</th>
                            <th>Timeslot</th>
                            <th>Document</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((rec) => (
                            <tr key={rec.entryno}>
                                <td>{rec.entryno}</td>
                                <td>{rec.date}</td>
                                <td>{rec.course}</td>
                                <td>{rec.timeslot}</td>
                                <td>
                                    <a
                                        download={rec.documentname}
                                        href={rec.documenturl}
                                    >
                                        {rec.documentname}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <FileUpload />
            </Card>
        </div>
    )
}
