import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

function AttSelection() {
    // set options
    const [courses, setCourses] = useState([])
    const [groups, setGroups] = useState([])

    // user selected option
    const [selectedCourse, setCourse] = useState('')
    const [selectedGroup, setGroup] = useState('')
    const [selectedMode, setMode] = useState('')

    function validateSelections() {
        return (
            selectedCourse !== '' && selectedGroup !== '' && selectedMode !== ''
        )
    }

    useEffect(() => {
        axios
            .get('https://api.jsonbin.io/b/6141d16daa02be1d4448ac42/5')
            .then((response) => setCourses(response.data))
            .then((error) => console.log(error))
    }, [])

    const selectCourse = (e) => {
        const index = Number(e.target.value)
        if (index !== -1) {
            // set user selected course
            setCourse(e.target.options[index + 1].text)

            // reset group
            setGroup('')

            // set options for group selection
            setGroups(courses[index].groups)
        } else {
            setCourse('')
        }
    }

    const selectGroup = (e) => {
        const index = Number(e.target.value)
        console.log(index)
        if (index !== -1) {
            setGroup(e.target.options[index + 1].text)
        } else {
            setGroup('')
        }
    }

    const selectMode = (e) => {
        if (e.target.value !== '-1') {
            setMode(e.target.value)
        } else {
            setMode('')
        }
    }

    return (
        <div>
            <select required onChange={selectCourse}>
                <option value="-1">Select Course</option>
                {courses.map((course, index) => (
                    <option key={course.name} value={index}>
                        {course.name}
                    </option>
                ))}
            </select>
            <br />
            <select required onChange={selectGroup}>
                <option value="-1">Select Group</option>
                {groups.map((group, index) => (
                    <option key={group.name} value={index}>
                        {group.name}
                    </option>
                ))}
            </select>
            <br />
            <select required onChange={selectMode}>
                <option value="-1">Select Attendance Taking Mode</option>
                <option key="0" value="face">
                    Facial Recognition
                </option>
                <option key="1" value="manual">
                    Manual
                </option>
            </select>
            <br />
            <Button
                variant="primary"
                size="lg"
                disabled={!validateSelections()}
                onClick={() => {
                    console.log({ selectedCourse })
                    console.log({ selectedGroup })
                    console.log({ selectedMode })
                }}
            >
                Take Attendance
            </Button>
        </div>
    )
}

export default AttSelection
