import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      console.log(email, password);
    } catch (error) {}
  };
  return (
    <div>
      <div className="admin-container">
        <div className="admin-box">
          <h1 className="login-title">Admin Panel</h1>
          <form onSubmit={onSubmitHandler}>
            <div className="form-group">
              <p className="form-label">Email Adreess</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className="form-input"
                placeholder="Email adreess"
                required
              />
            </div>
            <div className="form-group">
              <p className="form-label">Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                className="form-input"
                placeholder="Enter password"
                required
              />
            </div>
            <button type="submit" className="form-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
