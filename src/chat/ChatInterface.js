import React, { useState } from 'react';
import { ReactComponent as Icon } from '../assets/send.svg';
import './chatinterface.css';
function ChatInterface({ transcript, onQuestionSubmit, chatHistory }) {

    const [userInput, setUserInput] = useState('');

    const handleUserInput = (event) => {
      setUserInput(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Add user message to chat history
      onQuestionSubmit(userInput, '');
  
      // Send user message to server and get response
      const response = await fetch('http://localhost:8080/question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transcript: transcript, question: userInput }) 
      });
      const data = await response.json();
  
      // Add assistant response to chat history
      onQuestionSubmit('', data.message);
  
      setUserInput('');
    };
  
    return (
      <div>
        <div className="chat-history">
          {chatHistory.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              {message.message}
            </div>
          ))}
        </div>

        <div className='question_input_wrapper'>
          <form className="form_question" onSubmit={handleSubmit}>
          <input type="text" className="input_question" placeholder='ask anything!' value={userInput} onChange={handleUserInput}/>
          <button type="submit" className="question_button"><Icon className='submit_cta'/></button>
          </form>
        </div>
        
      </div>
    );
  }

export default ChatInterface; 