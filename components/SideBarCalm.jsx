"use client";
import Link from "next/link";
import "../styles/SideBarCalm.css";
import LogoutButton from "./LogoutButton";

export default function SideBar({ handleMood }) {
  const handleClick = () => {
    prompt("If you need help call 213-544-545");
  };
  return (
    <div className="sidebar-calm">
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
          <button onClick={handleClick} className="emergency">
            Emergency
          </button>
        </div>
        <div className="toggleElogout">
          <div className="div-logout">
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
