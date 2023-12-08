import React from "react";
import logo from "../images/SRCA-Logo-WB.png";
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
            <h5>Phone No : (+91) 8655835557</h5>
            <h5>Address  : Shibli RCA Campus,</h5>
            <h5>           Pandey Bazaar</h5>
            <h5>           Azamgarh</h5>
        </div>
        <img src={map} alt=""className="map"/>
      </footer>
    </>
  );
}
