'use client';
import { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import styles from '../styles/Chatbox.css'; 
import SideBar from './SideBar';
import Link from 'next/link';

const Chatbox = ({ onNewMessage }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);
  const [chat, setChat] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEN_AI_KEY; 
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro-latest' });

  const chatEndRef = useRef(null);

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
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue.trim(), role: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');

    setIsLoading(true);

    

    try {
      const result = await chat.sendMessage(inputValue.trim());
      const assistantMessage = { text: await result.response.text(), role: 'assistant' };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      setError('An error occurred while sending the message.');
    } finally {
      setIsLoading(false); // Set loading to false after processing the message
    }
  };

  const [theme, setTheme] = useState('theme-default');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'theme-default' ? 'theme-default' : 'theme-default'));
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={`Chatbox ${theme}`}>
      <div className="chatbox-my">
        <div className='coco'></div>
        <h1 className="chatbox-my-therapist">My Therapist</h1>
        <Link href={"/" ? "/Chat" : "/"} className='chatbox-link'><img src='/images/icon-expand.png' alt='icon expand' className='chatbox-expand' /></Link>
      </div>
      <div className="chatbox-msg-balao">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.role === `assistant` && <img src='./images/chat.png' alt="assistant" />}
            <span>{message.text}</span>
          </div>
        ))}
        {isLoading && <div className="loading-container"><div className="loading-message"></div></div>}
        <div ref={chatEndRef} />
      </div>
      {error && <p className="chatbox-error-msg">{error}</p>}
      <div className="chatbox-input-container">
        <form onSubmit={handleSubmit} className="chatbox-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="chatbox-input-boxy"
          />
          <button type="submit" className="botaoEnviar">
            <img src="/images/send-btn.png" className="chatbox-send-icon" alt="send" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbox;
