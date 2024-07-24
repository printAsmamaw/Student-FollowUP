import React from 'react'
import hame from "../../asset/images/home.png"
import logo from "../../asset/images/logo.png";
import entrance from "../../asset/images/entrance.jpeg";
import study from "../../asset/images/study.jpeg";
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div class="main-wrapper">

<header class="header">
<div class="header-fixed">
<nav class="navbar navbar-expand-lg header-nav scroll-sticky">
<div class="container">
<div class="navbar-header">
<a id="mobile_btn" href="javascript:void(0);">
<span class="bar-icon">
<span></span>
<span></span>
<span></span>
</span>
</a>
<a href="/" class="navbar-brand logo">
<img src={logo} class="img-fluid" alt="Logo"/>
</a>
</div>
<div class="main-menu-wrapper">
<div class="menu-header">
<a href="/" class="menu-logo">
<img src={logo} class="img-fluid" alt="Logo"/>
</a>
<a id="menu_close" class="menu-close" href="javascript:void(0);">
<i class="fas fa-times"></i>
</a>
</div>

</div>
<ul class="nav header-navbar-rht">
<li class="nav-item">
<Link class="nav-link header-sign" to="/login">Signin</Link>
</li>
<li class="nav-item">
<Link class="nav-link header-login" to="/signup">Signup</Link>
</li>
</ul>
</div>
</nav>
</div>
</header>


<section class="home-slide d-flex align-items-center">
<div class="container">
<div class="row ">
<div class="col-md-7">
<div class="home-slide-face aos" data-aos="fade-up">
<div class="home-slide-text ">
<h5>Welcome to </h5>
<h1>EduEthiopia</h1>
<p>Own your future learning new skills online</p>
</div>
<div class="banner-content">
<form class="form" action="https://dreamslms.dreamstechnologies.com/html/course-list.html">
<div class="form-inner">
<div class="input-group">
<i class="fa-solid fa-magnifying-glass search-icon"></i>
<input type="email" class="form-control" placeholder="Search School, Online eductional centers, etc"/>
<span class="drop-detail">
<select class="form-select select">
<option>Category</option>
<option>Angular</option>
<option>Node Js</option>
<option>React</option>
<option>Python</option>
</select>
</span>
<button class="btn btn-primary sub-btn" type="submit"><i class="fas fa-arrow-right"></i></button>
</div>
</div>
</form>
</div>
<h5>
                  Empowering students with a revolutionary EduEthiopia,
                  ensuring academic success and community growth. Bridging the
                  gap between education and society, we foster a brighter
                  future for all. Together, we transform learning experiences
                  into lifelong achievements.
                </h5>
</div>
</div>
<div class="col-md-5 d-flex align-items-center">
<div class="girl-slide-img aos" data-aos="fade-up">
<img src={hame} alt="Img"/>
</div>
</div>
</div>
</div>
</section>

<section class="section student-course">
<div class="container">
<div class="course-widget">
<div class="row">
<div class="col-lg-3 col-md-6">
<div class="course-full-width">
<div class="blur-border course-radius align-items-center aos" data-aos="fade-up">
<div class="online-course d-flex align-items-center">
<div class="course-img">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/pencil-icon.svg" alt="Img"> */}
</div>
<div class="course-inner-content">
<h4><span>10</span>K</h4>
<p>Online Courses</p>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-3 col-md-6 d-flex">
<div class="course-full-width">
<div class="blur-border course-radius aos" data-aos="fade-up">
<div class="online-course d-flex align-items-center">
<div class="course-img">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/cources-icon.svg" alt="Img"> */}
</div>
<div class="course-inner-content">
<h4><span>200</span>+</h4>
<p>Expert Tutors</p>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-3 col-md-6 d-flex">
<div class="course-full-width">
<div class="blur-border course-radius aos" data-aos="fade-up">
<div class="online-course d-flex align-items-center">
<div class="course-img">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/certificate-icon.svg" alt="Img"> */}
</div>
<div class="course-inner-content">
<h4><span>6</span>K+</h4>
<p>Ceritified Courses</p>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-3 col-md-6 d-flex">
<div class="course-full-width">
<div class="blur-border course-radius aos" data-aos="fade-up">
<div class="online-course d-flex align-items-center">
<div class="course-img">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/gratuate-icon.svg" alt="Img"> */}
</div>
<div class="course-inner-content">
<h4><span>60</span>K +</h4>
<p>Online Students</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>





