import React from "react";
import logo from '../Images/logo.png'
import Darkmode from "../darkmode/Darkmode";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

const Navigation = () =>{
    const location = useLocation();
    if (location.pathname === '/') {
        return(
            <div className="pa3 sticky dt ph5-ns black">
                <Link to="/" className="dtc v-mid link w-25">
                    <img src={logo} className="dib br-100" alt="" style={{width:48,height:48}}></img>
                </Link>
                <div style={{display:"flex", justifyContent:"right"}}>
                    <p className="pointer pa3 f3"><a className="black" href="https://www.linkedin.com/in/moonbeam-dev/"><i class="bi bi-linkedin"></i></a></p>
                    <p className="pointer pa3 f3"><a className="black" href="https://github.com/Moondevbeam"><i class="bi bi-github"></i></a></p>
                    <p className="pointer pa3 f3"><Link className="black" to="stack"><i class="bi bi-file-earmark-code"></i></Link></p>
                    <p onClick={Darkmode} className="black pointer pa3 f3"><i class="bi bi-moon-stars-fill"></i></p>
                </div>
            </div>
        )
      } else if (location.pathname === '/stack') {
        return(
            <div className="pa3 sticky dt ph5-ns black">
                <Link to="/" className="dtc v-mid link w-25">
                    <img src={logo} className="dib br-100" alt="" style={{width:48,height:48}}></img>
                </Link>
                <div style={{display:"flex", justifyContent:"right"}}>
                    <p className="pointer pa3 f3"><a className="black" href="https://www.linkedin.com/in/moonbeam-dev/"><i class="bi bi-linkedin"></i></a></p>
                    <p className="pointer pa3 f3"><a className="black" href="https://github.com/Moondevbeam"><i class="bi bi-github"></i></a></p>
                    <p className="pointer pa3 f3"><Link className="black" to="/"><i class="bi bi-house-heart-fill"></i></Link></p>
                    <p onClick={Darkmode} className="black pointer pa3 f3"><i class="bi bi-moon-stars-fill"></i></p>
                </div>
            </div>
        )
      }
    }

export default Navigation;