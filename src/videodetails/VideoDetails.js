import React, { useState } from 'react';

function VideoDetails(props) {

    return (
         <div> 
         <h2>{props.videoData.metadata.title}</h2> 
         <p>{props.videoData.metadata.description}</p> 
       </div> 
    )
}

export default VideoDetails; 