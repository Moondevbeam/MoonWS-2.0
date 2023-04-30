import Navigation from "../components/navigation/Navigation";
import Resume from '../components/Images/RESUME.jpg'
import pdf from '../components/Images/RESUME.pdf'
import React, { Component } from "react";

class Stack extends Component {
  componentDidMount() {
    window.addEventListener("beforeunload", this.onBeforeUnload);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.onBeforeUnload);
  }

  onBeforeUnload = () => {
    window.location.reload();
  };

  render() {
    return(
<div>
    <Navigation></Navigation>
{/* //start card */}
  <div className="card out phone" style={{width:"18rem"}}>
    <img src={Resume} class="card-img-top" alt="..."/>
    <div class="card-body">
      <p class="card-text">Do you want to hire me? Check out my Resume</p>
      <div className="tc">
      <button type="button" class="btn btn-warning"><a className="qbz black" href={pdf} download={pdf}>Download</a></button>
      </div>
      </div>
        </div>
{/* // end card */}
</div>
    )
}
}
export default Stack;