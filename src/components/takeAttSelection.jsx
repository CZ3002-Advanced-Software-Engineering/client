import React from 'react'

export default function TakeAttSelection({
    courses,
    groups,
    setGroups,
    setCourse,
    setGroup,
    setMode,
}) {
    function resetGroup() {
        setGroup('')
    }

    function resetAll() {
        setCourse('')
        setGroups([])
        resetGroup()
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
        } else {
            resetGroup()
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
