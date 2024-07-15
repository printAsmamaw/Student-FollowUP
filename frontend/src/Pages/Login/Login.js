import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return <div class="main-wrapper log-wrap">
      <div class="row">
        <div class="col-md-6 login-bg">
          <div class="owl-carousel login-slide owl-theme">
            <div class="welcome-login">
              <div class="login-banner">
                <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/login-img.png" class="img-fluid" alt="Logo" />
              </div>
              <div class="mentor-course text-center">
                <h2>
                  Welcome to <br />DreamsLMS Courses.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div class="welcome-login">
              <div class="login-banner">
                <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/login-img.png" class="img-fluid" alt="Logo" />
              </div>
              <div class="mentor-course text-center">
                <h2>
                  Welcome to <br />DreamsLMS Courses.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div class="welcome-login">
              <div class="login-banner">
                <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/login-img.png" class="img-fluid" alt="Logo" />
              </div>
              <div class="mentor-course text-center">
                <h2>
                  Welcome to <br />DreamsLMS Courses.
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

        <div class="col-md-6 login-wrap-bg">
          <div class="login-wrapper">
            <div class="loginbox">
              <div class="w-100">
                <div class="img-logo">
                  <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/logo.svg" class="img-fluid" alt="Logo" />
                  <div class="back-home">
                    <Link to="/">Back to Home</Link>
                  </div>
                </div>
                <h1>Sign into Your Account</h1>
                <form action="/Student">
                  <div class="input-block">
                    <label class="form-control-label">Email</label>
                    <input type="email" class="form-control" placeholder="Enter your email address" />
                  </div>
                  <div class="input-block">
                    <label class="form-control-label">Password</label>
                    <div class="pass-group">
                      <input type="password" class="form-control pass-input" placeholder="Enter your password" />
                      <span class="feather-eye toggle-password" />
                    </div>
                  </div>
                  <div class="forgot">
                    <span>
                      <a class="forgot-link" href="https://dreamslms.dreamstechnologies.com/html/forgot-password.html">
                        Forgot Password ?
                      </a>
                    </span>
                  </div>
                  <div class="remember-me">
                    <label class="custom_check mr-2 mb-0 d-inline-flex remember-me">
                      {" "}Remember me
                      <input type="checkbox" name="radio" />
                      <span class="checkmark" />
                    </label>
                  </div>
                  <div class="d-grid">
                    <button class="btn btn-primary btn-start" type="submit">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="google-bg text-center">
              <span>
                <a href="#">Or sign in with</a>
              </span>
              <div class="sign-google">
                <ul>
                  <li>
                    <a href="#">
                      <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/net-icon-01.png" class="img-fluid" alt="Logo" /> Sign In using Google
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/net-icon-02.png" class="img-fluid" alt="Logo" />Sign In using Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <p class="mb-0">
                New User ? <a href="https://dreamslms.dreamstechnologies.com/html/register.html">
                  Create an Account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}

export default Login