import React from 'react'
import DynamicTable from '../components/Display/DynamicTable'

const ViewAttendance = () => {
    const x = 1;
    const columns = [
        {path: "course", name: "Course"},
        {path: "index", name: "Index"},
        {path: "date", name: "Date"},
        {path: "attendance", name: "Attendance"}
    ];
    const data = [
        {course: "CZ3005", index: 'TS2', date: "11/10/2021", attendance: "Present"}
    ]
    return(
        <>
            <div>teacher view attendance page</div>
            <DynamicTable id="id" columns={columns} data={data}/>
        </>
    )
}

export default ViewAttendance