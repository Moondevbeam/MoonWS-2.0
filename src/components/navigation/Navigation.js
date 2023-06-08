import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../Images/logo.png';
import Darkmode from "../darkmode/Darkmode";
import "./Navigation.css";

const MenuLink = ({ to, iconClass, external, onClick, children }) => {
  if (external) {
    return (
      <a className="pointer pa3 f3 black" href={to}><i className={iconClass}></i></a>
    );
  } else {
    return (
      <button className="pointer pa3 f3 black transparent-button" onClick={onClick}>
        <Link to={to}>
          <i className={iconClass}></i>
        </Link>
      </button>
    );
  }
};

const Navigation = () => {
  const location = useLocation();
  const commonLinks = [
    { to: "https://www.linkedin.com/in/moonbeam-dev/", iconClass: "bi bi-linkedin", external: true, ariaLabel: "LinkedIn" },
    { to: "https://github.com/Moondevbeam", iconClass: "bi bi-github", external: true, ariaLabel: "GitHub" },
  ];

  const homeAndProjectsLinks = [
    { to: location.pathname === '/' ? "/projects" : "/", iconClass: location.pathname === '/' ? "bi bi-file-earmark-code" : "bi bi-house-heart-fill", external: false, ariaLabel: "Home" },
    { to: "#", iconClass: "bi bi-moon-stars-fill", external: false, onClick: Darkmode, ariaLabel: "Toggle Dark Mode" }
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
          <img src={logo} className="dib br-100" alt="Logo" style={{ width: 100, height:38 }} />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
