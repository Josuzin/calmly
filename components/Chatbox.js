'use client';
import { useState, useEffect } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import styles from '../styles/Chatbox.css'; // 

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
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue.trim(), role: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
const result = await chat.sendMessage("ola");
const response= await result.response.text();
console.log(response)
    

     try {
       const result = await chat.sendMessage(inputValue.trim());
       console.log(result);
       const assistantMessage = { text: await result.response.text(), role: 'assistant' };
       setMessages((prevMessages) => [...prevMessages, userMessage, assistantMessage]);
     } catch (error) {
       setError('An error occurred while sending the message.');
     }
  };

  return (
    <div className={styles.chatbox}>
      <div className={styles.messageList}>
        {messages.map((message, index) => (
          <div key={index} className={`${styles.message} ${message.role}`}>
            <strong>{message.role}: </strong>
            {message.text}
          </div>
        ))}
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.inputField}
          placeholder="Digite sua mensagem aqui..."
        />
        <button type="submit" className={styles.sendButton}>Enviar</button>
      </form>
    </div>
  );
};

export default Chatbox;
