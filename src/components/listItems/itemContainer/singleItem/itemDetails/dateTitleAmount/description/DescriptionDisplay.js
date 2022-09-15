import React from "react";
import SecondLevelDesc from "./secondDesc/SecondLevelDesc";
import "./DescriptionDisplay.css";

const DescriptionDisplay = (props) => {
  console.log();
  return (
    <div>
      <div className="description-details-drop">{props.descrip.desc}</div>
      <SecondLevelDesc forSecondDesc={props.descrip.secondDesc} />
    </div>
  );
};

export default DescriptionDisplay;

// forSecondDesc={props.descrip.desc}
