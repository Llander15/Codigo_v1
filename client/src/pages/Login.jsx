import { useState } from "react";
import "./Login.css";
import logo from "../Components/Assets/logo.png"

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email: userEmail, password: pass }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
  };

  return (
    <div className="logincontainer">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-section">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button type="submit">Login</button>
        </div>
      </form>
      <p className="signup-link">
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
}