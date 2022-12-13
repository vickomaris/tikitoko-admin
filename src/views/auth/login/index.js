import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/action/auth.action";
import styles from "./login.module.css";
import banner from "../../../assets/banner.png";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(loginForm, navigate));
  };

  return (
    <main
      className={`d-flex justify-content-center align-items-center ${styles.wrapper}`}
    >
      <div className="container">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  {/* <img
                    className="col-lg-6 d-none d-lg-block"
                    src={banner}
                    alt="banner"
                  /> */}
                  <div className="col-12 d-flex flex-column justify-content-center">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user" onSubmit={handleLogin}>
                        <input
                          type="email"
                          className="mb-3 form-control form-control-user"
                          id="email"
                          name="email"
                          aria-describedby="email"
                          placeholder="Enter Email Address..."
                          onChange={handleInput}
                        />
                        <input
                          type="password"
                          className="mb-3 form-control form-control-user"
                          id="password"
                          name="password"
                          placeholder="Password"
                          onChange={handleInput}
                        />
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
