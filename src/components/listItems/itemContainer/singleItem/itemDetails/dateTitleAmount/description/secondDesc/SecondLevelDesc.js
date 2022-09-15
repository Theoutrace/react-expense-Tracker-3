import React from "react";
import './SecondLevelDesc.css'

const SecondLevelDesc = (props) => {
  return <div className="third-level-div">{props.forSecondDesc.thirdLevel}</div>;
};

export default SecondLevelDesc;
