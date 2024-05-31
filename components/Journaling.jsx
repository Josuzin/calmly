import Link from "next/link";
import styles from "../styles/Journaling.css";
import SideBar from "./SideBar";
import PromptList from "./PromptList";

export default function Journaling() {
  return (
    <div className="jn-page">
      <div className="jn-page-box">
        <SideBar />
        <section className="jn-content-box">
          <div className="jn-first-row-box">
            <div className="jn-pic-box">
              <img
                src="/images/jn-bg.png"
                alt="journaling pic"
                className="jn-pic"
              />
            </div>
            <div className="jn-description-box">
              <div className="jn-title-box">
                <h1 className="jn-title">Journaling</h1>
              </div>
              <div className="jn-text-box">
                <p className="jn-text">
                  This simple yet powerful tool can significantly benefit mental
                  health by providing a safe space for self-expression and
                  reflection. <br /> <br />
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
          <div className="jn-second-row-page">
            <div className="jn-left-content-box">
              <div className="jn-grid-box">
                <div className="jn-4-cards">
                  <div className="jn-card-title-box">
                    <h2 className="jn-card-title">
                      Emotional Processing Prompts
                    </h2>
                  </div>
                  <div className="jn-subtitle-box-flex">
                    {/* <PromptList /> */}
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Stress and Anxiety</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Anger and Frustration</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Happiness and Joy</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Fear and Insecurity</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Sadness and Loss</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="jn-4-cards">
                  <div className="jn-card-title-box">
                    <h2 className="jn-card-title">Self-Reflection Prompts</h2>
                  </div>
                  <div className="jn-subtitle-box-flex">
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Daily Check-In</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Gratitude</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Personal Growth</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Achievements</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Improvement</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="jn-4-cards">
                  <div className="jn-card-title-box">
                    <h2 className="jn-card-title">Goal Setting Prompts</h2>
                  </div>
                  <div className="jn-subtitle-box-flex">
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Short-Term Goals</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Long-Term Vision</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Bucket List</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Personal Values</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Inspiration</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="jn-4-cards">
                  <div className="jn-card-title-box">
                    <h2 className="jn-card-title">
                      Relationship/Social Life Prompts
                    </h2>
                  </div>
                  <div className="jn-subtitle-box-flex">
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Support System</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Conflict Resolution</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Communication</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Boundaries</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                    <div className="jn-subtitle-box">
                      <li className="jn-subtitle">- Connection</li>
                      <Link href={"/Journaling_Notes"}>
                        <button className="jn-btn">Start Writing</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="jn-right-content-box">
              <div className="jn-my-entries-box">
                <h3 className="jn-my-entries">My Entries</h3>
              </div>
              <div className="jn-diary-box">
                <div className="jn-subtitle-diary-box">
                  <div className="jn-prompt-box">
                    <h4 className="jn-prompt">Prompt</h4>
                  </div>
                  <div className="jn-date-box">
                    <h4 className="jn-date">Date</h4>
                  </div>
                </div>
                <div className="jn-diary-content-box">
                  <div className="jn-algum-titulo-box">
                    <h4 className="jn-diary-title-write-box">algum titulo</h4>
                  </div>
                  <span className="jn-date-of-note">alguma data</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
