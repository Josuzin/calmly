import Link from "next/link";
import styles from "../styles/HomePageCalm.css";
import SideBarCalm from "./SideBarCalm";

export default function HomePage() {
  return (
    <div className="page-main-main-calm">
      <SideBarCalm />
      <div class="porra-page-flex-box">
        <section class="porra-main-content-box">
          <div class="porra-para-flex">
            <div class="porra-mood-box-calm">
              <div class="porra-whats-your-mood">
                <h1 class="porra-mood-title-calm">
                  What’s your mood
                  <br />
                  today?
                </h1>
              </div>
              <div class="porra-carinhas">
                <div class="porra-happy">
                  <div class="porra-happy-box">
                    <a href="" class="porra-happy-click">
                      <img
                        src="/images/happy.png"
                        alt="happy"
                        class="porra-happy-icon"
                      />
                    </a>
                  </div>
                  <div class="porra-happy-word">
                    <a href="" class="porra-happy-theme">
                      Happy
                    </a>
                  </div>
                </div>
                <div class="porra-sad">
                  <div class="porra-sad-box">
                    <a href="" class="porra-sad-click">
                      {" "}
                      <img
                        src="/images/sad.png"
                        alt="sad"
                        class="porra-sad-icon"
                      />
                    </a>
                  </div>
                  <div class="porra-sad-word">
                    <a href="" class="porra-sad-theme">
                      Sad
                    </a>
                  </div>
                </div>
                <div class="porra-angry">
                  <div class="porra-angry-box">
                    <a href="" class="porra-angry-click">
                      <img
                        src="/images/angry.png"
                        alt="angry"
                        class="porra-angry-icon"
                      />
                    </a>
                  </div>
                  <div class="porra-angry-word">
                    <a href="" class="porra-angry-theme">
                      Angry
                    </a>
                  </div>
                </div>
                <div class="porra-stressed">
                  <div class="porra-stressed-box">
                    <a href="" class="porra-stressed-click">
                      {" "}
                      <img
                        src="/images/stressed.png"
                        alt="stressed"
                        class="porra-stressed-icon"
                      />
                    </a>
                  </div>
                  <div class="porra-stressed-word">
                    <a href="" class="porra-stressed-theme">
                      Stressed
                    </a>
                  </div>
                </div>
                <div class="porra-calm">
                  <div class="porra-calm-box">
                    <a href="" class="porra-calm-click">
                      <img
                        src="/images/calm.png"
                        alt="calm"
                        class="porra-calm-icon"
                      />
                    </a>
                  </div>
                  <div class="porra-calm-word">
                    <a href="" class="porra-calm-theme">
                      Calm
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="porra-sec-div">
              <div class="porra-track-box">
                <div class="porra-phrase-box-calm">
                  <p class="porra-phrase">
                    "Be the energy you wish to attract.”
                  </p>
                </div>
                <div class="porra-track-calm">
                  <div class="porra-medi-track">
                    <h3 class="porra-tracker-title">Meditation Tracker</h3>
                  </div>
                  <div class="porra-circle">
                    {/* <div className="ellipse"> */}
                    <div class="porra-green-face">
                      <img
                        src="/images/chill.png"
                        alt="chill"
                        class="porra-green"
                      />
                    </div>
                    <div class="porra-days">
                      <h4 class="porra-days-text">22 days</h4>
                    </div>
                    <div class="porra-streak">
                      <h5 class="porra-streak-text">streak</h5>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
              <div class="porra-chat-box">
                <div class="porra-top-chat-box">
                  <div class="porra-therapist-box">
                    <h1 class="porra-therapist">My Therapist</h1>
                  </div>
                  <div class="porra-icon">
                    <a href="" class="porra-click-expand">
                      <i class="fa-solid fa-expand"></i>
                    </a>
                  </div>
                </div>
                <div class="porra-middle-chat-box">
                  <div class="porra-first-msg">
                    <div class="porra-chat-icon">
                      <img
                        src="/images/chat.png"
                        alt="chat"
                        class="porra-chat-photo"
                      />
                    </div>
                    <div class="porra-de-msg">
                      <p class="porra-chat-says">
                        Hello my friend, how are you feeling today?
                      </p>
                    </div>
                  </div>
                  <div class="porra-user-msg-fim">
                    <div class="porra-user-msg">
                      <p class="porra-user-msg-content">I’m tired!</p>
                    </div>
                  </div>
                </div>
                <div class="porra-send-box">
                  <div class="porra-send-flex">
                    <input type="text" class="porra-send-input" />
                    <button class="porra-send-btn-calm">
                      <i class="fa-solid fa-arrow-up"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
