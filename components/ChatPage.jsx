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

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <div className="chatbox-container">
            <SideBar />
            <div className="chatbox-history-box">
                <div className="chatbox-history-title-box">
                    <h2 className="chatbox-history-title">History</h2>
                </div>
                <div className="chatbox-history-convo">
                    {/* {history.slice().reverse().map((msg, index) => (
                        <div key={index} className={`chatbox-message ${msg.role}`}>
                            <span className="chatbox-timestamp">{new Date(msg.timestamp).toLocaleDateString()}</span>
                            <div className="chatbox-msg-history-rectangle">
                                <p>{msg.text.length <= 15 ? msg.text : msg.text.slice(0, 50) + "..."}</p>
                            </div>

                        </div>
                    ))} */}
                    {history.slice().reverse().map((msg, index) => {
                        const currentDate = formatDate(msg.timestamp);
                        const previousDate = index > 0 ? formatDate(history.slice().reverse()[index - 1].timestamp) : null;

                        return (
                            <div key={index} className={`chatbox-message ${msg.role}`} style={{ marginTop: currentDate !== previousDate ? '3rem' : '0' }}>
                                <span className="chatbox-timestamp">{currentDate}</span>
                                <div className="chatbox-msg-history-rectangle">
                                    <p>{msg.text.length <= 15 ? msg.text : `${msg.text.slice(0, 50)}...`}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="dugudadaduguduguda">
                <Chatbox onNewMessage={saveMessage} />
            </div>
        </div>
    )
}