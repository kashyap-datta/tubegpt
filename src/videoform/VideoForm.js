import React, { useState } from 'react';
import './videoform.css';

function VideoForm(props) {
  
    const onSubmit = async (event) => {
    event.preventDefault();
    props.handleVideoSubmit(event);
  };

  return (

  <div className='wrapper'>
    <form onSubmit={onSubmit} className='searchbar'>
        <input type="text" className="linkfield" placeholder="Paste your YouTube URl here" value={props.videoUrl} onChange={(event) => props.setVideoUrl(event.target.value)}/>
      <button type="submit" className='analyze_button'>Analyze</button>
    </form>
  </div>
  );
}

export default VideoForm;