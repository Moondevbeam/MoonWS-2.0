import React from "react";
import Resume from '../Images/RESUME.jpg'
import pdf from '../Images/RESUME.pdf'

const Cards = () => {
    return(
<div class="card" style={{width:"18rem", marginLeft:10}}>
  <img src={Resume} class="card-img-top" alt="..."/>
  <div className="card-body tc">
    <h5 className="card-title">Resume</h5>
    <p className="card-text">Do you want to hire me? Here's my resume</p>
    <a href={pdf} download={pdf} class="btn btn-warning">Download</a>
  </div>
</div>
    )
}

export default Cards;