import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory, Switch, Route } from "react-router-dom";

import "../login.css";
//using contextApi thing
//import { useDataLayerValue } from "../DataLayer";

const email_validation = (email) => {
  const pattern = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g;
  return pattern.test(email); //true or false
};

const username_validation = (username) => {
  const pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]*)[a-zA-Z0-9]+$/g;
  return pattern.test(username);
};

const password_validation = (password) => {
  return password.length >= 6 ? true : false;
};

function Register() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const history = useHistory();
  //for succesful messages
  const [msgCssClass, setMsgCssClass] = useState("warning-text");
  // warning of login useState
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage("");
    const name = e.target.name;
    const value = e.target.value;
    //setting the value to use state object
    setUser({ ...user, [name]: value }); // ... keeps the previous value and then stores other
  };

  // send the register request
  const register_user = (user) => {
    axios({
      method: "POST",
      url: "/user/register",
      withCredentials: true,
      data: user,
    })
      .then((res) => {
        if (res.status === 201) {
          //if user created then
          setMsgCssClass("success-text");
          setMessage(res.data + " Redirecting to login..");
          setTimeout(() => {
            history.push("/login");
          }, 4000);
        } else if (res.status === 200) {
          setMessage(res.data);
        }
      })
      .catch((e) => console.log(e));
  };

  //handle the register submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username && user.email && user.password) {
      if (username_validation(user.username)) {
        if (email_validation(user.email)) {
          if (password_validation(user.password)) {
            setMessage("Loading..");
            register_user(user);
          } else {
            setMessage("Password must be atleast 6 chars.");
          }
        } else {
          setMessage("Please enter a valid email.");
        }
      } else {
        setMessage("Username can only contain alphanumeric character.");
      }
    } else {
      setMessage("Noo! don't leave them empty :(");
    }
  };
  return (
    <div className="container">
      <h2>Register Now!</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          autoComplete="off"
          maxLength="30"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          name="username"
          className="input_cred"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          maxLength="80"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          className="input_cred"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="input_cred"
          value={user.password}
          onChange={handleChange}
        />
        <div className="register-class">
          Have an Account?{" "}
          <Link to="/login">
            <span>Login</span>
          </Link>
        </div>
        <button className="btn-signin" onClick={handleSubmit}>
          Register
        </button>
      </form>
      <p className={msgCssClass}>{message}</p>
    </div>
  );
}

function Login() {
  //contextAPI for logged in user
  //const [{ userLogged }, dispatch] = useDataLayerValue();

  const history = useHistory();
  const [msgCssClass, setMsgCssClass] = useState("warning-text");
  //taking the user info and saving into a useState
  const [user, setUser] = useState({ email: "", password: "" });

  //login request
  const login_user = (user) => {
    axios({
      method: "POST",
      url: "/user/login",
      withCredentials: true,
      data: user,
    })
      .then((res) => {
        if (res.data === "Authenticated") {
          setMsgCssClass("success-text");
          setMessage(res.data);
          history.push("/home");
          window.location.reload();
        } else {
          setMessage(res.data);
        }
      })
      .catch((e) => console.log(e));
  };

  // warning of login useState
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage("");
    const name = e.target.name;
    const value = e.target.value;
    //setting the value to use state object
    setUser({ ...user, [name]: value }); // ... keeps the previous value and then stores other
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      if (email_validation(user.email)) {
        //if true
        login_user(user);
      } else {
        setMessage("Please enter a valid email");
      }
    } else {
      setMessage("Please enter valid data!");
    }
  };

  return (
    <div className="login_back">
      <div className="container">
        <h2>Log into your Spotify</h2>
        <form>
          <input
            type="text"
            placeholder="email"
            name="email"
            className="input_cred"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input_cred"
            value={user.password}
            onChange={handleChange}
          />
          <div className="register-class">
            Don't Have an Account?{" "}
            <Link to="/register">
              <span>Register</span>
            </Link>
          </div>
          <button className="btn-signin" onClick={handleSubmit}>
            Sign in
          </button>
        </form>
        <p className={msgCssClass}>{message}</p>
      </div>
    </div>
  );
}

function DisplayButton() {
  return (
    <div className="welcome_class">
      <h1>Welcome to Spotify</h1>
      <div className="button_container">
        <Link to="/register">
          <button className="register_butt">Create Account</button>
        </Link>
        <Link to="/login">
          <button className="login_butt">Login</button>
        </Link>
      </div>
    </div>
  );
}

function Authenticator() {
  const [loc, setLoc] = useState("");
  const location = useLocation();
  useEffect(() => {
    const url = window.location.pathname;
    if (url === "/register") {
      setLoc("register");
    } else if (url === "/login") {
      setLoc("login");
    } else {
      setLoc("home");
    }
  }, [location]);
  return (
    <div className="login_back">
      {/* {loc === "register" ? <Register /> : <Login />} */}
      <Switch>
        <Route path="/" exact component={DisplayButton}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
      </Switch>
      {/* <DisplayButton /> */}
    </div>
  );
}

export default Authenticator;
