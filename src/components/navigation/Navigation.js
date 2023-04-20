import React from "react";
import logo from '../Images/logo.png'
import Darkmode from "../darkmode/Darkmode";
import "./Navigation.css"

const Navigation = () =>{
    return(
        <nav className=" dt w-100 border-box pa3 ph5-ns solid black">
            <a className="zoom dtc v-mid link w-25" href="https://moondevbeam.github.io/">
                <img src={logo} className="dib br-100" alt="" style={{width:48,height:48}}></img>
            </a>
            <div style={{display:"flex", justifyContent:"right"}}>
                <p className="pointer pa3 f3"><a className="black" href="https://www.linkedin.com/in/moonbeam-dev/"><i class="bi bi-linkedin"></i></a></p>
                <p className="pointer pa3 f3"><a className="black" href="https://github.com/Moondevbeam"><i class="bi bi-github"></i></a></p>
                <p onClick={Darkmode} className="black pointer pa3 f3"><i class="bi bi-moon-stars-fill"></i></p>
            </div>
        </nav>
    )
}

export default Navigation;