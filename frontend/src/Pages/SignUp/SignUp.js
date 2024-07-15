import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div class="main-wrapper log-wrap">
<div class="row">

<div class="col-md-6 login-bg">
<div class="owl-carousel login-slide owl-theme">
<div class="welcome-login">
<div class="login-banner">
<img src="https://dreamslms.dreamstechnologies.com/html/assets/img/login-img.png" class="img-fluid" alt="Logo"/>
</div>
<div class="mentor-course text-center">
<h2>Welcome to <br/>DreamsLMS Courses.</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
</div>
</div>
<div class="welcome-login">
<div class="login-banner">
<img src="https://dreamslms.dreamstechnologies.com/html/assets/img/login-img.png" class="img-fluid" alt="Logo"/>
</div>
<div class="mentor-course text-center">
<h2>Welcome to <br/>DreamsLMS Courses.</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
</div>
</div>
<div class="welcome-login">
<div class="login-banner">
<img src="https://dreamslms.dreamstechnologies.com/html/assets/img/login-img.png" class="img-fluid" alt="Logo"/>
</div>
<div class="mentor-course text-center">
<h2>Welcome to <br/>DreamsLMS Courses.</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
</div>
</div>
</div>
</div>

<div class="col-md-6 login-wrap-bg">

<div class="login-wrapper">
<div class="loginbox">
<div class="img-logo">
<img src="https://dreamslms.dreamstechnologies.com/html/assets/img/logo.svg" class="img-fluid" alt="Logo"/>
<div class="back-home">
<Link href="/">Back to Home</Link>
</div>
</div>
<h1>Sign up</h1>
<form action="https://dreamslms.dreamstechnologies.com/html/login.html">
<div class="input-block">
<label class="form-control-label">Full Name</label>
<input type="text" class="form-control" placeholder="Enter your Full Name"/>
</div>
<div class="input-block">
<label class="form-control-label">Email</label>
<input type="email" class="form-control" placeholder="Enter your email address"/>
</div>
<div class="input-block">
<label class="form-control-label">Password</label>
<div class="pass-group" id="passwordInput">
<input type="password" class="form-control pass-input" placeholder="Enter your password"/>
<span class="toggle-password feather-eye"></span>
<span class="pass-checked"><i class="feather-check"></i></span>
</div>
<div class="password-strength" id="passwordStrength">
<span id="poor"></span>
<span id="weak"></span>
<span id="strong"></span>
<span id="heavy"></span>
</div>
<div id="passwordInfo"></div>
</div>
<div class="form-check remember-me">
<label class="form-check-label mb-0">
<input class="form-check-input" type="checkbox" name="remember"/> I agree to the <a href="https://dreamslms.dreamstechnologies.com/html/term-condition.html">Terms of Service</a> and <a href="https://dreamslms.dreamstechnologies.com/html/privacy-policy.html">Privacy Policy.</a>
</label>
</div>
<div class="d-grid">
<button class="btn btn-primary btn-start" type="submit">Create Account</button>
</div>
</form>
</div>
<div class="google-bg text-center">
<span><a href="#">Or sign in with</a></span>
<div class="sign-google">
<ul>
<li><a href="#"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/net-icon-01.png" class="img-fluid" alt="Logo"/> Sign In using Google</a></li>
<li><a href="#"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/net-icon-02.png" class="img-fluid" alt="Logo"/>Sign In using Facebook</a></li>
</ul>
</div>
<p class="mb-0">Already have an account? <Link href="/login">Sign in</Link></p>
</div>
</div>
</div>
</div>
</div>
  )
}

export default SignUp