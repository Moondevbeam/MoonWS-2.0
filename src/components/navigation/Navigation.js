import React from "react";
import logo from '../Images/logo.png'

const Navigation = () =>{
    return(
        <nav className=" dt w-100 border-box pa3 ph5-ns ba solid black">
            <a className="dtc v-mid link dim w-25" href="www.google.com">
                <img src={logo} className="dib br-100" alt="" style={{width:48,height:48}}></img>
            </a>
            <div style={{display:"flex", justifyContent:"right"}}>
                <p className="code orange underline pointer pa3">About</p>
                <p className="code orange underline pointer pa3">Portfolio</p>
                <p className="code orange underline pointer pa3">Social</p>
            </div>
        </nav>
    )
}

export default Navigation;