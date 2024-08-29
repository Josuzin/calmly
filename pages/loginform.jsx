"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Rectangle_28 from "/images/Rectangle_28.webp";
import "/styles/LoginForm.css";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpa erros anteriores
    console.log("Tentando fazer login com:", email);
    
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      
      console.log("Resultado do signIn:", result);

      if (result.error) {
        setError("Credenciais inválidas. Por favor, tente novamente.");
      } else if (result.ok) {
        console.log("Login bem-sucedido, redirecionando...");
        router.push("/Home");
      }
    } catch (error) {
      console.error("Erro durante o login:", error);
      setError("Ocorreu um erro durante o login. Por favor, tente novamente.");
    }
  };

  return (
    <div className="body">
      <div className="login-box">
        <h1>LOGIN</h1>
      </div>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <figure>
            <Image src={Rectangle_28} alt="logo" className="logo" />
          </figure>
          <h2>WELCOME BACK!</h2>
          <div className="input-box">
            <p className="e">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your email"
              required
            />
          </div>
          <div className="input-box">
            <p className="p">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Your password"
              required
            />
          </div>
          <div className="btn-box">
            <button type="submit" className="btn">
              Enter
            </button>
          </div>
          {error && <p className="error">{error}</p>}
          <div className="register-link">
            <p className="acc">
              <Link href="/forgot-password" className="signup">
                Forgot your password?
              </Link>
            </p>
            <p className="acc">
              Need an account?{" "}
              <Link href="/signup" className="signup">
                SIGN-UP
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}