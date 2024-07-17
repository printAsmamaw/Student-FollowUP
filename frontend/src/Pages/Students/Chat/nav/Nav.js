import React, { Component } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return <div className="nav">
        <div class="header-fixed">
          <nav class="navbar navbar-expand-lg header-nav scroll-sticky">
            <div class="container">
              <div class="navbar-header">
                <a id="mobile_btn" href="javascript:void(0);">
                  <span class="bar-icon">
                    <span />
                    <span />
                    <span />
                  </span>
                </a>
                <a href="https://dreamslms.dreamstechnologies.com/html/index.html" class="navbar-brand logo">
                  <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/logo.svg" class="img-fluid" alt="Logo" />
                </a>
              </div>
              <div class="main-menu-wrapper">
                <div class="menu-header">
                  <a href="https://dreamslms.dreamstechnologies.com/html/index.html" class="menu-logo">
                    <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/logo.svg" class="img-fluid" alt="Logo" />
                  </a>
                  <a id="menu_close" class="menu-close" href="javascript:void(0);">
                    <i class="fas fa-times" />
                  </a>
                </div>
                <ul class="main-nav">
                  <li class="has-submenu active">
                    <a class href="#">
                      Home <i class="fas fa-chevron-down" />
                    </a>
                  </li>
                  <li class="has-submenu">
                    <a href="#">
                      Attendance <i class="fas fa-chevron-down" />
                    </a>
                  </li>
                  <li class="has-submenu">
                    <Link to="/chat">
                      Chat <i class="fas fa-chevron-down" />
                    </Link>
                  </li>
                  <li class="has-submenu">
                    <a href="#">
                      Questions <i class="fas fa-chevron-down" />
                    </a>
                  </li>
                  <li class="has-submenu">
                    <a href="#">
                      News <i class="fas fa-chevron-down" />
                    </a>
                  </li>
                  <li class="login-link">
                    <a href="https://dreamslms.dreamstechnologies.com/html/login.html">
                      Login / Signup
                    </a>
                  </li>
                </ul>
              </div>
              <ul class="nav header-navbar-rht">
                <li class="nav-item user-nav">
                  <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown">
                    <span class="user-img">
                      <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user16.jpg" alt="Img" />
                      <span class="status online" />
                    </span>
                  </a>
                  <div class="users dropdown-menu dropdown-menu-right" data-popper-placement="bottom-end">
                    <div class="user-header">
                      <div class="avatar avatar-sm">
                        <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user16.jpg" alt="User Image" class="avatar-img rounded-circle" />
                      </div>
                      <div class="user-text">
                        <h6>Rolands R</h6>
                        <p class="text-muted mb-0">Student</p>
                      </div>
                    </div>
                    <a class="dropdown-item" href="https://dreamslms.dreamstechnologies.com/html/student-dashboard.html">
                      <i class="feather-home me-1" /> Dashboard
                    </a>
                    <a class="dropdown-item" href="https://dreamslms.dreamstechnologies.com/html/student-settings.html">
                      <i class="feather-user me-1" /> Profile
                    </a>
                    <a class="dropdown-item" href="https://dreamslms.dreamstechnologies.com/html/setting-student-subscription.html">
                      <i class="feather-star me-1" /> Subscription
                    </a>
                    <div class="dropdown-item night-mode">
                      <span>
                        <i class="feather-moon me-1" /> Night Mode{" "}
                      </span>
                      <div class="form-check form-switch check-on m-0">
                        <input class="form-check-input" type="checkbox" id="night-mode" />
                      </div>
                    </div>
                    <a class="dropdown-item" href="https://dreamslms.dreamstechnologies.com/html/index.html">
                      <i class="feather-log-out me-1" /> Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>;
  }
}