<section class="section new-course">
<div class="container">
<div class="section-header aos" data-aos="fade-up">
<div class="section-sub-head">
<span>What’s we Proved</span>
<h2>Our Service</h2>
</div>
<div class="all-btn all-category d-flex align-items-center">
<a href="https://dreamslms.dreamstechnologies.com/html/course-list.html" class="btn btn-primary">All Courses</a>
</div>
</div>
<div class="section-text aos" data-aos="fade-up">
<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
</div>
<div class="course-feature">
<div class="row">
<div class="col-lg-4 col-md-6 d-flex">
<div class="course-box d-flex aos" data-aos="fade-up">
<div class="product">
<div class="product-img">
<a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">
<img class="img-fluid" alt="Img" src={entrance}/>
</a>
<div class="price">
{/* <h3>$300 <span>$99.00</span></h3> */}
</div>
</div>
<div class="product-content">
<div class="course-group d-flex">
<div class="course-group-img d-flex">
{/* <a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user1.jpg" alt="Img" class="img-fluid"></a> */}
<div class="course-name">
<h4><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">Grade 12</a></h4>
<p>Entrance exam</p>
</div>
</div>
<div class="course-share d-flex align-items-center justify-content-center">
<a href="#"><i class="fa-regular fa-heart"></i></a>
</div>
</div>
<h3 class="title instructor-text"><a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">Practice Past Exam in Online  </a></h3>
<div class="course-info d-flex align-items-center">
<div class="rating-img d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-01.svg" alt="Img"> */}
<p>last past 5+ years</p>
</div>
<div class="course-view d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-02.svg" alt="Img"> */}
<p>1000 Questions</p>
</div>
</div>
<div class="d-flex align-items-center justify-content-between">
<div class="rating m-0">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating"><span>4.0</span> (15)</span>
</div>
<div class="all-btn all-category d-flex align-items-center">
<a href="https://dreamslms.dreamstechnologies.com/html/checkout.html" class="btn btn-primary">Free</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6 d-flex">
<div class="course-box d-flex aos" data-aos="fade-up">
<div class="product">
<div class="product-img">
<a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">
<img src={entrance} alt='img'/></a>
<div class="price">
{/* <h3>$300 <span>$99.00</span></h3> */}
</div>
</div>
<div class="product-content">
<div class="course-group d-flex">
<div class="course-group-img d-flex">
{/* <a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user1.jpg" alt="Img" class="img-fluid"></a> */}
<div class="course-name">
<h4><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">Grade 8</a></h4>
<p>Metric exam</p>
</div>
</div >
<div class="course-share d-flex align-items-center justify-content-center">
<a href="#"><i class="fa-regular fa-heart"></i></a>
</div>
</div>
<h3 class="title instructor-text"><a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">Practice Past Exam in Online  </a></h3>
<div class="course-info d-flex align-items-center">
<div class="rating-img d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-01.svg" alt="Img"> */}
<p>last past 5+ years</p>
</div>
<div class="course-view d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-02.svg" alt="Img"> */}
<p>6000 Questions</p>
</div>
</div>
<div class="d-flex align-items-center justify-content-between">
<div class="rating m-0">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating"><span>4.0</span> (15)</span>
</div>
<div class="all-btn all-category d-flex align-items-center">
<a href="https://dreamslms.dreamstechnologies.com/html/checkout.html" class="btn btn-primary">Free</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6 d-flex">
<div class="course-box d-flex aos" data-aos="fade-up">
<div class="product">
<div class="product-img">
<a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">
<img src={entrance} alt='img'/>
</a>
<div class="price">
{/* <h3>$300 <span>$99.00</span></h3> */}
</div>
</div>
<div class="product-content">
<div class="course-group d-flex">
<div class="course-group-img d-flex">
{/* <a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user1.jpg" alt="Img" class="img-fluid"></a> */}
<div class="course-name">
<h4><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">Grade 6</a></h4>
<p>Ministry exam</p>
</div>
</div>
<div class="course-share d-flex align-items-center justify-content-center">
<a href="#"><i class="fa-regular fa-heart"></i></a>
</div>
</div>
<h3 class="title instructor-text"><a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">Practice Past Exam in Online  </a></h3>
<div class="course-info d-flex align-items-center">
<div class="rating-img d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-01.svg" alt="Img"> */}
<p>last past 5+ years</p>
</div>
<div class="course-view d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-02.svg" alt="Img"> */}
<p>1000 Questions</p>
</div>
</div>
<div class="d-flex align-items-center justify-content-between">
<div class="rating m-0">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating"><span>4.0</span> (15)</span>
</div>
<div class="all-btn all-category d-flex align-items-center">
<a href="https://dreamslms.dreamstechnologies.com/html/checkout.html" class="btn btn-primary">Free</a>
</div>
</div>
</div>
</div>
</div>
</div>



<div class="col-lg-4 col-md-6 d-flex">
<div class="course-box d-flex aos" data-aos="fade-up">
<div class="product">
<div class="product-img">
<a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">
<img class="img-fluid" alt="Img" src={study}/>
</a>
<div class="price">
{/* <h3>$300 <span>$99.00</span></h3> */}
</div>
</div>
<div class="product-content">
<div class="course-group d-flex">
<div class="course-group-img d-flex">
{/* <a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user3.jpg" alt="Img" class="img-fluid"></a> */}
<div class="course-name">

</div>
</div>
<div class="course-share d-flex align-items-center justify-content-center">
<a href="#"><i class="fa-regular fa-heart"></i></a>
</div>
</div>
<h3 class="title instructor-text"><a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">Discussion in online</a></h3>
<div class="course-info d-flex align-items-center">
<div class="rating-img d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-01.svg" alt="Img"> */}

</div>
</div>
<div class="d-flex align-items-center justify-content-between">

