import React from "react";
import ellipse68 from "../../assets/images/Ellipse 68.png";
import ellipse71 from "../../assets/images/Ellipse 71.png";
import ellipse74 from "../../assets/images/Ellipse 74.png";
import ellipse75 from "../../assets/images/Ellipse 75.png";
import ellipse76 from "../../assets/images/Ellipse 76.png";
import group from "../../assets/images/Group 41370.png";
import map from "../../assets/images/map.png"

const SearchMap = () => {
  return (
    <>
      <div className="container">
        <div className="img-item">
          <ul>
            <li>
              <img src={ellipse68} alt="image" />
            </li>
            <li>
              <img src={ellipse71} alt="image" />
            </li>
            <li>
              <img src={ellipse74} alt="image" />
            </li>
            <li>
              <img src={ellipse75} alt="image" />
            </li>
            <li>
              <img src={ellipse76} alt="image" />
            </li>
            <li>
              <img src={ellipse71} alt="image" />
            </li>
            <li>
              <img src={group} alt="image" />
            </li>
            <li className="regular">
              Regular User. <span className="view-plan">View plan</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
  <div className="map">
    <img src={map} alt="image" className="img-fluid" />
  </div>
</div>
    </>
  );
};
export default SearchMap;
