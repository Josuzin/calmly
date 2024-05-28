import Link from "next/link";
import styles from "../styles/Toggle.css";

export default function SideBar() {
  return (
    <div className="sidebar-toggle">
      <div className="toggle-container">
        <input type="checkbox" id="toggle" className="toggle-input" />
        <label className="toggle" htmlFor="toggle">
          <div className="toggle-ball"></div>
        </label>
      </div>
    </div>
  );
}
