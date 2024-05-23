import Link from "next/link"
import styles from "../styles/HomePage.css"
import SideBar from "./SideBar"

export default function HomePage() {
    return (
        <div className="page">
            <SideBar/>
            <div className="main">
                <div className="moods">
                    <h1 className="wymt">What's your mood today?</h1>
                    <div className="emotions">
                    <img src="" alt="happy" />
                    <img src="" alt="sad" />
                    <img src="" alt="angry" />
                    <img src="" alt="stressed" />
                    <img src="" alt="calm" />
                    </div>
                </div>
                <div className="second-half">
                    <div className="med-track-quote">
                        <div className="quote">
                            {/* Temos de ter umas quantas frases na base de dados que mudam com cada login */}
                        </div>
                        <div className="med-track">
                            {/* Meditation tracker. Componente que depois também estará na página de meditações. */}
                        </div>
                    </div>
                    <div className="chat-div">
                        {/* Aqui vai o chat. */}
                    </div>
                </div>
            </div>
        </div>
    )
}
