import Link from "next/link";
import styles from "../styles/ChatPageHappy.css";
import Chatboxhappy from "./Chatboxhappy";
import SideBarHappy from "./SideBarHappy";

export default function ChatPage() {
    return (
        <div className="chatbox-container-happy">
            <SideBarHappy />
            <div className="chatbox-history-box-happy">
                <div className="chatbox-history-title-box">
                    <h2 className="chatbox-history-title">History</h2>
                </div>
                <div className="chatbox-history-convo">
                    <div className="chatbox-date-convo-box">
                        <p className="chatbox-date"></p>
                    </div>
                <div className="chatbox-convo-box">
                    <p className="chatbox-convo-go"></p>
                </div>
            </div>
            </div>
            <div className="dugudadaduguduguda">
                <Chatboxhappy/>
            </div>
    </div>
    )
}