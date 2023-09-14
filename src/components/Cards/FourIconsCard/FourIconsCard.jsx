import React from "react";
import { Divider } from "antd";
import "./index.css";

const styleObject = {fontSize:'3rem'}
const FourIconsCard = ({humidity, wind, sunset, sunrise}) => {
  return (
    <div className="fourItemsCard">
      <div className="leftIcons">
        <div className="smallRow">
          <i class="wi wi-umbrella" style={styleObject}></i>
          <div className="smallColumn">
            <h1 className="small">Humidity</h1>
            <h1 className="smaller">{humidity}%</h1>
          </div>
        </div>
        <div className="smallRow">
          <i class="wi wi-strong-wind" style={styleObject}></i>
          <div className="smallColumn">
            <h1 className="small">Wind Speed</h1>
            <h1 className="smaller">{wind} Km/H</h1>
          </div>
        </div>
      </div>
      <Divider type="vertical" style={{ height: "80%" }} />
      <div className="rightIcons">
        <div className="smallRow">
          <i class="wi wi-sunset" style={styleObject}></i>
          <div className="smallColumn">
            <h1 className="small">Sunset</h1>
            <h1 className="smaller">{sunset}</h1>
          </div>
        </div>
        <div className="smallRow">
          <i class="wi wi-sunrise" style={styleObject}></i>
          <div className="smallColumn">
            <h1 className="small">Sunrise</h1>
            <h1 className="smaller">{sunrise}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourIconsCard;