</div>
</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6 d-flex">
<div class="course-box d-flex aos" data-aos="fade-up">
<div class="product">
<div class="product-img">
<a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/course/course-06.jpg"> */}
</a>
<div class="price combo">
<h3>FREE</h3>
</div>
</div>
<div class="product-content">
<div class="course-group d-flex">
<div class="course-group-img d-flex">
{/* <a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user6.jpg" alt="Img" class="img-fluid"></a> */}
<div class="course-name">
<h4><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">Stella Johnson</a></h4>
<p>Instructor</p>
</div>
</div>
<div class="course-share d-flex align-items-center justify-content-center">
<a href="#"><i class="fa-regular fa-heart"></i></a>
</div>
</div>
<h3 class="title instructor-text"><a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">C# Developers Double Your Coding Speed with Visual Studio</a></h3>
<div class="course-info d-flex align-items-center">
<div class="rating-img d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-01.svg" alt="Img"> */}
<p>7+ Lesson</p>
</div>
<div class="course-view d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-02.svg" alt="Img"> */}
<p>7hr 30min</p>
</div>
</div>
<div class="d-flex align-items-center justify-content-between">
<div class="rating m-0">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating"><span>4.6</span> (15)</span>
</div>
<div class="all-btn all-category d-flex align-items-center">
<a href="https://dreamslms.dreamstechnologies.com/html/checkout.html" class="btn btn-primary">BUY NOW</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section class="section master-skill">
<div class="container">
<div class="row">
<div class="col-lg-7 col-md-12">
<div class="section-header aos" data-aos="fade-up">
<div class="section-sub-head">
<span>What’s New</span>
<h2>Master the skills to drive your career</h2>
</div>
</div>
<div class="section-text aos" data-aos="fade-up">
<p>Get certified, master modern tech skills, and level up your career — whether you’re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.</p>
</div>
<div class="career-group aos" data-aos="fade-up">
<div class="row">
<div class="col-lg-6 col-md-6 d-flex">
<div class="certified-group blur-border d-flex">
<div class="get-certified d-flex align-items-center">
<div class="blur-box">
<div class="certified-img ">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-1.svg" alt="Img" class="img-fluid"> */}
</div>
</div>
<p>Stay motivated with engaging instructors</p>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 d-flex">
<div class="certified-group blur-border d-flex">
<div class="get-certified d-flex align-items-center">
<div class="blur-box">
<div class="certified-img ">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-2.svg" alt="Img" class="img-fluid"> */}
</div>
</div>
<p>Keep up with in the latest in cloud</p>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 d-flex">
<div class="certified-group blur-border d-flex">
<div class="get-certified d-flex align-items-center">
<div class="blur-box">
<div class="certified-img ">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-3.svg" alt="Img" class="img-fluid"> */}
</div>
</div>
<p>Get certified with 100+ certification courses</p>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 d-flex">
<div class="certified-group blur-border d-flex">
<div class="get-certified d-flex align-items-center">
<div class="blur-box">
<div class="certified-img ">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-4.svg" alt="Img" class="img-fluid"> */}
</div>
</div>
<p>Build skills your way, from labs to courses</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-5 col-md-12 d-flex align-items-end">
<div class="career-img aos" data-aos="fade-up">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/join.png" alt="Img" class="img-fluid"> */}
</div>
</div>
</div>
</div>
</section>


