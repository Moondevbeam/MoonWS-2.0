import React from "react";
import logo from '../Images/logo.png'
import Darkmode from "../darkmode/Darkmode";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

const MenuLink = ({ to, iconClass, external, onClick, children }) => {
  if (external) {
    return (
      <a className="pointer pa3 f3 black" href={to}><i className={iconClass}></i></a>
    );
  } else {
    return (
      <Link className="pointer pa3 f3 black" to={to} onClick={onClick}><i className={iconClass}></i></Link>
    );
  }
}

const Navigation = () => {
  const location = useLocation();
  const commonLinks = [
    { to: "https://www.linkedin.com/in/moonbeam-dev/", iconClass: "bi bi-linkedin", external: true },
    { to: "https://github.com/Moondevbeam", iconClass: "bi bi-github", external: true },
  ];

  const homeAndProjectsLinks = [
    { to: location.pathname === '/' ? "/projects" : "/", iconClass: location.pathname === '/' ? "bi bi-file-earmark-code" : "bi bi-house-heart-fill", external: false },
    { to: "#", iconClass: "bi bi-moon-stars-fill", external: false, onClick: Darkmode }
  ];

  return (
    <div className="pa3 sticky dt ph5-ns black" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
        {homeAndProjectsLinks.map((link, index) => (
          <MenuLink key={index} {...link} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "right", alignItems: "center" }}>
        {commonLinks.map((link, index) => (
          <MenuLink key={index} {...link} />
        ))}
        <Link to="/" className="dtc v-mid link w-25" style={{ paddingLeft: '20px' }}>
          <img src={logo} className="dib br-100" alt="Logo" style={{ width: 100 }} />
        </Link>
      </div>
    </div>
  )
}

export default Navigation;
