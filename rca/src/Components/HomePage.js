import React, { useEffect } from "react";
import Uni1 from "../images/uni1.jpg";
import Uni2 from "../images/uni2.jpg";
import Uni3 from "../images/uni3.jpg";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
   
  }, []);

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
     className="homeBody">
    <nav id='menu'>
  <input type='checkbox' id='responsive-menu' onclick='updatemenu()'/><label></label>
  <ul>
    <li><a href='#'>Home</a></li>
    <li><a class='dropdown-arro' href='#'>Notices</a>
      {/* <ul class='sub-menus'>
        <li><a href='#'>Notices 1</a></li>
        <li><a href='#'>Notices 2</a></li>
        <li><a href='#'>Notices 3</a></li>
        <li><a href='#'>Notices 4</a></li>
      </ul> */}
    </li>
    <li><a href='#'>Donation</a></li>
    {/* <li><a class='dropdown-arrow' href='#'>Faculty Member</a>
      <ul class='sub-menus'>
        <li><a href='#'>Faculty Member1</a></li>
        <li><a href='#'>Faculty Member2</a></li>
        <li><a href='#'>Faculty Member3</a></li>
      </ul>
    </li> */}
    <li><a href='#'>Contact Us</a></li>
  </ul>
</nav>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Uni1} className="d-block w-100 uni" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Uni2} className="d-block w-100 uni" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Uni3} className="d-block w-100 uni" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="spotlight">
        <div className="clip_path">
          <span>Spotlight</span>
        </div>
        <marquee>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi
          eveniet soluta! Dignissimos sit doloribus praesentium blanditiis
          aperiam laudantium! Voluptate facilis reprehenderit quis doloribus
          nulla cumque eveniet magnam sed delectus in nostrum quaerat amet,
          nesciunt debitis expedita exercitationem at ad repellendus quo! Ea
          totam mollitia necessitatibus dolore? Temporibus, odit optio.
        </marquee>
      </div>
      <div className="sub-head">
        <h2>Notice Update</h2>
      </div>
      <div className="container-fluid">
        <div className="row " data-aos="fade-up" data-aos-duration="1000">
          <div className="col-lg-6 notice_board1">
            <h6 className="span_text">Lates News</h6>
            <ul>
              <li>
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 notice_board2">
            <h6 className="span_text">Training News</h6>
            <ul>
              <li>
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container login_form">
        <form
          class="form_container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="title_container">
            <h3 class="title">Student Login</h3>
          </div>
          <br />
          <div class="input_container">
            <label class="input_label" for="email_field">
              User ID
            </label>

            <input
              placeholder="Enter User ID"
              title="Inpit title"
              name="input-name"
              type="text"
              class="input_field"
              id="email_field"
            />
          </div>
          <div class="input_container">
            <label class="input_label" for="password_field">
              Password
            </label>

            <input
              placeholder="Password"
              title="Inpit title"
              name="input-name"
              type="password"
              class="input_field"
              id="password_field"
            />
          </div>
          <span className="forgotPassword">
            <a href="#">
              <u>forgot password?</u>
            </a>
          </span>
          <button title="Sign In" type="submit" class="sign-in_btn">
            <span>Sign In</span>
          </button>
        </form>
      </div>
     
    </div>
  );
}
