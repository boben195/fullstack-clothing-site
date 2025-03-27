import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { backendUrl } from "../../App";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("adminToken", response.data.token);
        setToken(response.data.token);
      } else {
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
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
