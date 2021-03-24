import React from "react";
import MenPic from "../../assets/images/shopMens.jpg";
import WomenPic from "../../assets/images/shopWomens.jpg";
import "./styles.scss";
const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div style={{ backgroundImage: `url(${MenPic})` }} className="item">
          <div className="item-overlay">
            <a>Men</a>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${WomenPic})` }} className="item">
          <div className="item-overlay">
            <a>Women</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
