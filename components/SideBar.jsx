import Link from "next/link";
import styles from "../styles/SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="Logo">
        <img src="images/Rectangle_28.webp" alt="logo calm.ly" />
      </div>
      <div className="lista">
        <ul>
          <li>
            <img
              src="/images/home icon.png"
              alt="Icon Home"
              className="icon-home"
            />
            <p className="p-home">Home</p>
          </li>
          <li>
            <img
              src="/images/meditation icon.png"
              alt="Icon Meditation"
              className="icon-meditation"
            />
            <p className="p-meditation">Meditation</p>
          </li>
          <li>
            <img
              src="/images/journaling icon.png"
              alt="Icon Journaling"
              className="icon-journaling"
            />
            <p className="p-journaling">Journaling</p>
          </li>
          <li>
            <img
              src="/images/timer icon.png"
              alt="Icon Timer"
              className="icon-timer"
            />
            <p className="p-timer">Timer</p>
          </li>
          <li>
            <img
              src="/images/profile icon.png"
              alt="Icon Profile"
              className="icon-profile"
            />
            <p className="p-profile">Profile</p>
          </li>
        </ul>
        <div className="emergency-div">
          <button className="emergency">Emergency</button>
        </div>
        <div class="toggle-container">
          <input type="checkbox" id="toggle" class="toggle-input" />
          <label class="toggle" for="toggle">
            <div class="toggle-ball"></div>
          </label>
        </div>
        <div>
          <button className="logout">Logout</button>
        </div>
      </div>
    </div>
  );
}
