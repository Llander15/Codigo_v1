import { useState } from "react";
import "./Signup.css"; // Importing external CSS file

export default function Signup() {
  const [user, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ username: user, email: userEmail, password: pass }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="signup-section">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <label>Re-enter Password:</label>
          <input
            type="password"
            placeholder="Re-Enter Password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
