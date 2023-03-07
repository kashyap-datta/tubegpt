import React, { useState } from 'react';
import VideoForm from './videoform/VideoForm';
import VideoDetails from './videodetails/VideoDetails';
import ChatInterface from './chat/ChatInterface';
import { ReactComponent as Logo } from './assets/Tube.GPT_logo.svg';
import './App.css';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [transcript, setTranscript] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleVideoSubmit = async (event) => {
    event.preventDefault();

    try {

      // Fetch the video details and transcript using the server API
      const response = await fetch(`http://127.0.0.1:5000/transcript?videoUrl=${videoUrl}`)
      .then((response)=>response.json()).then((data)=>{setTranscript(data)});

      const metadataresponse = await fetch(`http://127.0.0.1:5000/metadata?videoUrl=${videoUrl}`)
      .then((response)=>response.json()).then((data)=>{setVideoData(data)});

    } catch (error) {
      console.error(error);
    }
  };


  const handleQuestionSubmit = (question, answer) => {
    if (question.trim() !== '') {
      setChatHistory(prevChatHistory => [
        ...prevChatHistory, 
        { role: 'user', message: question }
      ]);
    }
    setChatHistory(prevChatHistory => [
      ...prevChatHistory, 
      { role: 'assistant', message: answer }
    ]);
    };

  return (
    <div className={`container${videoData ? ' container-analyzed' : ''}`}>
    <div className={`hero_wrapper${videoData ? ' header-container-video' : ''}`}>
       {/* logo */}
      <div className="logo"><Logo/></div>

      {/* Video form */}
      <VideoForm handleVideoSubmit={handleVideoSubmit} setVideoUrl={setVideoUrl} videoUrl={videoUrl}/>
      </div>


      {videoData &&<div className='body-container'>
       {/* Video details  */}
       {videoData && <VideoDetails videoData = {videoData}/>}
       

      {/* {transcript && <ChatInterface transcript={transcript} question={question} setQuestion = {setQuestion} setChatHistory={setChatHistory} chatHistory={chatHistory} handleChat ={handleChat} />} */}
      {transcript && <ChatInterface transcript={transcript} onQuestionSubmit={handleQuestionSubmit} chatHistory={chatHistory} />}
    </div>}
    </div>
  );
}

export default App;
