import Link from "next/link";
import styles from "../styles/ChatPageAngry.css";
import Chatboxangry from "./Chatboxangry";
import SideBarAngry from "./SideBarAngry";

export default function ChatPage() {
    return (
        <div className="chatbox-container-angry">
            <SideBarAngry />
            <div className="chatbox-history-box-angry">
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
                <Chatboxangry/>
            </div>
    </div>
    )
}