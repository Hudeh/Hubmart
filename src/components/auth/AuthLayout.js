import React from "react";
import "./login.scss";
import LoginForm from "./Login";
import SignupForm from "./SignUp";

export default function LayoutLogin() {
  return (
    <div className="layout-container">
      <div>
        <LoginForm />
      </div>
      <div style={{display:'block'}}>
      <div className='seprator1'></div>
      <div className="or">or</div>
      <div className='seprator2'></div>
      </div>
      <div>
        <SignupForm />
      </div>
    </div>
  );
}
