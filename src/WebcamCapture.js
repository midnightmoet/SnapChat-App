import React, { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
};


function WebcamCapture() {
    const webcamRef = useRef(null);

    const capture =  useCallback(() => {

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

            <RadioButtonUncheckedIcon
                className="webcamCapture__button"
                onClick={capture}
            />
        </div>
    )
}

export default WebcamCapture;
