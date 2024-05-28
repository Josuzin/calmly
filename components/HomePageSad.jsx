import Link from "next/link"
import styles from "../styles/HomePageSad.css"
import SideBar from "./SideBar"

export default function HomePage() {
    return (
        <div className="page-main-main-sad">
            <SideBar />
            <div className="porra-page-flex-box">
                <section className="porra-main-content-box">
                    <div className="porra-para-flex">
                        <div className="porra-mood-box-sad">
                            <div className="porra-whats-your-mood">
                                <h1 className="porra-mood-title">
                                    What’s your mood<br/>
                                    today?
                                </h1>
                            </div>
                            <div className="porra-carinhas">
                                <div className="porra-happy">
                                    <div className="porra-happy-box">
                                        <a href="" className="porra-happy-click">
                                            <img src="/images/happy.png" alt="happy" className="porra-happy-icon"/>
                                        </a>
                                    </div>
                                    <div className="porra-happy-word">
                                        <a href="" className="porra-happy-theme">Happy</a>
                                    </div>
                                </div>
                                <div className="porra-sad">
                                    <div className="porra-sad-box">
                                        <a href="" className="porra-sad-click"> <img src="/images/sad.png" alt="sad" className="porra-sad-icon"/></a>
                                    </div>
                                    <div className="porra-sad-word">
                                        <a href="" className="porra-sad-theme">Sad</a>
                                    </div>
                                </div>
                                <div className="porra-angry">
                                    <div className="porra-angry-box">
                                        <a href="" className="porra-angry-click"><img src="/images/angry.png" alt="angry" className="porra-angry-icon"/></a>
                                    </div>
                                    <div className="porra-angry-word">
                                        <a href="" className="porra-angry-theme">Angry</a>
                                    </div>
                                </div>
                                <div className="porra-stressed">
                                    <div className="porra-stressed-box">
                                        <a href="" className="porra-stressed-click"> <img src="/images/stressed.png" alt="stressed"
                                            className="porra-stressed-icon"/></a>
                                    </div>
                                    <div className="porra-stressed-word">
                                        <a href="" className="porra-stressed-theme">Stressed</a>
                                    </div>
                                </div>
                                <div className="porra-calm">
                                    <div className="porra-calm-box">
                                        <a href="" className="porra-calm-click"><img src="/images/calm.png" alt="calm" className="porra-calm-icon"/></a>
                                    </div>
                                    <div className="porra-calm-word">
                                        <a href="" className="porra-calm-theme">Calm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="porra-sec-div">
                            <div className="porra-track-box">
                                <div className="porra-phrase-box-sad">
                                    <p className="porra-phrase">"Be the energy you wish to attract.”</p>
                                </div>
                                <div className="porra-track-sad">
                                <div className="porra-medi-track">
                                    <h3 className="porra-tracker-title">
                                        Meditation Tracker
                                    </h3>
                                </div>
                                    <div className="porra-circle">
                                        {/* <div classNameName="ellipse"> */}
                                            <div className="porra-green-face">
                                                <img src="/images/chill.png" alt="chill" className="porra-green"/>
                                            </div>
                                            <div className="porra-days">
                                                <h4 className="porra-days-text">
                                                    22 days
                                                </h4>
                                            </div>
                                            <div className="porra-streak">
                                                <h5 className="porra-streak-text">
                                                    streak
                                                </h5>
                                            </div>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="porra-chat-box">
                                <div className="porra-top-chat-box">
                                    <div className="porra-therapist-box">
                                        <h1 className="porra-therapist">My Therapist</h1>
                                    </div>
                                    <div className="porra-icon">
                                        <a href="" className="porra-click-expand"><i className="fa-solid fa-expand"></i></a>
                                    </div>
                                </div>
                                <div className="porra-middle-chat-box">
                                    <div className="porra-first-msg">
                                        <div className="porra-chat-icon">
                                            <img src="/images/chat.png" alt="chat" className="porra-chat-photo"/>
                                        </div>
                                        <div className="porra-de-msg">
                                            <p className="porra-chat-says">
                                                Hello my friend, how are you feeling today?
                                            </p>
                                        </div>
                                    </div>
                                        <div className="porra-user-msg-fim">
                                            <div className="porra-user-msg">
                                                <p className="porra-user-msg-content">
                                                    I’m tired!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                <div className="porra-send-box">
                                    <div className="porra-send-flex">
                                        <input type="text" className="porra-send-input"/>
                                        <button className="porra-send-btn">
                                            <i className="fa-solid fa-arrow-up"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
