import React from "react";
import logo from '../Images/logo.png'
import Darkmode from "../darkmode/Darkmode";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

const MenuLink = ({ to, iconClass, external, children }) => {
    if (external) {
      return (
        <a className="pointer pa3 f3 black" href={to}><i class={iconClass}></i></a>
      );
    } else {
      return (
        <Link className="pointer pa3 f3 black" to={to}><i class={iconClass}></i></Link>
      );
    }
  }
  
  const Navigation = () => {
    const location = useLocation();
    const commonLinks = [
      { to: "https://www.linkedin.com/in/moonbeam-dev/", iconClass: "bi bi-linkedin", external: true },
      { to: "https://github.com/Moondevbeam", iconClass: "bi bi-github", external: true },
      { to: location.pathname === '/' ? "/projects" : "/", iconClass: location.pathname === '/' ? "bi bi-file-earmark-code" : "bi bi-house-heart-fill", external: false }
    ];
  
    return (
      <div className="pa3 sticky dt ph5-ns black">
        <Link to="/" className="dtc v-mid link w-25">
          <img src={logo} className="dib br-100" alt="Logo" style={{ width: 48, height: 48 }} />
        </Link>
        <div style={{ display: "flex", justifyContent: "right" }}>
          {commonLinks.map((link, index) => (
            <MenuLink key={index} {...link} />
          ))}
          <button onClick={Darkmode} className="pointer pa3 f3 black" style={{ background: 'transparent', border: 'none' }}>
            <i class="bi bi-moon-stars-fill"></i>
          </button>
        </div>
      </div>
    )
  }
  
  export default Navigation;
  