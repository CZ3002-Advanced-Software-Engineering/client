import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap/'
import moment from 'moment'
import CurrentDateTime from '../components/currentDateTime'
import TeacherNavbar from '../components/navbarTeacher'
import TakeAttSelection from '../components/takeAttSelection'

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
            .get('https://api.jsonbin.io/b/6141d16daa02be1d4448ac42/11')
            .then((response) => setCourses(response.data))
            .then((error) => console.log(error))
    }, [])

    // check if all fields selected
    function validateSelections() {
        return (
            selectedCourse !== '' && selectedGroup !== '' && selectedMode !== ''
        )
    }

    function validateTime() {
        // set moment to english
        moment.locale('en')

        const { day, starttime, endtime } = selectedGroup
        const now = moment(Date())
        const today = now.format('ddd')

        // make start time 15 minutes earlier for buffer
        const groupStartTime = moment(starttime, 'HHmm').subtract(15, 'minutes')
        const groupEndTime = moment(endtime, 'HHmm')

        // check if day of group is today
        if (today !== day) {
            return false
        }

        // check if current time within time slot
        if (now.isAfter(groupStartTime) && now.isBefore(groupEndTime)) {
            return true
        }
        return false
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
        if (selectedMode === 'manual' && validateTime()) {
            history.push({
                pathname: 'take_attendance/manual',
                state: {
                    course: selectedCourse.name,
                    group: selectedGroup.name,
                    startTime: selectedGroup.starttime,
                    endTime: selectedGroup.endtime,
                },
            })
        } else if (selectedMode === 'face' && validateTime()) {
            // history.push('take_attendance/face')
        } else {
            alert(
                'There are no lessons for the selected course and group currently.'
            )
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
                    <TakeAttSelection
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
