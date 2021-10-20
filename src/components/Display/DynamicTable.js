import React, { useRef } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { NormalButton, NormalButtonWrapper } from '../ButtonElements'

const tableSyle = {
    border: '1px solid #1AC57F',
    borderWidth: '1px green',
    borderCollapse: 'collapse',
    borderColor: 'white',
    borderStyle: 'solid',
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
}

const thStyle = {
    border: '1px solid #01BF71',
    background: '#01BF71',
    color: 'black',
    padding: '5px',
}

const tdStyle = {
    border: '1px solid #1AC57F',
    background: 'white',
    padding: '5px',
    width: '15rem',
}

const DynamicTable = ({ id, columns, data, takeAttendance }) => {
    const fileInputRef = useRef()

    const { domain } = useSelector((state) => state.user)
    const handleDownload = (fileId) => {
        axios
            .get(`${process.env.REACT_APP_API}/download/${fileId}`, {
                responseType: 'blob',
            })
            .then((res) => {
                const url = window.URL.createObjectURL(new Blob([res.data]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', 'file.pdf')
                document.body.appendChild(link)
                link.click()
            })
    }

    const handleUpload = (e, studentId, attendanceId) => {
        // e.preventDefault()
        const formData = new FormData()
        formData.append('document', e.target.files[0])
        console.log(formData)
        console.log(studentId)
        console.log(attendanceId)
        axios
            .post(`${process.env.REACT_APP_API}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                params: {
                    studentId,
                    attendanceId,
                },
            })
            .then((res) => {
                console.log(`success${res.data}`)
            })
            .catch((e) => console.error(e))
    }
    return (
        <div>
            {takeAttendance && <h1>hello</h1>}
            <table style={tableSyle}>
                <tbody>
                    <tr>
                        {columns.map(({ path, name }) => (
                            <th style={thStyle} key={path}>
                                {name}
                            </th>
                        ))}
                    </tr>
                    {data.map((rowData) => (
                        <tr key={rowData[id]}>
                            {columns.map(({ path }) => (
                                <td style={tdStyle} key={path}>
                                    {/* eslint-disable-next-line no-nested-ternary */}
                                    {path === 'documents' ? (
                                        rowData[path] ? (
                                            <NormalButtonWrapper>
                                                <NormalButton
                                                    onClick={() =>
                                                        handleDownload(
                                                            rowData[path]
                                                        )
                                                    }
                                                >
                                                    Download
                                                </NormalButton>
                                                {domain === 'student' && (
                                                    <NormalButton>
                                                        Upload
                                                    </NormalButton>
                                                )}
                                            </NormalButtonWrapper>
                                        ) : (
                                            <NormalButtonWrapper>
                                                {domain === 'student' && (
                                                    <>
                                                        <NormalButton
                                                            onClick={() => {
                                                                fileInputRef.current.click()
                                                            }}
                                                        >
                                                            Upload
                                                        </NormalButton>
                                                        <input
                                                            type="file"
                                                            name="document"
                                                            ref={fileInputRef}
                                                            hidden
                                                            multiple={false}
                                                            onChange={(e) =>
                                                                handleUpload(
                                                                    e,
                                                                    rowData.student,
                                                                    rowData.id
                                                                )
                                                            }
                                                        />
                                                    </>
                                                )}
                                            </NormalButtonWrapper>
                                        )
                                    ) : (
                                        rowData[path]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

DynamicTable.defaultProps = {
    id: 'id',
    columns: [],
    data: [],
    takeAttendance: false,
}

export default DynamicTable