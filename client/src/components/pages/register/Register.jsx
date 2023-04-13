import React, { useRef } from "react";
import "./Register.css";
import { useNavigate } from "react-router";
import axios from "axios";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  let navigate = useNavigate();

  const handleClick = async(e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
        passwordAgain.current.setCustomValidity("Passwords don't match");
    } else {
        const user= {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
        }
        try{
            const res = await axios.post("/auth/register", user);
            console.log(user);
            navigate("/login");
        } catch(err){
            console.error(err);
        }
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginWrapperLeft">
          <h3 className="loginLogo">Social media</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social media.
          </span>
        </div>
        <div className="loginWrapperRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              type="email"
              className="loginInput"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              type="Password"
              minLength="6"
              className="loginInput"
            />
            <input
              placeholder="Confirm Password"
              required
              ref={passwordAgain}
              type="Password"
              minLength="6"
              className="loginInput"
            />
            <button className="loginButton" type="submit">Sign up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
