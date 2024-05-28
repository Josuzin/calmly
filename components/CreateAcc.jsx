"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Rectangle_28 from "/images/Rectangle_28.webp";
import "/styles/CreateAcc.css";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("User does not exist!");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result.error) {
      setError("invalid credentials");
    }
    if (result.status === 200) {
    }
    router.replace("/xixi");
  };

  return (
    <div className="body">
      <div className="login-box">
        <h1 className="h1-create-acc">Create Your Account </h1>
      </div>
      <div className="wrapper">
        <form onSubmit={handleSubmit} action="POST">
          <figure className="figure">
            <Image src={Rectangle_28} alt="logo" className="logo" />
          </figure>
          <h2 className="h2"></h2>
          <div className="input-box">
            <p className="p">Name</p>
            <input type="name" placeholder="Enter your name" required />
          </div>
          <div className="input-box">
            <p className="e">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-box">
            <p className="p">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="btn-box">
            <button type="submit" className="btn-create-acc">
              Create Account
            </button>
          </div>
          {error && <p className="error">{error}</p>}
          <div className="register-link">
            <p className="acc">
              Need an account?{" "}
              <a href="" className="signup">
                SIGN UP
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