<section class="section trend-course">
<div class="container">
<div class="section-header aos" data-aos="fade-up">
<div class="section-sub-head">
<span>What’s New</span>
<h2>TRENDING COURSES</h2>
</div>
<div class="all-btn all-category d-flex align-items-center">
<a href="https://dreamslms.dreamstechnologies.com/html/course-list.html" class="btn btn-primary">All Courses</a>
</div>
</div>
<div class="section-text aos" data-aos="fade-up">
<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
</div>
<div class="owl-carousel trending-course owl-theme aos" data-aos="fade-up">
<div class="course-box trend-box">
<div class="product trend-product">
<div class="product-img">
<a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/course/course-07.jpg"> */}
</a>
<div class="price">
<h3>$200 <span>$99.00</span></h3>
</div>
</div>
<div class="product-content">
<div class="course-group d-flex">
<div class="course-group-img d-flex">
{/* <a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user.jpg" alt="Img" class="img-fluid"></a> */}
<div class="course-name">
<h4><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">John Michael</a></h4>
<p>Instructor</p>
</div>
</div>
<div class="course-share d-flex align-items-center justify-content-center">
<a href="#"><i class="fa-regular fa-heart"></i></a>
</div>
</div>
<h3 class="title"><a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">Learn JavaScript and Express to become a professional JavaScript</a></h3>
<div class="course-info d-flex align-items-center">
<div class="rating-img d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-01.svg" alt="Img" class="img-fluid"> */}
<p>13+ Lesson</p>
</div>
<div class="course-view d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-02.svg" alt="Img" class="img-fluid"> */}
<p>10hr 30min</p>
</div>
</div>
<div class="d-flex align-items-center justify-content-between">
<div class="rating m-0">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating"><span>4.0</span> (15)</span>
</div>
<div class="all-btn all-category d-flex align-items-center">
<a href="https://dreamslms.dreamstechnologies.com/html/checkout.html" class="btn btn-primary">BUY NOW</a>
</div>
</div>
</div>
</div>
</div>
<div class="course-box trend-box">
<div class="product trend-product">
<div class="product-img">
<a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/course/course-08.jpg"> */}
</a>
<div class="price">
<h3>$300 <span>$99.00</span></h3>
</div>
</div>
<div class="product-content">
<div class="course-group d-flex">
<div class="course-group-img d-flex">
{/* <a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user2.jpg" alt="Img" class="img-fluid"></a> */}
<div class="course-name">
<h4><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">John Smith</a></h4>
<p>Instructor</p>
</div>
</div>
<div class="course-share d-flex align-items-center justify-content-center">
<a href="#"><i class="fa-regular fa-heart"></i></a>
</div>
</div>
<h3 class="title"><a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">Responsive Web Design Essentials HTML5 CSS3 and Bootstrap</a></h3>
<div class="course-info d-flex align-items-center">
<div class="rating-img d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-01.svg" alt="Img" class="img-fluid"> */}
<p>10+ Lesson</p>
</div>
<div class="course-view d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-02.svg" alt="Img" class="img-fluid"> */}
<p>11hr 30min</p>
</div>
</div>
<div class="d-flex align-items-center justify-content-between">
<div class="rating m-0">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating"><span>4.2</span> (15)</span>
</div>
<div class="all-btn all-category d-flex align-items-center">
<a href="https://dreamslms.dreamstechnologies.com/html/checkout.html" class="btn btn-primary">BUY NOW</a>
</div>
</div>
</div>
</div>
</div>
<div class="course-box trend-box">
<div class="product trend-product">
<div class="product-img">
<a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/course/course-05.jpg"> */}
</a>
<div class="price">
<h3>$100 <span>$99.00</span></h3>
</div>
</div>
<div class="product-content">
<div class="course-group d-flex">
<div class="course-group-img d-flex">
{/* <a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user3.jpg" alt="Img" class="img-fluid"></a> */}
<div class="course-name">
<h4><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">Lavern M.</a></h4>
<p>Instructor</p>
</div>
</div>
<div class="course-share d-flex align-items-center justify-content-center">
<a href="#"><i class="fa-regular fa-heart"></i></a>
</div>
</div>
<h3 class="title"><a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">The Complete App Design Course - UX, UI and Design Thinking</a></h3>
<div class="course-info d-flex align-items-center">
<div class="rating-img d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-01.svg" alt="Img" class="img-fluid"> */}
<p>8+ Lesson</p>
</div>
<div class="course-view d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-02.svg" alt="Img" class="img-fluid"> */}
<p>8hr 30min</p>
</div>
</div>
<div class="d-flex align-items-center justify-content-between">
<div class="rating m-0">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating"><span>4.3</span> (15)</span>
</div>
<div class="all-btn all-category d-flex align-items-center">
<a href="https://dreamslms.dreamstechnologies.com/html/checkout.html" class="btn btn-primary">BUY NOW</a>
</div>
</div>
</div>
</div>
</div>
<div class="course-box trend-box">
<div class="product trend-product">
<div class="product-img">
<a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/course/course-08.jpg"> */}
</a>
<div class="price">
<h3>$200 <span>$99.00</span></h3>
</div>
</div>
<div class="product-content">
<div class="course-group d-flex">
<div class="course-group-img d-flex">
{/* <a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user5.jpg" alt="Img" class="img-fluid"></a> */}
<div class="course-name">
<h4><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">John Smith</a></h4>
<p>Instructor</p>
</div>
</div>
<div class="course-share d-flex align-items-center justify-content-center">
<a href="#"><i class="fa-regular fa-heart"></i></a>
</div>
</div>
<h3 class="title"><a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">Build Responsive Real World Websites with HTML5 and CSS3</a></h3>
<div class="course-info d-flex align-items-center">
<div class="rating-img d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-01.svg" alt="Img" class="img-fluid"> */}
<p>13+ Lesson</p>
</div>
<div class="course-view d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-02.svg" alt="Img" class="img-fluid"> */}
<p>10hr 30min</p>
</div>
</div>
<div class="d-flex align-items-center justify-content-between">
<div class="rating m-0">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating"><span>4.0</span> (15)</span>
</div>
<div class="all-btn all-category d-flex align-items-center">
<a href="https://dreamslms.dreamstechnologies.com/html/checkout.html" class="btn btn-primary">BUY NOW</a>
</div>
</div>
</div>
</div>
</div>
<div class="course-box trend-box">
<div class="product trend-product">
<div class="product-img">
<a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/course/course-07.jpg"> */}
</a>
<div class="price">
<h3>$300 <span>$99.00</span></h3>
</div>
</div>
<div class="product-content">
<div class="course-group d-flex">
<div class="course-group-img d-flex">
{/* <a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user2.jpg" alt="Img" class="img-fluid"></a> */}
<div class="course-name">
<h4><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">John Smith</a></h4>
<p>Instructor</p>
</div>
</div>
<div class="course-share d-flex align-items-center justify-content-center">
<a href="#"><i class="fa-regular fa-heart"></i></a>
</div>
</div>
<h3 class="title"><a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">Responsive Web Design Essentials HTML5 CSS3 and Bootstrap</a></h3>
<div class="course-info d-flex align-items-center">
<div class="rating-img d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-01.svg" alt="Img" class="img-fluid"> */}
<p>10+ Lesson</p>
</div>
<div class="course-view d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-02.svg" alt="Img" class="img-fluid"> */}
<p>11hr 30min</p>
</div>
</div>
<div class="d-flex align-items-center justify-content-between">
<div class="rating m-0">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating"><span>4.5</span> (15)</span>
</div>
<div class="all-btn all-category d-flex align-items-center">
<a href="https://dreamslms.dreamstechnologies.com/html/checkout.html" class="btn btn-primary">BUY NOW</a>
</div>
</div>
</div>
</div>
</div>
<div class="course-box trend-box">
<div class="product trend-product">
<div class="product-img">
<a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/course/course-09.jpg"> */}
</a>
<div class="price">
<h3>$100 <span>$99.00</span></h3>
</div>
</div>
<div class="product-content">
<div class="course-group d-flex">
<div class="course-group-img d-flex">
{/* <a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user4.jpg" alt="Img" class="img-fluid"></a> */}
<div class="course-name">
<h4><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">Lavern M.</a></h4>
<p>Instructor</p>
</div>
</div>
<div class="course-share d-flex align-items-center justify-content-center">
<a href="#"><i class="fa-regular fa-heart"></i></a>
</div>
</div>
<h3 class="title"><a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">The Complete App Design Course - UX, UI and Design Thinking</a></h3>
<div class="course-info d-flex align-items-center">
<div class="rating-img d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-01.svg" alt="Img" class="img-fluid"> */}
<p>8+ Lesson</p>
</div>
<div class="course-view d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-02.svg" alt="Img" class="img-fluid"> */}
<p>8hr 30min</p>
</div>
</div>
<div class="d-flex align-items-center justify-content-between">
<div class="rating m-0">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating"><span>4.0</span> (15)</span>
</div>
<div class="all-btn all-category d-flex align-items-center">
<a href="https://dreamslms.dreamstechnologies.com/html/checkout.html" class="btn btn-primary">BUY NOW</a>
</div>
</div>
</div>
</div>
</div>
<div class="course-box trend-box">
<div class="product trend-product">
<div class="product-img">
<a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/course/course-08.jpg"> */}
</a>
<div class="price">
<h3>$200 <span>$99.00</span></h3>
</div>
</div>
<div class="product-content">
<div class="course-group d-flex">
<div class="course-group-img d-flex">
{/* <a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user1.jpg" alt="Img" class="img-fluid"></a> */}
<div class="course-name">
<h4><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">John Michael</a></h4>
<p>Instructor</p>
</div>
</div>
<div class="course-share d-flex align-items-center justify-content-center">
<a href="#"><i class="fa-regular fa-heart"></i></a>
</div>
</div>
<h3 class="title"><a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">Learn JavaScript and Express to become a professional JavaScript</a></h3>
<div class="course-info d-flex align-items-center">
<div class="rating-img d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-01.svg" alt="Img" class="img-fluid"> */}
<p>13+ Lesson</p>
</div>
<div class="course-view d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-02.svg" alt="Img" class="img-fluid"> */}
<p>10hr 30min</p>
</div>
</div>
<div class="d-flex align-items-center justify-content-between">
<div class="rating m-0">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating"><span>4.0</span> (15)</span>
</div>
<div class="all-btn all-category d-flex align-items-center">
<a href="https://dreamslms.dreamstechnologies.com/html/checkout.html" class="btn btn-primary">BUY NOW</a>
</div>
</div>
</div>
</div>
</div>
<div class="course-box trend-box">
<div class="product trend-product">
<div class="product-img">
<a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/course/course-09.jpg"> */}
</a>
<div class="price">
<h3>$300 <span>$99.00</span></h3>
</div>
</div>
<div class="product-content">
<div class="course-group d-flex">
<div class="course-group-img d-flex">
{/* <a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user3.jpg" alt="Img" class="img-fluid"></a> */}
<div class="course-name">
<h4><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">John Smith</a></h4>
<p>Instructor</p>
</div>
</div>
<div class="course-share d-flex align-items-center justify-content-center">
<a href="#"><i class="fa-regular fa-heart"></i></a>
</div>
</div>
<h3 class="title"><a href="https://dreamslms.dreamstechnologies.com/html/course-details.html">Responsive Web Design Essentials HTML5 CSS3 and Bootstrap</a></h3>
<div class="course-info d-flex align-items-center">
<div class="rating-img d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-01.svg" alt="Img" class="img-fluid"> */}
<p>10+ Lesson</p>
</div>
<div class="course-view d-flex align-items-center">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-02.svg" alt="Img" class="img-fluid"> */}
<p>11hr 30min</p>
</div>
</div>
<div class="d-flex align-items-center justify-content-between">
<div class="rating m-0">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating"><span>4.0</span> (15)</span>
</div>
<div class="all-btn all-category d-flex align-items-center">
<a href="https://dreamslms.dreamstechnologies.com/html/checkout.html" class="btn btn-primary">BUY NOW</a>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="feature-instructors">
<div class="section-header aos" data-aos="fade-up">
<div class="section-sub-head feature-head text-center">
<h2>Featured Instructor</h2>
<div class="section-text aos" data-aos="fade-up">
<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
</div>
</div>
</div>
<div class="owl-carousel instructors-course owl-theme aos" data-aos="fade-up">
<div class="instructors-widget">
<div class="instructors-img ">
<a href="https://dreamslms.dreamstechnologies.com/html/instructor-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user7.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">David Lee</a></h5>
<p>Web Developer</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-user-group"></i>
<span>50 Students</span>
</div>
</div>
</div>
<div class="instructors-widget">
<div class="instructors-img">
<a href="https://dreamslms.dreamstechnologies.com/html/instructor-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user8.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">Daziy Millar</a></h5>
<p>PHP Expert</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-user-group yellow"></i>
<span>50 Students</span>
</div>
</div>
</div>
<div class="instructors-widget">
<div class="instructors-img">
<a href="https://dreamslms.dreamstechnologies.com/html/instructor-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user9.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">Patricia Mendoza</a></h5>
<p>Web Developer</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-user-group violet"></i>
<span>50 Students</span>
</div>
</div>
</div>
<div class="instructors-widget">
<div class="instructors-img">
<a href="https://dreamslms.dreamstechnologies.com/html/instructor-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user10.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">Skyler Whites</a></h5>
<p>UI Designer</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-user-group orange"></i>
<span>50 Students</span>
</div>
</div>
</div>
<div class="instructors-widget">
<div class="instructors-img ">
<a href="https://dreamslms.dreamstechnologies.com/html/instructor-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user7.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">Patricia Mendoza</a></h5>
<p>Java Developer</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-user-group"></i>
<span>40 Students</span>
</div>
</div>
</div>
<div class="instructors-widget">
<div class="instructors-img">
<a href="https://dreamslms.dreamstechnologies.com/html/instructor-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user8.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">David Lee</a></h5>
<p>Web Developer</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-user-group"></i>
<span>50 Students</span>
</div>
</div>
</div>
<div class="instructors-widget">
<div class="instructors-img ">
<a href="https://dreamslms.dreamstechnologies.com/html/instructor-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user9.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">Daziy Millar</a></h5>
<p>PHP Expert</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-user-group"></i>
<span>40 Students</span>
</div>
</div>
</div>
<div class="instructors-widget">
<div class="instructors-img ">
<a href="https://dreamslms.dreamstechnologies.com/html/instructor-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user10.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">Patricia Mendoza</a></h5>
<p>Web Developer</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-user-group"></i>
<span>20 Students</span>
</div>
</div>
</div>
<div class="instructors-widget">
<div class="instructors-img ">
<a href="https://dreamslms.dreamstechnologies.com/html/instructor-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user7.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">Skyler Whites</a></h5>
<p>UI Designer</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-user-group"></i>
<span>30 Students</span>
</div>
</div>
</div>
<div class="instructors-widget">
<div class="instructors-img">
<a href="https://dreamslms.dreamstechnologies.com/html/instructor-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user8.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">Patricia Mendoza</a></h5>
<p>Java Developer</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-user-group"></i>
<span>40 Students</span>
</div>
</div>
</div>
</div>
</div>

