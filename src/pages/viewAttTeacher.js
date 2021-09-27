import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap/'
import CurrentDateTime from '../components/currentDateTime'
import TeacherNavbar from '../components/navbarTeacher'
import ViewAttSelection from '../components/viewAttSelection'

export default function ViewAttTeacher() {
    const history = useHistory()

    // set options
    const [courses, setCourses] = useState([])
    const [groups, setGroups] = useState([])

    // set selected options
    const [selectedCourse, setCourse] = useState('')
    const [selectedGroup, setGroup] = useState('')
    const [selectedDate, setDate] = useState('')

    useEffect(() => {
        axios
            .get('https://api.jsonbin.io/b/6141d16daa02be1d4448ac42/11')
            .then((response) => setCourses(response.data))
            .then((error) => console.log(error))
    }, [])

    // check if all fields selected
    function validateSelections() {
        return (
            selectedCourse !== '' && selectedGroup !== '' && selectedDate !== ''
        )
    }

    function getTimeSlot() {
        let str = ''
        if (selectedGroup !== '') {
            str = `${selectedGroup.day}, ${selectedGroup.starttime} - ${selectedGroup.endtime}`
        }
        return str
    }

    function handleViewAttendance() {
        console.log(selectedCourse.name)
        console.log(selectedGroup.name)
        console.log(selectedDate)
        history.push({
            pathname: 'view_attendance_teacher/class',
            state: {
                course: selectedCourse.name,
                group: selectedGroup.name,
                startTime: selectedGroup.starttime,
                endTime: selectedGroup.endtime,
            },
        })
    }

    return (
        <div>
            <TeacherNavbar />
            <Card className="card">
                <Card.Header as="h2">View Attendance</Card.Header>
                <Card.Body as="h3">
                    <CurrentDateTime />
                </Card.Body>
            </Card>
            <div className="row">
                <div className="col">
                    <ViewAttSelection
                        courses={courses}
                        groups={groups}
                        setGroups={setGroups}
                        setCourse={setCourse}
                        setGroup={setGroup}
                        setDate={setDate}
                    />
                    <br />
                    <Button
                        variant="primary"
                        size="lg"
                        disabled={!validateSelections()}
                        onClick={handleViewAttendance}
                    >
                        View Attendance
                    </Button>
                </div>
                <div className="col">
                    <h4>Course: {selectedCourse.name}</h4>
                    <h4>Group: {selectedGroup.name}</h4>
                    <h4>Timeslot: {getTimeSlot()}</h4>
                    <h4>
                        Date:&nbsp;
                        {selectedDate === ''
                            ? ''
                            : selectedDate.toLocaleDateString('en-sg', {
                                  weekday: 'short',
                                  day: 'numeric',
                                  month: 'long',
                                  year: 'numeric',
                              })}
                    </h4>
                </div>
            </div>
        </div>
    )
}
