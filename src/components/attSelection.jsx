import React from 'react'

/* eslint-disable no-constant-condition */

export default function AttSelection({
    courses,
    groups,
    setGroups,
    setCourse,
    setGroup,
    setMode,
}) {
    const selectCourse = (e) => {
        const index = Number(e.target.value)
        if (index !== -1) {
            // set user selected course
            setCourse(courses[index])

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
        if (index !== -1) {
            setGroup(groups[index])
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
        </div>
    )
}
