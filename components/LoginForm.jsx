"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Rectangle_28 from "/images/Rectangle_28.webp";
import "/styles/LoginForm.css";

import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Redireciona para a página inicial ou painel do usuário
      router.replace("/Home");
    } else {
      setError(data.error);
    }
    router.replace("/Home");
  };

  return (
    <div className="body">
      <div className="login-box">
        <h1 className="h1">LOGIN</h1>
      </div>
      <div className="wrapper">
        <form onSubmit={handleSubmit} action="POST">
          <figure className="figure">
            <Image src={Rectangle_28} alt="logo" className="logo" />
          </figure>
          <h2 className="h2">WELCOME BACK!</h2>
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
            <button type="submit" className="btn">
              LOGIN
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
