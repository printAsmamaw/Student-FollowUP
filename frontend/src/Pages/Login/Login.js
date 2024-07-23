import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/Student/login', {
        userName,
        Password: password,  
      });

      console.log(response.data);
      if (response.data.status === 'Login successful') {
        localStorage.setItem('userId', response.data.userId);

        navigate('/student');  // Navigate to /student route
      }
    } catch (err) {
      console.error(err);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="main-wrapper log-wrap">
      <div className="row">
        <div className="col-md-6 login-bg">
          <div className="owl-carousel login-slide owl-theme">
            <div className="welcome-login">
              <div className="login-banner">
                <img
                  src="https://dreamslms.dreamstechnologies.com/html/assets/img/login-img.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>
              <div className="mentor-course text-center">
                <h2>
                  Welcome to <br />
                  DreamsLMS Courses.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="welcome-login">
              <div className="login-banner">
                <img
                  src="https://dreamslms.dreamstechnologies.com/html/assets/img/login-img.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>
              <div className="mentor-course text-center">
                <h2>
                  Welcome to <br />
                  DreamsLMS Courses.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="welcome-login">
              <div className="login-banner">
                <img
                  src="https://dreamslms.dreamstechnologies.com/html/assets/img/login-img.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>
              <div className="mentor-course text-center">
                <h2>
                  Welcome to <br />
                  DreamsLMS Courses.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 login-wrap-bg">
          <div className="login-wrapper">
            <div className="loginbox">
              <div className="w-100">
                <div className="img-logo">
                  <img
                    src="https://dreamslms.dreamstechnologies.com/html/assets/img/logo.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                  <div className="back-home">
                    <Link to="/">Back to Home</Link>
                  </div>
                </div>
                <h1>Sign into Your Account</h1>
                <form onSubmit={handleLogin}>
                  <div className="input-block">
                    <label className="form-control-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your username"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="input-block">
                    <label className="form-control-label">Password</label>
                    <div className="pass-group">
                      <input
                        type="password"
                        className="form-control pass-input"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span className="feather-eye toggle-password" />
                    </div>
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <div className="forgot">
                    <span>
                      <a
                        className="forgot-link"
                        href="https://dreamslms.dreamstechnologies.com/html/forgot-password.html"
                      >
                        Forgot Password ?
                      </a>
                    </span>
                  </div>
                  <div className="remember-me">
                    <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                      Remember me
                      <input type="checkbox" name="radio" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-start" type="submit">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="google-bg text-center">
              <span>
                <a href="#">Or sign in with</a>
              </span>
              <div className="sign-google">
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="https://dreamslms.dreamstechnologies.com/html/assets/img/net-icon-01.png"
                        className="img-fluid"
                        alt="Logo"
                      />
                      Sign In using Google
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://dreamslms.dreamstechnologies.com/html/assets/img/net-icon-02.png"
                        className="img-fluid"
                        alt="Logo"
                      />
                      Sign In using Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <p className="mb-0">
                New User ?{' '}
                <a href="https://dreamslms.dreamstechnologies.com/html/register.html">
                  Create an Account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;