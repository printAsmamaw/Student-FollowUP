import React, { useState } from 'react';
import logo from "../../asset/images/logo.png";
import login from "../../asset/images/login.png";
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

  return <div className="main-wrapper log-wrap">
      <div className="row">
        <div className="col-md-6 login-bg">
          <div className="owl-carousel login-slide owl-theme">
            <div className="welcome-login">
              <div className="login-banner">
                <a href="/" class="navbar-brand logo">
                  <img className='text-center' src={login}  alt="Logo" />
                </a>
              </div>
              <div className="mentor-course text-center justify">
                <h2>
                  Welcome to <br />
                  EduEthiopia
                </h2>
                <h5>
                  Empowering students with a revolutionary EduEthiopia,
                  ensuring academic success and community growth. Bridging the
                  gap between education and society, we foster a brighter
                  future for all. Together, we transform learning experiences
                  into lifelong achievements.
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 login-wrap-bg">
          <div className="login-wrapper">
            <div className="loginbox">
              <div className="w-100">
                <div className="img-logo">
                  <a href="/" class="navbar-brand logo">
                    <img src={logo} class="img-fluid" alt="Logo" />
                  </a>
                  <div className="back-home">
                    <Link to="/">Back to Home</Link>
                  </div>
                </div>
                <h1>Sign into Your Account</h1>
                <form onSubmit={handleLogin}>
                  <div className="input-block">
                    <label className="form-control-label">Username</label>
                    <input type="text" className="form-control" placeholder="Enter your username" value={userName} onChange={e => setUserName(e.target.value)} />
                  </div>
                  <div className="input-block">
                    <label className="form-control-label">Password</label>
                    <div className="pass-group">
                      <input type="password" className="form-control pass-input" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
                      <span className="feather-eye toggle-password" />
                    </div>
                  </div>
                  {error && <p className="text-danger">
                      {error}
                    </p>}
                  <div className="forgot">
                    <span>
                      <a className="forgot-link" href="https://dreamslms.dreamstechnologies.com/html/forgot-password.html">
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
          </div>
        </div>
      </div>
    </div>;
}

export default Login;