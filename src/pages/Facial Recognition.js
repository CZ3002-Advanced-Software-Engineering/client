import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button, Container, Spinner } from 'react-bootstrap'
import axios from 'axios'
import Webcam from 'react-webcam'
// import '../styles/face.css'

export default function FacialRecognition() {
    const webcam = useRef(null)

    const course = 'CZ3002'
    const group = 'TS1'

    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)
    const [processing, setProcessing] = useState(false)

    const videoConstraints = {
        width: 640,
        height: 480,
        facingMode: 'user',
    }

    // calling the back to prep data
    useEffect(() => {
        axios
            .get(
                `http://127.0.0.1:5000/take_attendance/face?course=${course}&group=${group}`
            )
            .then((res) => {
                if (res.status === 200) {
                    setLoading(false)
                }
            })
            .catch((error) => {
                console.error(error.response)
            })
    }, [])

    // capture and send image to back for processing
    const capture = useCallback(() => {
        setProcessing(true)
        const imageSrc = webcam.current.getScreenshot()
        axios
            .post('http://127.0.0.1:5000/face_match', { data: imageSrc })
            .then((res) => {
                console.log(`response = ${res.data}`)
                setName(res.data)
                setProcessing(false)
            })
            .catch((error) => {
                console.log(`error = ${error}`)
            })
    }, [webcam])

    return (
        <div>
            <Container className="container">
                {loading ? (
                    <div>
                        <Spinner
                            className="spinner"
                            animation="border"
                            variant="success"
                            size="lg"
                        />
                        <h4>Loading attendance list...</h4>
                    </div>
                ) : (
                    <Webcam
                        className="webcam"
                        audio={false}
                        ref={webcam}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                    />
                )}
                {processing ? <h2>Processing...</h2> : <h2>{name}</h2>}
            </Container>
            <Container>
                {loading || processing ? null : (
                    <Button className="captureBtn" onClick={capture}>
                        Capture
                    </Button>
                )}
            </Container>
        </div>
    )
}