</div>
</section>


<section class="section lead-companies">
<div class="container">
<div class="section-header aos" data-aos="fade-up">
<div class="section-sub-head feature-head text-center">
<span>Trusted By</span>
<h2>500+ Leading Universities And Companies</h2>
</div>
</div>
<div class="lead-group aos" data-aos="fade-up">
<div class="lead-group-slider owl-carousel owl-theme">
<div class="item">
<div class="lead-img">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/lead-01.png"> */}
</div>
</div>
<div class="item">
<div class="lead-img">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/lead-02.png"> */}
</div>
</div>
<div class="item">
<div class="lead-img">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/lead-03.png"> */}
</div>
</div>
<div class="item">
<div class="lead-img">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/lead-04.png"> */}
</div>
</div>
<div class="item">
<div class="lead-img">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/lead-05.png"> */}
</div>
</div>
<div class="item">
<div class="lead-img">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/lead-06.png"> */}
</div>
</div>
</div>
</div>
</div>
</section>


<section class="section share-knowledge">
<div class="container">
<div class="row">
<div class="col-md-6">
<div class="knowledge-img aos" data-aos="fade-up">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/share.png" alt="Img" class="img-fluid"> */}
</div>
</div>
<div class="col-md-6 d-flex align-items-center">
<div class="join-mentor aos" data-aos="fade-up">
<h2>Want to share your knowledge? Join us a Mentor</h2>
<p>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
<ul class="course-list">
<li><i class="fa-solid fa-circle-check"></i>Best Courses</li>
<li><i class="fa-solid fa-circle-check"></i>Top rated Instructors</li>
</ul>
<div class="all-btn all-category d-flex align-items-center">
<a href="https://dreamslms.dreamstechnologies.com/html/instructor-list.html" class="btn btn-primary">Read More</a>
</div>
</div>
</div>
</div>
</div>
</section>


