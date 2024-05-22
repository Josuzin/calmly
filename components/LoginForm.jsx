import React from "react";
import Image from "next/image";
import Rectangle_28 from "/images/Rectangle_28.webp";
import  "/styles/LoginForm.css";


export default async function LoginForm() {
  return (
    <body>
      <div className="login-box">
        <h1>LOGIN</h1>
      </div>
      <div className="wrapper">
        <form action="">
          <figure>
            <Image src= {Rectangle_28} alt="logo" className="logo" />
          </figure>
          <h2>WELCOME BACK!</h2>
          <div className="input-box">
            <p className="e">Email</p>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-box">
            <p className="p">Password</p>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div className="btn-box">
            <button type="submit" className="btn">
              LOGIN
            </button>
          </div>
          <div className="register-link">
            <p className="acc">
              Need an account? <a href="">SIGN UP</a>
            </p>
          </div>
        </form>
      </div>
    </body>
  );
}
