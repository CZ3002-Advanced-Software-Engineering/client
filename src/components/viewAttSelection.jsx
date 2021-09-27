import React, { useState } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { formatDate, parseDate } from 'react-day-picker/moment'
import 'moment/locale/it'
import 'react-day-picker/lib/style.css'

export default function ViewAttSelection({
    courses,
    groups,
    setGroups,
    setCourse,
    setGroup,
    setDate,
}) {
    // disabled days for day picker
    const [disabledDays, setDisabledDays] = useState('')

    function resetDate() {
        setDate('')
    }

    function resetGroup() {
        setGroup('')
        resetDate()
        setDisabledDays([0, 1, 2, 3, 4, 5, 6])
    }

    function resetAll() {
        setCourse('')
        resetGroup()
        resetDate()
    }

    // disable all days except day of selected group
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
            setCourse(courses[index])

            // set options for group selection
            setGroups(courses[index].groups)

            resetGroup()
        } else {
            resetAll()
        }
    }

    const selectGroup = (e) => {
        const index = Number(e.target.value)
        if (index !== -1) {
            setGroup(groups[index])
            disableDays(groups[index].day)
            resetDate()
        } else {
            resetGroup()
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
                inputProps={{ readOnly: true }}
                formatDate={formatDate}
                parseDate={parseDate}
                format="LL"
                placeholder="Select Date"
                dayPickerProps={{
                    modifiers: {
                        disabled: [{ daysOfWeek: disabledDays }],
                    },
                }}
                onDayChange={(day) => {
                    setDate(day)
                }}
            />
        </div>
    )
}
