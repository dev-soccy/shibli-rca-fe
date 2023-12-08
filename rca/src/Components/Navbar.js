import React, { useEffect } from "react";
import "./style.css";
import Logo from "../images/SRCA-logo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  useEffect (() => {
    AOS.init({ duration: 500 });
   
    
}, []);
  return (
    <div data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="300"
    data-aos-offset="0" className="homeNav">
      <div className="top-bar">
        <button className="faculty_login login">Faculty Login</button>
        <div className="search-bar">
          <div className="group">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input placeholder="Search" type="search" className="input" />
          </div>
        </div>
        <div className="secondary-button">
          <button className="faculty_login language">
            EN <span className="material-symbols-outlined">expand_more</span>
          </button>
          <button className="faculty_login button-a">
            <span>A</span>
          </button>
          <button className="faculty_login button-a1">A-</button>
          <button className="faculty_login button-a2">A+ </button>
        </div>
      </div>
      <div className="middle-bar">
        <img src={Logo} alt="Shibli_logo" className="logo" />
        <h1 className="head_name sm">SHIBLI RESIDENTIAL COACHING ACADEMY</h1>
        <img src={Logo} alt="Shibli_logo" className="logo copy-logo" />
      </div>
      
    </div>
  );
}
