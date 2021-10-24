import React, { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
};


function WebcamCapture() {
    const webcamRef = useRef(null);
   
    const capture =  useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        //setImage(imageSrc);
    }, [webcamRef]);

    return (
        <div className="webcamCapture">
            <Webcam 
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
            />
            <button 
                onClick={capture} 
                fontSize="large"
            >
                Capture photo
            </button>
            

        </div>
    )
}

export default WebcamCapture;
