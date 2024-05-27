'use client';
import { useState, useEffect } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import styles from '../styles/Chatbox.css'; // 
import SideBar from './SideBar';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);
  const [chat, setChat] = useState(null);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEN_AI_KEY; // Use NEXT_PUBLIC_ prefix for frontend environment variables
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro-latest' });

  useEffect(() => {
    const initChat = async () => {
      try {
        const chatSession = model.startChat({
          generationConfig: {
            temperature: 1,
            topP: 0.95,
            topK: 64,
            maxOutputTokens: 750,
            responseMimeType: 'text/plain',
          },
          safetySettings: [
            { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
          ],
          history: messages.map((msg) => ({ text: msg.text, role: msg.role })),
        });

        setChat(chatSession);
      } catch (error) {
        setError('An error occurred while initializing the chat session.');
      }
    };

    if (!chat) {
      initChat();
    }
  }, [model, messages, chat]);

  const handleSubmit = async (e) => {
    console.log("OLA SOU UMA FRUTA MAS V")
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue.trim(), role: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    const result = await chat.sendMessage("ola");
    const response = await result.response.text();
    console.log(response)


    try {
      const result = await chat.sendMessage(inputValue.trim());
      console.log(result);
      const assistantMessage = { text: await result.response.text(), role: 'assistant' };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      setError('An error occurred while sending the message.');
    }
  };

  return (
    // <div className="chatbox-container">
    //   <SideBar />
    //   <div className="chatbox-history-box">
    //     <div className="chatbox-history-title-box">
    //       <h2 className="chatbox-history-title">History</h2>
    //     </div>
    //     <div className="chatbox-history-convo">
    //       <div className="chatbox-date-convo-box">
    //         <p className="chatbox-date"></p>
    //       </div>
    //       <div className="chatbox-convo-box">
    //         <p className="chatbox-convo-go"></p>
    //       </div>
    //     </div>
    //   </div>

    <div className="chatbox-outside-box">
      <div className="chatbox-my">
        <h1 className="chatbox-my-therapist">My Therapist</h1>
      </div>
      <div className="chatbox-msg-balao">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>

            {message.role === `assistant` && <img src='./images/chat.png' />}
            <span>
              {message.text}
            </span>

          </div>
        ))}
      </div>
      {error && <p className="chatbox-error-msg">{error}</p>}
      <div className="chatbox-input-container">
        <form onSubmit={handleSubmit} className="chatbox-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="chatbox-input-box"
          />
          <button type="submit" className="botaoEnviar">
            <img src="/images/send-btn.png" className="chatbox-send-icon"></img>
          </button>
        </form>

      </div>
    </div>

  );
};

export default Chatbox;
