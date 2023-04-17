import React from "react";
import logo from '../Images/logo.webp'

const Navigation = () =>{
    return(
        <nav className=" dt w-100 border-box pa3 ph5-ns orange ba solid blue br4">
            <a className="dtc v-mid link dim w-25" href="www.google.com">
                <img src={logo} className="dib br-100" alt="" style={{width:48,height:48}}></img>
            </a>
            <div style={{display:"flex", justifyContent:"right"}}>
                <p className="code orange underline pointer pa3"> Chi siamo</p>
                <p className="code orange underline pointer pa3"> La struttura</p>
                <p className="code orange underline pointer pa3"> Contatti</p>
            </div>
        </nav>
    )
}

export default Navigation;