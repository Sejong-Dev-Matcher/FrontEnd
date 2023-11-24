import React, { useState } from "react";
import "../css/LoginSignUp.css";
import Footer from "../components/Footer";
const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="main_box">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={process.env.PUBLIC_URL + "/images/person.png"} alt="" />
            <input type="text" placeholder="Student Id" />
          </div>

          <div className="input">
            <img src={process.env.PUBLIC_URL + "/images/password.png"} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;
