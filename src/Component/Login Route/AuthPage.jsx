import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import SyncLoader from "react-spinners/SyncLoader";
import EyeSolid from "../../assets/EyeSolid";
import EyeSlashSolid from "../../assets/EyeSlashSolid";
import { useNavigate, Navigate } from "react-router-dom";

import "./AuthPage.css";

const AuthPage = () => {
  const cookie1 = Cookies.get("userEmail");
  const cookie2 = Cookies.get("userPassword");
  if (cookie1 && cookie2) {
    return <Navigate to="/" />;
  }
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [LoginVal, setLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const cleanup = () => {
      Cookies.remove("userEmail");
      Cookies.remove("userPassword");
    };

    window.addEventListener("beforeunload", cleanup);

    return () => {
      window.removeEventListener("beforeunload", cleanup);
    };
  }, []);

  const [errorMsg, setErrorMsg] = useState({
    errorState: false,
    errormsg: "Enter All Fields...!",
  });

  const handleFormTagInputChange = (e, inputChangingParameter) => {
    if (inputChangingParameter === "username") {
      setUserName(e.target.value);
    } else if (inputChangingParameter === "userEmail") {
      setUserEmail(e.target.value);
    } else {
      setUserPassword(e.target.value);
    }
  };

  const handleFormTagCheckBox = () => {
    setCheckBox((prev) => !prev);
  };

  const settingLodinCookie = async () => {
    await Cookies.set("userEmail", userEmail);
    await Cookies.set("userPassword", userPassword);
    console.log("cookie suss");
    setIsLoading(false);
    navigate("/");
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!userName || !userPassword || !userEmail) {
      setErrorMsg({
        errorState: true,
        errormsg: "Username Password & Email are required!",
      });
      return;
    }

    setIsLoading(true);
    setUserEmail(userEmail);
    setUserPassword(userPassword);
    setUserName(userName);

    settingLodinCookie();
  };

  return isLoading ? (
    <div className="LoaderDiv">
      <SyncLoader size={10} color="#ff0b37" />
    </div>
  ) : (
    <div className="authPage">
      <div className={`authBox ${LoginVal ? "authBox-H60" : "authBox-H55"}`}>
        <div className="imgHeading_Css">
          <img
            className="Nxt_watch_logo"
            id="Nxt_watch_logo1"
            src="./weather-app.png"
            alt="Nxt Watch Logo"
          />
          <h2>Weather App</h2>
        </div>
        <form
          className="loginformTag"
          onSubmit={(e) => {
            handleSubmitForm(e);
          }}
        >
          <label htmlFor="userName">USERNAME</label>
          <input
            className="formTag_input"
            id="userName"
            type="text"
            onChange={(e) => {
              handleFormTagInputChange(e, "username");
            }}
            value={userName}
          />

          <>
            <label htmlFor="userEmail">Email</label>
            <input
              className="formTag_input"
              id="userEmail"
              type="email"
              onChange={(e) => {
                handleFormTagInputChange(e, "userEmail");
              }}
              value={userEmail}
            />
          </>

          <label htmlFor="userpassword">PASSWORD</label>
          <div className="formTag_input_withEye">
            <input
              id="userpassword"
              type={checkBox ? "text" : "password"}
              onChange={(e) => {
                handleFormTagInputChange(e, "password");
              }}
              value={userPassword}
            />
            {checkBox ? <EyeSolid /> : <EyeSlashSolid />}
            <input
              id="checkBox"
              type="checkbox"
              checked={checkBox}
              onChange={handleFormTagCheckBox}
            />
          </div>

          <button type="submit" className="formTag_Btn">
            {LoginVal ? "Sign Up" : "Login"}
          </button>
        </form>
        {errorMsg.errorState && (
          <p style={{ margin: "10px" }} className="ErrorMsg">
            {errorMsg.errormsg}
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
