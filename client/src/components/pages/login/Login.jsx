import React, { useContext, useRef } from "react";
import "./Login.css";
import { loginCall } from "../../../apiCalls";
import { AuthContext } from "../../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);
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
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="25px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" disabled={isFetching}>
              {!isFetching ? (
                "Create a New Account"
              ) : (
                <CircularProgress color="white" size="25px" />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
