import React from "react";

const CardDetail = ({ imgSrc, title }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
    filter: "blur(6px)",
    margin: 0,
    padding: 0,
  };

  const handleBack = () => {
    window.location.href = "/stack";
  }

  return (
    <div className="flex flex-column items-start justify-start">
      <div style={backgroundImageStyle}></div>
      <div className="pa3">
      <button className="btn btn-danger" onClick={handleBack}><i className="bi bi-arrow-left"></i></button>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default CardDetail;
