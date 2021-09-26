import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap/'
import CurrentDateTime from '../components/currentDateTime'
import TeacherNavbar from '../components/navbarTeacher'
import AttSelection from '../components/attSelection'

export default function TakeAttendance() {
    const history = useHistory()

    // set options
    const [courses, setCourses] = useState([])
    const [groups, setGroups] = useState([])

    // set selected options
    const [selectedCourse, setCourse] = useState('')
    const [selectedGroup, setGroup] = useState('')
    const [selectedMode, setMode] = useState('')

    useEffect(() => {
        axios
            .get('https://api.jsonbin.io/b/6141d16daa02be1d4448ac42/5')
            .then((response) => setCourses(response.data))
            .then((error) => console.log(error))
    }, [])

    // check if all fields selected
    function validateSelections() {
        return (
            selectedCourse !== '' && selectedGroup !== '' && selectedMode !== ''
        )
    }

    function getTimeSlot() {
        let str = ''
        if (selectedGroup !== '') {
            str = `${selectedGroup.day}, ${selectedGroup.starttime} - ${selectedGroup.endtime}`
        }
        return str
    }

    function handleTakeAttendance() {
        console.log(selectedCourse.name)
        console.log(selectedGroup.name)
        console.log(selectedMode)
        if (selectedMode === 'manual') {
            history.push({
                pathname: 'take_attendance/manual',
                state: {
                    course: selectedCourse.name,
                    group: selectedGroup.name,
                    startTime: selectedGroup.starttime,
                    endTime: selectedGroup.endtime,
                },
            })
        } else {
            // history.push('take_attendance/face')
        }
    }

    return (
        <div>
            <TeacherNavbar />
            <Card className="card">
                <Card.Header as="h2">Take Attendance</Card.Header>
                <Card.Body as="h3">
                    <CurrentDateTime />
                </Card.Body>
            </Card>
            <div className="row">
                <div className="col">
                    <AttSelection
                        courses={courses}
                        groups={groups}
                        setGroups={setGroups}
                        setCourse={setCourse}
                        setGroup={setGroup}
                        setMode={setMode}
                    />
                    <br />
                    <Button
                        variant="primary"
                        size="lg"
                        disabled={!validateSelections()}
                        onClick={handleTakeAttendance}
                    >
                        Take Attendance
                    </Button>
                </div>
                <div className="col">
                    <h4>Course: {selectedCourse.name}</h4>
                    <h4>Group: {selectedGroup.name}</h4>
                    <h4>Timeslot: {getTimeSlot()}</h4>
                </div>
            </div>
        </div>
    )
}