<section class="section user-love">
<div class="container">
<div class="section-header white-header aos" data-aos="fade-up">
<div class="section-sub-head feature-head text-center">
<span>Check out these real reviews</span>
<h2>Users-love-us Don't take it from us.</h2>
</div>
</div>
</div>
</section>


<section class="testimonial-four">
<div class="review">
<div class="container">
<div class="testi-quotes">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/qute.png" alt="Img"> */}
</div>
<div class="mentor-testimonial lazy slider aos" data-aos="fade-up" data-sizes="50vw ">
<div class="d-flex justify-content-center">
<div class="testimonial-all d-flex justify-content-center">
<div class="testimonial-two-head text-center align-items-center d-flex">
<div class="testimonial-four-saying ">
<div class="testi-right">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/qute-01.png" alt="Img"> */}
</div>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<div class="four-testimonial-founder">
<div class="fount-about-img">
{/* <a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user1.jpg" alt="Img" class="img-fluid"></a> */}
</div>
<h3><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">Daziy Millar</a></h3>
<span>Founder of Awesomeux Technology</span>
</div>
</div>
</div>
</div>
</div>
<div class="d-flex justify-content-center">
<div class="testimonial-all d-flex justify-content-center">
<div class="testimonial-two-head text-center align-items-center d-flex">
<div class="testimonial-four-saying ">
<div class="testi-right">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/qute-01.png" alt="Img"> */}
</div>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<div class="four-testimonial-founder">
<div class="fount-about-img">
{/* <a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user3.jpg" alt="Img" class="img-fluid"></a> */}
</div>
<h3><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">john smith</a></h3>
<span>Founder of Awesomeux Technology</span>
</div>
</div>
</div>
</div>
</div>
<div class="d-flex justify-content-center">
<div class="testimonial-all d-flex justify-content-center">
<div class="testimonial-two-head text-center align-items-center d-flex">
<div class="testimonial-four-saying ">
<div class="testi-right">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/qute-01.png" alt="Img"> */}
</div>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<div class="four-testimonial-founder">
<div class="fount-about-img">
{/* <a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html"><img src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user2.jpg" alt="Img" class="img-fluid"></a> */}
</div>
<h3><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">David Lee</a></h3>
<span>Founder of Awesomeux Technology</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section class="section become-instructors aos" data-aos="fade-up">
<div class="container">
<div class="row">
<div class="col-lg-6 col-md-6 d-flex">
<div class="student-mentor cube-instuctor ">
<h4>Become An Instructor</h4>
<div class="row">
<div class="col-lg-7 col-md-12">
<div class="top-instructors">
<p>Top instructors from around the world teach millions of students on Mentoring.</p>
</div>
</div>
<div class="col-lg-5 col-md-12">
<div class="mentor-img">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/become-02.svg"> */}
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 d-flex">
<div class="student-mentor yellow-mentor">
<h4>Transform Access To Education</h4>
<div class="row">
<div class="col-lg-8 col-md-12">
<div class="top-instructors">
<p>Create an account to receive our newsletter, course recommendations and promotions.</p>
</div>
</div>
<div class="col-lg-4 col-md-12">
<div class="mentor-img">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/become-01.svg"> */}
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section class="section latest-blog">
<div class="container">
<div class="section-header aos" data-aos="fade-up">
<div class="section-sub-head feature-head text-center mb-0">
<h2>Latest Blogs</h2>
<div class="section-text aos" data-aos="fade-up">
<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
</div>
</div>
</div>
<div class="owl-carousel blogs-slide owl-theme aos" data-aos="fade-up">
<div class="instructors-widget blog-widget">
<div class="instructors-img">
<a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/blog/blog-01.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">Attract More Attention Sales And Profits</a></h5>
<p>Marketing</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-calendar-days"></i>
<span>Jun 15, 2022</span>
</div>
</div>
</div>
<div class="instructors-widget blog-widget">
<div class="instructors-img">
<a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/blog/blog-02.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">11 Tips to Help You Get New Clients</a></h5>
<p>Sales Order</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-calendar-days"></i>
<span>May 20, 2022</span>
</div>
</div>
</div>
<div class="instructors-widget blog-widget">
<div class="instructors-img">
<a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/blog/blog-03.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">An Overworked Newspaper Editor</a></h5>
<p>Design</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-calendar-days"></i>
<span>May 25, 2022</span>
</div>
</div>
</div>
<div class="instructors-widget blog-widget">
<div class="instructors-img">
<a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/blog/blog-04.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">A Solution Built for Teachers</a></h5>
<p>Seo</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-calendar-days"></i>
<span>Jul 15, 2022</span>
</div>
</div>
</div>
<div class="instructors-widget blog-widget">
<div class="instructors-img">
<a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/blog/blog-02.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">Attract More Attention Sales And Profits</a></h5>
<p>Marketing</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-calendar-days"></i>
<span>Sep 25, 2022</span>
</div>
</div>
</div>
<div class="instructors-widget blog-widget">
<div class="instructors-img">
<a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/blog/blog-03.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">An Overworked Newspaper Editor</a></h5>
<p>Marketing</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-calendar-days"></i>
<span>May 25, 2022</span>
</div>
</div>
</div>
<div class="instructors-widget blog-widget">
<div class="instructors-img">
<a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/blog/blog-04.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">A Solution Built for Teachers</a></h5>
<p>Analysis</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-calendar-days"></i>
<span>May 15, 2022</span>
</div>
</div>
</div>
<div class="instructors-widget blog-widget">
<div class="instructors-img">
<a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/blog/blog-02.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">11 Tips to Help You Get New Clients</a></h5>
<p>Development</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-calendar-days"></i>
<span>Jun 20, 2022</span>
</div>
</div>
</div>
<div class="instructors-widget blog-widget">
<div class="instructors-img">
<a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/blog/blog-03.jpg"> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">An Overworked Newspaper Editor</a></h5>
<p>Sales</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-calendar-days"></i>
<span>May 25, 2022</span>
</div>
</div>
</div>
<div class="instructors-widget blog-widget">
<div class="instructors-img">
<a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">
{/* <img class="img-fluid" alt="Img" src="https://dreamslms.dreamstechnologies.com/html/assets/img/blog/blog-04.jpg"/> */}
</a>
</div>
<div class="instructors-content text-center">
<h5><a href="https://dreamslms.dreamstechnologies.com/html/blog-list.html">A Solution Built for Teachers</a></h5>
<p>Marketing</p>
<div class="student-count d-flex justify-content-center">
<i class="fa-solid fa-calendar-days"></i>
<span>April 15, 2022</span>
</div>
</div>
</div>
</div>
<div class="enroll-group aos" data-aos="fade-up">
<div class="row ">
<div class="col-lg-4 col-md-6">
<div class="total-course d-flex align-items-center">
<div class="blur-border">
<div class="enroll-img ">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-07.svg" alt="Img" class="img-fluid"/> */}
</div>
</div>
<div class="course-count">
<h3><span class="counterUp">253,085</span></h3>
<p>STUDENTS ENROLLED</p>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="total-course d-flex align-items-center">
<div class="blur-border">
<div class="enroll-img ">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-08.svg" alt="Img" class="img-fluid"/> */}
</div>
</div>
<div class="course-count">
<h3><span class="counterUp">1,205</span></h3>
<p>TOTAL COURSES</p>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="total-course d-flex align-items-center">
<div class="blur-border">
<div class="enroll-img ">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-09.svg" alt="Img" class="img-fluid"/> */}
</div>
</div>
<div class="course-count">
<h3><span class="counterUp">127</span></h3>
<p>COUNTRIES</p>
</div>
</div>
</div>
</div>
</div>
<div class="lab-course">
<div class="section-header aos" data-aos="fade-up">
<div class="section-sub-head feature-head text-center">
<h2>Unlimited access to 360+ courses <br/>and 1,600+ hands-on labs</h2>
</div>
</div>
<div class="icon-group aos" data-aos="fade-up">
<div class="offset-lg-1 col-lg-12">
<div class="row">
<div class="col-lg-1 col-3">
<div class="total-course d-flex align-items-center">
<div class="blur-border">
<div class="enroll-img ">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-09.svg" alt="Img" class="img-fluid"/> */}
</div>
</div>
</div>
</div>
<div class="col-lg-1 col-3">
<div class="total-course d-flex align-items-center">
<div class="blur-border">
<div class="enroll-img ">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-10.svg" alt="Img" class="img-fluid"/> */}
</div>
</div>
</div>
</div>
<div class="col-lg-1 col-3">
<div class="total-course d-flex align-items-center">
<div class="blur-border">
<div class="enroll-img ">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-16.svg" alt="Img" class="img-fluid"> */}
</div>
</div>
</div>
</div>
<div class="col-lg-1 col-3">
<div class="total-course d-flex align-items-center">
<div class="blur-border">
<div class="enroll-img ">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-12.svg" alt="Img" class="img-fluid"/> */}
</div>
</div>
</div>
</div>
<div class="col-lg-1 col-3">
<div class="total-course d-flex align-items-center">
<div class="blur-border">
<div class="enroll-img ">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-13.svg" alt="Img" class="img-fluid"/> */}
</div>
</div>
</div>
</div>
<div class="col-lg-1 col-3">
<div class="total-course d-flex align-items-center">
<div class="blur-border">
<div class="enroll-img ">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-14.svg" alt="Img" class="img-fluid"/> */}
</div>
</div>
</div>
</div>
<div class="col-lg-1 col-3">
<div class="total-course d-flex align-items-center">
<div class="blur-border">
<div class="enroll-img ">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-15.svg" alt="Img" class="img-fluid"/> */}
</div>
</div>
</div>
</div>
<div class="col-lg-1 col-3">
<div class="total-course d-flex align-items-center">
<div class="blur-border">
<div class="enroll-img ">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-16.svg" alt="Img" class="img-fluid"/> */}
</div>
</div>
</div>
</div>
<div class="col-lg-1 col-3">
<div class="total-course d-flex align-items-center">
<div class="blur-border">
<div class="enroll-img ">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-17.svg" alt="Img" class="img-fluid"/> */}
</div>
</div>
</div>
</div>
<div class="col-lg-1 col-3">
<div class="total-course d-flex align-items-center">
<div class="blur-border">
<div class="enroll-img ">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-18.svg" alt="Img" class="img-fluid"/> */}
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<footer class="footer">

