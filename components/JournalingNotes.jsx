import Link from "next/link"
import styles from "../styles/JournalingNotes.css"
import SideBar from "./SideBar"

export default function Journaling() {
  return (
    <div>
      <SideBar />
      <div className="note-page-box">
      
      <nav className="note-navbar">
       
      </nav>
      <section className="note-content-box">
        <div className="note-back-box">
          <div className="note-back">
            <a href="" className="note-back-y">
              <i className="fa-solid fa-chevron-left"></i>
              Back
            </a>
          </div>
        </div>
        <div className="note-main-content-box">
          <div className="note-first-row">
            <div className="note-left-text">
              <h1 className="note-daily">Daily Check-In</h1>
              <p className="note-p">Write this entry in your journal by answering the following questions:</p>
              <p className="note-p">General Well-being:</p>
              <ul className="note-ul">

                <li className="note-li">- Mood: How am I feeling today (e.g., happy, sad, anxious, calm)?</li>
                <li className="note-li">- Energy Level: How energized do I feel on a scale of 1-10 (1 being low, 10 being high)?
                </li>
                <li className="note-li">- Gratitude: What am I grateful for today? (List 2-3 things)</li>
              </ul>
              <p className="note-p">Focus on Specific Areas:</p>
              <ul className="note-ul">
                <li className="note-li">- Sleep: How well did I sleep last night? What (if anything) disrupted my sleep?</li>
                <li className="note-li">- Stress: What are my biggest stressors today?</li>
                <li className="note-li">- Accomplishments: What did I accomplish today, big or small?</li>
                <li className="note-li">- Challenges: What challenges did I face today? How can I overcome them tomorrow?</li>
              </ul>
              <p className="note-p">Self-Reflection:</p>
              <ul className="note-ul">
                <li className="note-li">- Intention: What is my intention for today? (e.g., stay focused, be patient, practice
                  gratitude)</li>
                <li className="note-li">- Learning: Did I learn anything new today?</li>
                <li className="note-li">- Quote: Is there a quote or saying that resonates with me today? Why?</li>
              </ul>
            </div>
            <div className="note-pic">
              <img src="/images/jn-bg.png" alt="photo" className="note-cover-photo" />
            </div>
          </div>
          <div className="note-book-box">
            <div className="note-write-here">
              <span className="note-write-here-text">Write here...</span>
              <button className="note-save-btn">Save</button>
            </div>

          </div>
        </div>
      </section>
    </div>
    </div>
    

  )
}