import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
//import '../Styles/chatbot.css';
import Layout from '../layouts/Layout';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3000'); // Ensure your backend server is running on this address.
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('connected to server');
    });

    newSocket.on('disconnect', () => {
      console.log('disconnected from server');
    });

    return () => newSocket.close();
  }, []);

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const newMessage = { text: input, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage = generateBotResponse(input);
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  const generateBotResponse = (userInput) => {
    let botResponse = '';

    // Simulate predefined bot responses
    if (userInput.toLowerCase().includes('hello')) {
      botResponse = 'Hi there! How can I help you today?';
    } else if (userInput.toLowerCase().includes('help')) {
      botResponse = 'Sure, I am here to help you. What do you need assistance with?';
    } else if (userInput.toLowerCase().includes('price')) {
      botResponse = 'The price of our product is $99.99.';
    } else if (userInput.toLowerCase().includes('time')) {
      const currentTime = new Date().toLocaleTimeString();
      botResponse = `The current time is ${currentTime}.`;
    } else if (userInput.toLowerCase().includes('date')) {
      const currentDate = new Date().toLocaleDateString();
      botResponse = `Today's date is ${currentDate}.`;
    } else if (userInput.toLowerCase().includes('weather')) {
      botResponse = 'I am not able to check the weather right now, but you can check your local weather app!';
    } else if (userInput.toLowerCase().includes('contact')) {
      botResponse = 'You can contact us at support@example.com.';
    } else {
      botResponse = 'I am not sure how to respond to that. Can you please rephrase?';
    }

    return { text: botResponse, sender: 'bot' };
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Layout>
      <div className="chatbot-container">
        <div className="chat-header">Chatbot</div>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <div className="content">{message.text}</div>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </Layout>
  );
};

export default Chatbot;