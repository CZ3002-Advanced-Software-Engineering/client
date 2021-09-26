import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import MomentLocaleUtils, {
    formatDate,
    parseDate,
} from 'react-day-picker/moment'
import 'moment/locale/it'
import 'react-day-picker/lib/style.css'

/* eslint-disable no-constant-condition */

export default function ViewAttSelection() {
    const history = useHistory()

    // set options
    const [courses, setCourses] = useState([])
    const [groups, setGroups] = useState([])

    // user selected option
    const [selectedCourse, setCourse] = useState('')
    const [selectedGroup, setGroup] = useState('')
    const [selectedDate, setDate] = useState('')
    const [selectedMode, setMode] = useState('')

    // disabled days for day picker (all days disabled except day of selected group)
    const [disabledDays, setDisabledDays] = useState('')

    useEffect(() => {
        axios
            .get('https://api.jsonbin.io/b/6141d16daa02be1d4448ac42/5')
            .then((response) => setCourses(response.data))
            .then((error) => console.log(error))
    }, [])

    // check if all fields selected
    function validateSelections() {
        return (
            selectedCourse !== '' &&
            selectedGroup !== '' &&
            selectedDate !== '' &&
            selectedMode !== ''
        )
    }

    function disableDays(selectedGroupDay) {
        let days = [0, 1, 2, 3, 4, 5, 6]
        let dayInt = 0
        switch (selectedGroupDay.toLowerCase()) {
            case 'mon':
                dayInt = 1
                break
            case 'tue':
                dayInt = 2
                break
            case 'wed':
                dayInt = 3
                break
            case 'thu':
                dayInt = 4
                break
            case 'fri':
                dayInt = 5
                break
            default:
                dayInt = 0
        }
        days = days.filter((item) => item !== dayInt)
        setDisabledDays(days)
    }

    const selectCourse = (e) => {
        const index = Number(e.target.value)
        if (index !== -1) {
            // set user selected course
            setCourse(courses[index].name)

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
            setGroup(groups[index].name)
            disableDays(groups[index].day)
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
            <DayPickerInput
                formatDate={formatDate}
                parseDate={parseDate}
                format="LL"
                placeholder={`${formatDate(new Date(), 'LL')}`}
                dayPickerProps={{
                    modifiers: {
                        disabled: [{ daysOfWeek: disabledDays }],
                    },
                }}
                onDayChange={(day) => {
                    setDate(day)
                }}
            />
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
                    console.log(selectedCourse)
                    console.log(selectedGroup)
                    console.log(selectedDate)
                }}
            >
                View Attendance
            </Button>
        </div>
    )
}
