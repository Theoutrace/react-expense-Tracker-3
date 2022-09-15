import React from "react";
import './Date.css'

const Date = (props) => {
  // console.log(props.expdate.getFullYear());
  const year = props.expdate.getFullYear();
  const month = props.expdate.toLocaleString("en-US", { month: "long" });
  const day = props.expdate.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="month-year-date-container">
      <div>{year}</div>
      <div className="month-div">{month}</div>
      <div>{day}</div>
    </div>
  );
};

export default Date;
