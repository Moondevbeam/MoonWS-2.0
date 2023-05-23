import React from "react";
import Navigation from "../components/navigation/Navigation";
const Introduction = () =>{
    return(
        <div>
            <Navigation/>
        <div className="phone sticky code black" style={{paddingLeft:10}}>
            <h1>Hello there! 👋🏻</h1>
            <h5>
        My name is Matteo (Moonbeam on the web).
        I'm currently learning NodeJS, NextJS and React.<br/>
        I am a Front End developer with a passion for building dynamic and responsive web applications.<br/>
        My goal is to become a full-stack developer and I am dedicated to learning the necessary skills to achieve this dream.</h5>
    </div>
    </div>
    )
}

export default Introduction;