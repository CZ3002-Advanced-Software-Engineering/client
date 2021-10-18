import React from 'react'
import axios from 'axios'
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
    const handleDownload = (fileId) => {
        console.log(fileId)
        axios
            .get(`${process.env.REACT_APP_API}/download/${fileId}`)
            .then((res) => console.log(res.data))
    }

    const handleUpload = () => {
        console.log('i am in upload')
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
                                                <NormalButton>
                                                    Upload
                                                </NormalButton>
                                            </NormalButtonWrapper>
                                        ) : (
                                            <NormalButtonWrapper>
                                                <NormalButton
                                                    onClick={handleUpload}
                                                >
                                                    Upload
                                                </NormalButton>
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