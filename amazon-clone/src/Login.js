import React from "react";
import { Link, useHistory } from "react-router-dom";
//
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link>
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email:</h5>
          <input type="text" />
          <h5>Password:</h5>
          <input type="text" />
          <button>Sign in</button>
        </form>

        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

        <button>Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
