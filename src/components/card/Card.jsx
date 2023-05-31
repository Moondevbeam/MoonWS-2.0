import React from "react";

const Card = ({ imgSrc, cardTitle, onOpen }) => {
  return (
    <div className="card out phone mr3 pointer w5 bg-purple" style={{ border: "none", display: "grid", gridTemplateRows: "auto 1fr", marginBottom:"10px" ,transition: "box-shadow 0.3s" }} onClick={onOpen}>
      <img src={imgSrc} className="card-img-top" alt="..." style={{ borderRadius: "0", width: "100%" }} />
      <div className="card-body" style={{ display: "flex", alignItems: "center" }}>
        <h5 className="tc f3 code card-title">{cardTitle}</h5>
      </div>
      <style>
        {`
          .card:hover {
            box-shadow: 0 0 30px #6610f2;
          }
        `}
      </style>
    </div>
  );
};

export default Card;
