import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Selection() {
    const [courses, setCourses] = useState([])
    const [groups, setGroups] = useState([])
    const [time, setTime] = useState([])

    useEffect(() => {
        axios
            .get('https://api.jsonbin.io/b/6141d16daa02be1d4448ac42/5')
            .then((response) => setCourses(response.data))
            .then((error) => console.log(error))
    }, [])

    const selectCourse = (e) => {
        const index = Number(e.target.value)
        if (index !== -1) {
            console.log(index)
            setGroups(courses[index].groups)
        } else {
            setGroups([])
        }
    }

    // const selectGroup = (e) => {
    //     const index = Number(e.target.value)
    //     if (index !== -1) {
    //         console.log(index)
    //         setTime(courses[index].groups)
    //     } else {
    //         setTime([])
    //     }
    // }

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
            <select required>
                <option value="-1">Select Group</option>
                {groups.map((group) => (
                    <option key={group.name} value={group.name}>
                        {group.name}
                    </option>
                ))}
            </select>
            {/* <select>
                <option value="-1">Select Time Slot</option>
                {time.map((group) => (
                    <option key={group.name} value={group.name}>
                        {group.name}
                    </option>
                ))}
            </select> */}
            <br />
            <select required>
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

export default Selection
