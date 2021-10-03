import axios from 'axios'
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap/'

export default function FileUpload() {
    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('Choose File')
    const [uploadedFile, setUploadedFile] = useState({})

    const onChange = (e) => {
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        const url = ''

        try {
            const res = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            const { fileName, filePath } = res.data
            setUploadedFile({ fileName, filePath })
        } catch (error) {
            if (error.response.status === 500) {
                console.log('There was a problem with the server.')
            } else {
                console.log('error')
            }
        }
    }

    return (
        <div>
            {/* {uploadedFile !== null ? (
                <h3>{uploadedFile.fileName} </h3>
            ) : ( */}
            <Form.Group
                controlId="formFile"
                className="mb-3"
                onChange={onChange}
            >
                <Form.Control type="file" />
                <Button
                    className="upload-btn"
                    size="sm"
                    type="submit"
                    onSubmit={onSubmit}
                >
                    Upload
                </Button>
            </Form.Group>
            )
        </div>
    )
}
