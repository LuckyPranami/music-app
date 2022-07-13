import React from "react";
import logo from "./assets/Music-App-logo1.png";
import "./Login.css";
import { loginUrl } from "./Spotify";

function Login() {
  return (
    <div className="login">
      <img src={logo} className="App-logo" alt="logo" />
      <a href={loginUrl}> Login With Spotify</a>
    </div>
  );
}

export default Login;
