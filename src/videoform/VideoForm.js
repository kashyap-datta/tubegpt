import React, { useState } from 'react';

function VideoForm(props) {
  
    const onSubmit = async (event) => {
    event.preventDefault();
    props.handleVideoSubmit(event);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        YouTube video URL:
        <input type="text" value={props.videoUrl} onChange={(event) => props.setVideoUrl(event.target.value)} />
      </label>
      <button type="submit">Fetch Video</button>
    </form>
  );
}

export default VideoForm;