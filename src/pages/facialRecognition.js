import React, { useRef, useCallback, useState, useEffect } from "react";
import { Spinner, Container } from "react-bootstrap";
import axios from "axios";
import Webcam from "react-webcam";
import '../styles/face.css'

export default function FacialRecognition() {
  const webcam = useRef(null);
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(true)

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: 'user'
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/encode_images')
        .then((res) => {
            if (res.status === 200) {
              setLoading(false)
            }
        })
        .catch((error) => {
            console.log(error.response)
        });
      })

  const capture = useCallback(() => {
    const imageSrc = webcam.current.getScreenshot();
    axios.post('http://127.0.0.1:5000/face_match', { data: imageSrc })
      .then(res => {
        console.log(`response = ${res.data}`)
        setName(res.data)
      })
      .catch(error => { console.log(`error = ${error}`) })
  },
    [webcam]
  );

  return (
    <div>
      <Container>
        {loading ? <Spinner animation="border" variant="success" size='lg' /> :
          <Webcam
            className='webcam'
            audio={false}
            ref={webcam}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints} />}
      </Container>
      <br />
      <button onClick={capture}>Capture</button>
      <h2>{name}</h2>
    </div>
  );

}