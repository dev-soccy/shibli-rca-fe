import React from "react";
import logo from "../images/sbhiblilogo.png";
import map from '../images/map.png'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="text-info">
          <img src={logo} alt="" className="foot-logo" />
          <h2>SHIBLI RESIDENTIAL COACHING ACADEMY</h2>
        </div>
        <br />
        <div className="infoo">
            <h5>Phone No : (+00) 252682</h5>
            <h5>Address : Lorem, ipsum dolor.</h5>
        </div>
        <img src={map} alt=""className="map"/>
      </footer>
    </>
  );
}
