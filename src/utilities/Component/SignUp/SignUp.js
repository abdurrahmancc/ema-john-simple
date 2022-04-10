import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState();
  const [passwordShow, setPasswordShow] = useState(false);
  const navigate = useNavigate();
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, hooksError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const hanleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13 && e.key === "enter") {
      handleCreateUser();
    }
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("your two password did't match");
      return;
    }
    if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/inventory");
  }
  //   render section
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
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
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm-Password</label>
            <input
              onKeyDown={handleEnterPress}
              onBlur={hanleConfirmPasswordBlur}
              type={confirmPasswordShow ? "text" : "password"}
              name="confirm-password"
              required
            />
            <button
              className="hiddenPassword"
              onClick={() => setConfirmPasswordShow(!confirmPasswordShow)}
            >
              <FontAwesomeIcon icon={confirmPasswordShow ? faEye : faEyeSlash}></FontAwesomeIcon>{" "}
            </button>
          </div>
          <p style={{ color: "red" }}>{error || hooksError?.message}</p>
          <input className="form-submit" type="submit" value={"SignUp"} />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="form-link" to={"/login"}>
            Login
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

export default SignUp;
