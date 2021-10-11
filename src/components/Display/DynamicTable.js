import React from 'react'
import { MdFullscreenExit } from 'react-icons/md'

const tableSyle = {
    border: '1px solid #1AC57F',
    borderWidth: '1px green',
    borderCollapse: 'collapse',
    borderColor:"white", 
    borderStyle: 'solid',
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
}

const thStyle = {
    border: '1px solid #01BF71',
    background: '#01BF71',
    color: 'black',
    padding: '5px'
}

const tdStyle = {
    border: '1px solid #1AC57F',
    background: 'white',
    padding: '5px',
    width: '25rem',
}

const DynamicTable = ({ id, columns, data }) => {
    const mydata = []
    return (
        <div>
            <h1>dynamic table here</h1>
            <table style={tableSyle}>
                <tbody>
                    <tr>
                        {columns.map(({ path, name}) => (
                            <th style={thStyle} key={path}>{name}</th>
                        ))}
                    </tr>
                    {data.map((rowData) => (
                        <tr key={rowData[id]}>
                            {columns.map(({path}) => (
                                <td style={tdStyle} key={path}>
                                    {rowData[path]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DynamicTable
