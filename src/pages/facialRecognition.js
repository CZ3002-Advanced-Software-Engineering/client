import React,{ useRef, useCallback, useState, useEffect } from "react";
import axios from "axios";
import Webcam from "react-webcam";

export default function FacialRecognition() {
  const webcam = useRef(null);
  const[name, setName] = useState('')
  const[prepDone, setPrepDone] = useState('')

  const videoConstraints = {
    width : 640,
    height : 480,
    facingMode: 'user'
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/encode_images')
        .then((res) => setPrepDone(res.data))
        .catch(error => {console.log(`error = ${error}`)})
}, [])

  const capture = useCallback(
  () => {
    const imageSrc = webcam.current.getScreenshot();
    // console.log(`imageSrc = ${imageSrc}`)
    axios.post('http://127.0.0.1:5000/face_match', {data : imageSrc})
    .then(res => {
      console.log(`response = ${res.data}`) 
      setName(res.data)})
    .catch(error => {console.log(`error = ${error}`)})
  }, 
   [webcam]
  );
  
  return (
  <div>
    <h2>{prepDone}</h2>
    <Webcam
     audio = {false}
     height = {300}
    ref = {webcam}
    screenshotFormat = "image/jpeg"
    width = {350}
    videoConstraints = {videoConstraints}
    />
    <button onClick={capture}>Capture</button>
    <h2>{name}</h2>
  </div>
	);
  
}