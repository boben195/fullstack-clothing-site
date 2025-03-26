import React from "react";

const Login = () => {
  return (
    <div>
      <div className="admin-container">
        <div className="admin-box">
          <h1 className="logit-title">Admin Panel</h1>
          <form>
            <div className="form-group">
              <p className="form-label">Email Adreess</p>
              <input
                type="email"
                className="form-input"
                placeholder="Email adreess"
                required
              />
            </div>
            <div className="form-group">
              <p className="form-label">Password</p>
              <input
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
