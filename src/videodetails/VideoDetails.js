import React, { useState } from 'react';
import './videodetails.css';

function VideoDetails(props) {

    return (
         <div className='video-details'> 
         <h2>{props.videoData.metadata.title}</h2> 
         <p>{props.videoData.metadata.description}</p> 
       </div> 
    )
}

export default VideoDetails; 