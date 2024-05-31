'use client';
import Link from "next/link";
import styles from "../styles/ChatPage.css";
import Chatbox from "./Chatbox";
import SideBar from "./SideBar";
import { useState, useEffect } from 'react';

export default function ChatPage() {


    const [history, setHistory] = useState([]);

    const fetchHistory = async () => {
        try {
            const response = await fetch('/api/chat');
            const data = await response.json();
            setHistory(data);
        } catch (error) {
            console.error('Error fetching chat history:', error);
        }
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    const saveMessage = async (message) => {
        try {
            await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(message),
            });
            fetchHistory();
        } catch (error) {
            console.error('Error saving message:', error);
        }
    };

    return (
        <div className="chatbox-container">
            <SideBar />
            <div className="chatbox-history-box">
                <div className="chatbox-history-title-box">
                    <h2 className="chatbox-history-title">History</h2>
                </div>
                <div className="chatbox-history-convo">
                    {history.map((msg, index) => (
                        <div key={index} className={`chatbox-message ${msg.role}`}>
                            <span className="chatbox-timestamp">{new Date(msg.timestamp).toLocaleDateString()}</span>
                            <p>{msg.text.slice(0, 50)+"..."}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="dugudadaduguduguda">
                <Chatbox onNewMessage={saveMessage}/>
            </div>
        </div>
    )
}