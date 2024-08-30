import styles from "../styles/Profile.css"
import SideBar from "./SideBar"
import Link from "next/link";

export default function Profile() {
  return (
    <div className="body-profile">
      <SideBar/>
      <section className="profile-page">
    <nav className="profile-navbar">
    </nav>
    <section className="profile-content-box">
      <div className="profile-pic-section-box">
        <div className="profile-pic-box">
          <img src="/images/profile-pic.png" alt="profile pic" className="profile-pic"/>
        </div>
        <div className="profile-name-box">
          <div className="profile-profile-box">
            <h2 className="profile-title">Profile</h2>
          </div>
          <div className="profile-name-box">
            <h1 className="profile-nickname">Haus</h1>
          </div>
        </div>
      </div>
      <div className="profile-password-change-box">
        <p className="profile-change-pass">Change your password</p>
        <form action="" className="profile-curr-pass">
          <label for="password" className="profile-pass">Current password</label>
          <input type="password" className="profile-curr-password"/>
        </form>
        <form action="" className="profile-new-pass">
          <label for="password" className="profile-new-passw">New password</label>
          <input type="password" className="profile-new-passww"/>
        </form>
        <div className="pass-require-box">
          <p className="profile-require-title">Your password needs to contain at least</p>
          <ul className="profile-list-box">
            <li className="profile-uppercase">1 uppercase letter</li>
            <li className="profile-spec-char">1 number or special character (example: ? ! # &)</li>
            <li className="profile-ten-char">10 characters</li>
          </ul>
          <div className="profile-repeat-pass-box">
            <form action="" className="profile-repeat-new-pass">
              <label for="password" className="profile-repeat-pass">Repeat new password</label>
              <input type="password" className="profile-new-pass-repeat"/>
            </form>
          </div>
          <div className="profile-btn-box">
            <Link href="/Home"><button className="profile-btn-save">Save new password</button></Link>
          </div>
        </div>
      </div>
    </section>
  </section>
    </div>
  );
}