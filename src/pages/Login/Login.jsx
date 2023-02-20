import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import presentation from "../../assets/login-image.png";
import logo from "../../assets/Logo.svg";
import { auth } from "../../firebase";
import "./Login.scss";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const userLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Successful signin
        const user = userCredential.user;
        //Change page
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorMessage.includes("invalid-email")) {
          setError("Invalid email");
        } else if (errorMessage.includes("wrong-password")) {
          setError("Wrong password");
        } else {
          setError(errorMessage);
        }
      });
  };

  return (
    <div className="login-page">
      <img src={logo} className="login-page__logo"></img>
      <form className="login-page__form login-form__input-container">
        <h1 className="login-form__title">Welcome back</h1>
        <p className="login-form__desc">
          Feugiat magna viverra pellentesque habitant. Libero id amet nisl, tellus
          cras eleifend et in.
        </p>
        <label htmlFor="email-input" className="login-form__label">
          Email Address
        </label>
        <input
          className="login-form__input"
          type="text"
          name="email"
          id="email-input"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password-input" className="login-form__label">
          Password
        </label>
        <input
          className="login-form__input"
          type="text"
          name="password"
          id="password-input"
          onChange={(event) => setPassword(event.target.value)}
        />
        <p>{user.email}</p>
        <p>{error}</p>
        <button onClick={userLogin}>Login</button>
      </form>
      <figure className="login-form__image-container">
        <img
          src={presentation}
          alt="a background image for the login page"
          className="login-form__image"
        />
      </figure>
    </div>
  );
};

export default Login;
