import React from "react";
import Navigation from "../components/navigation/Navigation";
import Resume from '../components/Images/RESUME.jpg'
import pdf from '../components/Images/RESUME.pdf'

const Stack = () => {
    return(
      <div>
        <Navigation></Navigation>
<div className="card out" style={{width:"18rem",display:"flex", justifyContent:"flex-start"}}>
  <img src={Resume} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Do you want to hire me? Check out my Resume</p>
    <div className="tc">
    <button type="button" class="btn btn-warning"><a className="qbz black" href={pdf} download={pdf}>Download</a></button>
    </div>
    </div>
      </div>
      </div>
    )
}

export default Stack;