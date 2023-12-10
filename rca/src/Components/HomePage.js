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
    <li><a href='#'>Newss</a></li>
    <li><a href='#'>Donation</a></li>
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
          News-1  -  News-2  -  News-3  -  News-3  -  News-5
          News-6  -  News-7  -  News-8  -  News-9  -  News-10
        </marquee>
      </div>
      {/* <div className="sub-head">
        <h2>News Update</h2>
      </div> */}
      <div className="container-fluid">
        <div className="row " data-aos="fade-up" data-aos-duration="1000">
          <div className="col-lg-4 notice_board1">
            <h6 className="span_text">Latest News</h6>
            <div className="new_list">
            <ul>
              <li>
                <a href="#">News-1</a>
              </li>
              <li>
                <a href="#">News-2</a>
              </li>
              <li>
                <a href="#">News-3</a>
              </li>
              <li>
                <a href="#">News-4</a>
              </li>
              <li>
                <a href="#">News-5</a>
              </li>
              <li>
                <a href="#">News-6</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">News-1</a>
              </li>
              <li>
                <a href="#">News-2</a>
              </li>
              <li>
                <a href="#">News-3</a>
              </li>
              <li>
                <a href="#">News-4</a>
              </li>
              <li>
                <a href="#">News-5</a>
              </li>
              <li>
                <a href="#">News-6</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">News-1</a>
              </li>
              <li>
                <a href="#">News-2</a>
              </li>
              <li>
                <a href="#">News-3</a>
              </li>
              <li>
                <a href="#">News-4</a>
              </li>
              <li>
                <a href="#">News-5</a>
              </li>
              <li>
                <a href="#">News-6</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">News-1</a>
              </li>
              <li>
                <a href="#">News-2</a>
              </li>
              <li>
                <a href="#">News-3</a>
              </li>
              <li>
                <a href="#">News-4</a>
              </li>
              <li>
                <a href="#">News-5</a>
              </li>
              <li>
                <a href="#">News-6</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
              <li>
                <a href="#">News-7</a>
              </li>
            </ul>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="form">
            <h5>Student Login</h5>
            <form action=""className="student_form">
            <div className="u_id">
              <label htmlFor="userID">Student ID</label>
              <input type="text" id="userID"/></div>
              <br />
              <div className="u_id">
              <label htmlFor="password">Password</label>
              <input type="password"id="password" /></div>
              <br />
              <div className="u_id buttons">
              <button className="login">Login</button>
              <button className="forgot_password">Forgot Password</button></div>
            </form>
          </div>
          <div className="col-lg-4">
          <div className="form">
            <h5>Faculty Login</h5>
            <form action=""className="student_form">
            <div className="u_id">
              <label htmlFor="userID">User ID</label>
              <input type="text" id="userID"/></div>
              <br />
              <div className="u_id">
              <label htmlFor="password">Password</label>
              <input type="password"id="password" /></div>
              <br />
              <div className="u_id buttons">
              <button className="login button-2">Login</button>
              </div>
            </form>
          </div>
            {/* <h6 className="span_text">Updates</h6>
            <ul>
              <li>
                <a href="#">Update - 1</a>
              </li>
              <li>
                <a href="#">Update - 2</a>
              </li>
              <li>
                <a href="#">Update - 3</a>
              </li>
              <li>
                <a href="#">Update - 4</a>
              </li>
              <li>
                <a href="#">Update - 5</a>
              </li>
              <li>
                <a href="#">Update - 6</a>
              </li>
              <li>
                <a href="#">Update - 7</a>
              </li>
            </ul> */}
          </div>
            {/* <h6 className="span_text">Updates</h6>
            <ul>
              <li>
                <a href="#">Update - 1</a>
              </li>
              <li>
                <a href="#">Update - 2</a>
              </li>
              <li>
                <a href="#">Update - 3</a>
              </li>
              <li>
                <a href="#">Update - 4</a>
              </li>
              <li>
                <a href="#">Update - 5</a>
              </li>
              <li>
                <a href="#">Update - 6</a>
              </li>
              <li>
                <a href="#">Update - 7</a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
      
     
    </div>
  );
}