<div class="footer-top aos" data-aos="fade-up">
<div class="container">
<div class="row">
<div class="col-lg-4 col-md-6">

<div class="footer-widget footer-about">
<div class="footer-logo">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/logo.svg" alt="logo"/> */}
</div>
<div class="footer-about-content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris</p>
</div>
</div>

</div>
<div class="col-lg-2 col-md-6">

<div class="footer-widget footer-menu">
<h2 class="footer-title">For Instructor</h2>
<ul>
<li><a href="https://dreamslms.dreamstechnologies.com/html/instructor-profile.html">Profile</a></li>
<li><a href="https://dreamslms.dreamstechnologies.com/html/login.html">Login</a></li>
<li><a href="https://dreamslms.dreamstechnologies.com/html/register.html">Register</a></li>
<li><a href="https://dreamslms.dreamstechnologies.com/html/instructor-list.html">Instructor</a></li>
<li><a href="https://dreamslms.dreamstechnologies.com/html/instructor-dashboard.html"> Dashboard</a></li>
</ul>
</div>

</div>
<div class="col-lg-2 col-md-6">

<div class="footer-widget footer-menu">
<h2 class="footer-title">For Student</h2>
<ul>
<li><a href="https://dreamslms.dreamstechnologies.com/html/student-profile.html">Profile</a></li>
<li><a href="https://dreamslms.dreamstechnologies.com/html/login.html">Login</a></li>
<li><a href="https://dreamslms.dreamstechnologies.com/html/register.html">Register</a></li>
<li><a href="https://dreamslms.dreamstechnologies.com/html/students-list.html">Student</a></li>
<li><a href="https://dreamslms.dreamstechnologies.com/html/student-dashboard.html"> Dashboard</a></li>
</ul>
</div>

