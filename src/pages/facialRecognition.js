import React, { useRef, useCallback, useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import axios from 'axios'
import Webcam from 'react-webcam'
import '../styles/face.css'

export default function FacialRecognition() {
    const webcam = useRef(null)
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)

    const videoConstraints = {
        width: 640,
        height: 480,
        facingMode: 'user',
    }

    useEffect(() => {
        axios
            .get('http://127.0.0.1:5000/encode_images')
            .then((res) => {
                if (res.status === 200) {
                    setLoading(false)
                }
            })
            .catch((error) => {
                alert(`${error}. Please try again later.`)
            })
    })

    const capture = useCallback(() => {
        const imageSrc = webcam.current.getScreenshot()
        axios
            .post('http://127.0.0.1:5000/face_match', { data: imageSrc })
            .then((res) => {
                console.log(`response = ${res.data}`)
                setName(res.data)
            })
            .catch((error) => {
                console.log(`error = ${error}`)
            })
    }, [webcam])

    return (
        <div>
            <div className="container">
                {loading ? (
                    <Spinner
                        className="spinner"
                        animation="border"
                        variant="success"
                        size="lg"
                    />
                ) : (
                    <Webcam
                        className="webcam"
                        audio={false}
                        ref={webcam}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                    />
                )}
            </div>
            <br />
            <button onClick={capture}>Capture</button>
            <br />
            <h2>{name}</h2>
        </div>
    )
}
