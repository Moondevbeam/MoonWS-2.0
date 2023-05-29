import React from "react";
import Navigation from "../components/navigation/Navigation";

const Introduction = () =>{
    return(
        <div>
            <Navigation/>
            <div className="phone sticky code orange" style={{paddingLeft:10}}>
                <h1>Hello there! 👋🏻</h1>
                <h5>
                    <span className="white">My name is Matteo (Moonbeam on the web).</span><br/>
                    <span className="orange">I'm a front-end web developer, highly proficient in technologies like ReactJS, HTML, and CSS.</span><br/>
                    <span className="white">Currently, I'm diving into the world of Node.js and Next.js, expanding my skills and expertise.</span><br/>
                    <span className="orange">I've a penchant for building user-friendly, dynamic, and responsive web applications.</span><br/>
                    <span className="white">Aspiring to become a full-stack developer, I'm committed to learning and evolving in this journey.</span><br/>
                    <span className="orange">Feedback is a crucial part of my growth, helping me continually refine and enhance the user experience in my projects.</span><br/>
                    <span className="white">My work, characterized by responsive design and efficient performance, is powered by robust tools like React and Next.js.</span><br/>
                    <span className="orange">Feel free to explore my portfolio, and I look forward to bringing your web project ideas to life!</span><br/>
                </h5>
            </div>
        </div>
    )
}

export default Introduction;
