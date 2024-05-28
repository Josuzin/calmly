import Link from "next/link";
import styles from "../styles/ChatPageSad.css";
import Chatboxsad from "./Chatboxsad";
import SideBar from "./SideBar";

export default function ChatPage() {
    return (
        <div className="chatbox-container-sad">
            <SideBar />
            <div className="chatbox-history-box-sad">
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
                <Chatboxsad/>
            </div>
    </div>
    )
}