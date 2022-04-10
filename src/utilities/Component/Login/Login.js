import { faBrain, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, serError] = useState();
  const [passwordShow, setPasswordShow] = useState(false);
  const navigate = useNavigate();
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [signInWithEmailAndPassword, user, loading, hooksError] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/shop");
  }

  //   render section
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type={passwordShow ? "text" : "password"}
              name="password"
              required
            />
            <button className="hiddenPassword" onClick={() => setPasswordShow(!passwordShow)}>
              <FontAwesomeIcon icon={passwordShow ? faEye : faEyeSlash} />
            </button>
          </div>
          <p style={{ color: "red" }}>{hooksError?.message}</p>
          {loading && <p>lodding...</p>}
          <input className="form-submit" type="submit" value={"Login"} />
        </form>
        <p>
          New to ema-John?{" "}
          <Link className="form-link" to={"/signup"}>
            Create an account
          </Link>
        </p>
        <div className="hr-line">
          <hr /> or <hr />
        </div>

        <button className="signInGoogle">
          <img src="https://img.icons8.com/fluency/48/000000/google-logo.png" />{" "}
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
