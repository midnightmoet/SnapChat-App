import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectCameraImage, resetCameraImage } from './features/cameraSlice';
import './Preview.css';
import CloseIcon from "@material-ui/icons/Close";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import CreateIcon from "@material-ui/icons/Create";
import NoteIcon from "@material-ui/icons/Note";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CropIcon from "@material-ui/icons/Crop";
import TimerIcon from "@material-ui/icons/Timer";
import SendIcon from "@material-ui/icons/Send";
import { v4 as uuid } from "uuid";
import { storage } from "./firebase";

function Preview() {
    const cameraImage = useSelector(selectCameraImage);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!cameraImage) {
            history.replace('/');
        }
    }, [cameraImage, history]);

    const closePreview = () => {
        dispatch(resetCameraImage());
    };

    const sendPost = () => {
        const id = uuid();
        const uploadTask = storage.ref(`posts/${id}`);
    };

    return (
        <div className="preview">
            <CloseIcon onClick={closePreview} className="preview-close"/>
            <div className="preview-toolbarRight">
                <TextFieldsIcon />
                <CreateIcon />
                <NoteIcon />
                <MusicNoteIcon />   
                <AttachFileIcon />
                <CropIcon />
                <TimerIcon />
            </div>
            <img src={cameraImage} alt="preview" />
            <div onClick={sendPost}className="preview-footer">
                <h2>Send Now</h2>
                <SendIcon fontSize="small" className="preview-sendIcon" />
            </div>
        </div>
    )
}

export default Preview;
