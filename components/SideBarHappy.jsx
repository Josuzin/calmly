import Link from "next/link";
import  "../styles/SideBarHappy.css";
import Toggle from "./Toggle";
import LogoutButton from "./LogoutButton";

export default function SideBar({ handleMood }) {
  return (
    <div className="sidebar-happy">
      <div className="Logo">
        <img src="images/Rectangle_28.webp" alt="logo calm.ly" />
      </div>
      <div className="lista">
        <ul>
          <Link href="/Home">
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
        <div className="toggleElogout">
          <div className="div-toggle">
            <Toggle handleMood={handleMood}/>
          </div>
          <div className="div-logout">
            <LogoutButton />
            </div>
        </div>
      </div>
    </div>
  );
}
