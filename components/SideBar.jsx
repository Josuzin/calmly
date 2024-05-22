import Link from "next/link"
import styles from "../styles/sidebar.css"

export default async function SideBar() {
  return (
    <div className="sidebar">
      <div className="Logo">
        <img src="images/Rectangle_28.webp" alt="logo calm.ly" />
      </div>
      <div className="lista">
        <ul>
          <li>
            <img src="/images/home icon.png" alt="Icon Home" />
            Home
          </li>
          <li>
            <img src="/images/meditation icon.png" alt="Icon Meditation" />
            Meditation
          </li>
          <li>
            <img src="/images/journaling icon.png" alt="Icon Journaling" />
            Journaling
          </li>
          <li>
            <img src="/images/timer icon.png" alt="Icon Timer" />
            Timer
          </li>
          <li>
            <img src="/images/profile icon.png" alt="Icon Profile" />
            Profile
          </li>
        </ul>
        <div className="toggle-div">
          <button></button>
        </div>
      </div>
    </div>
  )
}