</div>
<div class="col-lg-4 col-md-6">

<div class="footer-widget footer-contact">
<h2 class="footer-title">News letter</h2>
<div class="news-letter">
<form>
<input type="text" class="form-control" placeholder="Enter your email address" name="email"/>
</form>
</div>
<div class="footer-contact-info">
<div class="footer-address">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-20.svg" alt="Img" class="img-fluid"/> */}
<p> 3556 Beech Street, San Francisco,<br/> California, CA 94108 </p>
</div>
<p>
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-19.svg" alt="Img" class="img-fluid"/> */}
<a href="https://dreamslms.dreamstechnologies.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="9afee8fffbf7e9f6f7e9daffe2fbf7eaf6ffb4f9f5f7">[email&#160;protected]</a>
</p>
<p class="mb-0">
{/* <img src="https://dreamslms.dreamstechnologies.com/html/assets/img/icon/icon-21.svg" alt="Img" class="img-fluid"/> */}
+19 123-456-7890
</p>
</div>
</div>

</div>
</div>
</div>
</div>


<div class="footer-bottom">
<div class="container">

<div class="copyright">
<div class="row">
<div class="col-md-6">
<div class="privacy-policy">
<ul>
<li><a href="https://dreamslms.dreamstechnologies.com/html/term-condition.html">Terms</a></li>
<li><a href="https://dreamslms.dreamstechnologies.com/html/privacy-policy.html">Privacy</a></li>
</ul>
</div>
</div>
<div class="col-md-6">
<div class="copyright-text">
<p class="mb-0">&copy; 2024 DreamsLMS. All rights reserved.</p>
</div>
</div>
</div>
</div>

</div>
</div>

</footer>

</div>
  )
}

export default Home