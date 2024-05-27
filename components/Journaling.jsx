import Link from "next/link"
import styles from "../styles/Journaling.css"
import SideBar from "./SideBar"

export default function Journaling() {
    return (
        <div className="jn-page">
            <div class="jn-page-box">
                <SideBar/>
            <section class="jn-content-box">
                <div class="jn-first-row-box">
                    <div class="jn-pic-box">
                        <img src="/images/jn-bg.png" alt="journaling pic" class="jn-pic" />
                    </div>
                    <div class="jn-description-box">
                        <div class="jn-title-box">
                            <h1 class="jn-title">Journaling</h1>
                        </div>
                        <div class="jn-text-box">
                            <p class="jn-text">
                                This simple yet powerful tool can significantly benefit mental
                                health by providing a safe space for self-expression and
                                reflection. <br /> <br/>
                                By articulating your emotions and processing events through
                                writing, you can gain deeper insights into your thoughts and
                                behaviors, reduce stress, and enhance emotional clarity.
                                Journaling can also foster a greater sense of self-awareness,
                                help manage anxiety and depression, and promote overall mental
                                well-being by creating a structured outlet for handling life's
                                challenges.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="jn-second-row-page">
                    <div class="jn-left-content-box">
                        <div class="jn-grid-box">
                            <div class="jn-4-cards">
                                <div class="jn-card-title-box">
                                    <h2 class="jn-card-title">Emotional Processing Prompts</h2>
                                </div>
                                <div class="jn-subtitle-box-flex">
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Stress and Anxiety</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Anger and Frustration</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Happiness and Joy</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Fear and Insecurity</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Sadness and Loss</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                </div>
                            </div>
                            <div class="jn-4-cards">
                                <div class="jn-card-title-box">
                                    <h2 class="jn-card-title">Self-Reflection Prompts</h2>
                                </div>
                                <div class="jn-subtitle-box-flex">
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Daily Check-In</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Gratitude</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Personal Growth</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Achievements</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Improvement</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                </div>
                            </div>
                            <div class="jn-4-cards">
                                <div class="jn-card-title-box">
                                    <h2 class="jn-card-title">Goal Setting Prompts</h2>
                                </div>
                                <div class="jn-subtitle-box-flex">
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Short-Term Goals</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Long-Term Vision</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Bucket List</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Personal Values</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Inspiration</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                </div>
                            </div>
                            <div class="jn-4-cards">
                                <div class="jn-card-title-box">
                                    <h2 class="jn-card-title">
                                        Relationship/Social Life Prompts
                                    </h2>
                                </div>
                                <div class="jn-subtitle-box-flex">
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Support System</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Conflict Resolution</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Communication</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Boundaries</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                    <div class="jn-subtitle-box">
                                        <li class="jn-subtitle">Connection</li>
                                        <button class="jn-btn">Start Writing</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="jn-right-content-box">
                        <div class="jn-my-entries-box">
                            <h3 class="jn-my-entries">My Entries</h3>
                        </div>
                        <div class="jn-diary-box">
                            <div class="jn-subtitle-diary-box">
                                <div class="jn-prompt-box">
                                    <h4 class="jn-prompt">Prompt</h4>
                                </div>
                                <div class="jn-date-box">
                                    <h4 class="jn-date">Date</h4>
                                </div>
                            </div>
                            <div class="jn-diary-content-box">
                                <div class="jn-algum-titulo-box">
                                    <h4 class="jn-diary-title-write-box">algum titulo</h4>
                            </div>
                            <span class="jn-date-of-note">alguma data</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}