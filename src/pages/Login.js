import React from "react";
import logo from "../../src/assets/logo.svg";
import eye from "../../src/assets/eye.svg";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login__section">
      <div className="company__logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="login__fields">
        <h3>Log in to your account</h3>
        <div className="get__started">
          <p>Don't have an account? </p>
          <a href="/"> Get Started</a>
        </div>

        <div className="input__field">
          <div className="email__address">
            <label>Email</label>
            <input placeholder="E.g victor.onazi@getbani.co" />
          </div>

          <div className="password">
            <label>Password</label>
            <a href="/">Forgot Password?</a>
          </div>
          <input placeholder="Password" />
          <img src={eye} alt="view password" />
        </div>
        <Link to="/dashboard">
          <button type="button" >Log in</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
