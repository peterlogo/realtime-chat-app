import React from "react";
import "./InfoBar.css";
import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";
const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="onlineImage" />
        <h3>{room}</h3>
      </div>
      <div className="RightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="closeImage" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;