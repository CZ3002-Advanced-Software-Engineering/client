import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button, Container, Spinner } from 'react-bootstrap'
import { SyncLoader } from 'react-spinners'
import axios from 'axios'
import Webcam from 'react-webcam'
import { useSelector } from 'react-redux'
import '../styles/FacialRecognition.css'

/** Page for taking attendance with facial recognition */
export default function FacialRecognition() {
    const webcam = useRef(null)

    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)
    const [processing, setProcessing] = useState(false)

    const { course, index } = useSelector((state) => state.selectedAttendance)

    const videoConstraints = {
        width: 640,
        height: 480,
        facingMode: 'user',
    }

    useEffect(() => {
        axios
            .get(
                `http://127.0.0.1:5000/take_attendance/face?course=${course}&group=${index}`
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

    /** Captures webcam image and sends it to backend for matching */
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
                        <SyncLoader
                            size={15}
                            margin={2}
                            color="#01BF71"
                            css={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '100px',
                            }}
                        />
                        <h3>Loading attendance list...</h3>
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
