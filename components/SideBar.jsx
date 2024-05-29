import Link from "next/link";
import styles from "../styles/SideBar.css";
import Toggle from "./Toggle";
import LogoutButton from "./LogoutButton";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="Logo">
        <img src="images/Rectangle_28.webp" alt="logo calm.ly" />
      </div>
      <Toggle />
      <div className="lista">
        <ul>
          <Link href={"/"}>
            <li>
              <img
                src="/images/home icon.png"
                alt="Icon Home"
                className="icon-home"
              />
              <p className="p-home">Home</p>
            </li>
          </Link>
          <Link href="/meditation">
            <li>
              <img
                src="/images/meditation icon.png"
                alt="Icon Meditation"
                className="icon-meditation"
              />
              <p className="p-meditation">Meditation</p>
            </li>
          </Link>
          <Link href="/journaling">
            <li>
              <img
                src="/images/journaling icon.png"
                alt="Icon Journaling"
                className="icon-journaling"
              />
              <p className="p-journaling">Journaling</p>
            </li>
          </Link>
          <Link href="/timer">
            <li>
              <img
                src="/images/timer icon.png"
                alt="Icon Timer"
                className="icon-timer"
              />
              <p className="p-timer">Timer</p>
            </li>
          </Link>
          <Link href="/profile">
            <li>
              <img
                src="/images/profile icon.png"
                alt="Icon Profile"
                className="icon-profile"
              />
              <p className="p-profile">Profile</p>
            </li>
          </Link>
        </ul>

        <div className="emergency-div">
          <button className="emergency">Emergency</button>
        </div>
        {/* <div className="toggle-container">
          <input type="checkbox" id="toggle" className="toggle-input"/>
          <label className="toggle" htmlFor="toggle">
            <div className="toggle-ball"></div>
          </label>
        </div> */}

        <div>
          {/* <LogoutButton/> */}
        </div>
      </div>
    </div>
  );
}
