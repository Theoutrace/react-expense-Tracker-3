import React from "react";
import ItemAllDetails from "./dateTitleAmount/ItemAllDetails";
import "./Singleitem.css";

const Singleitem = (props) => {
  // console.log(props.expenseDetails);

  return (
    <div className="Single-item-and-deletebtn-outer-container">
      {props.expenseDetails.map((item) => {
        return <ItemAllDetails itm={item} key={Math.random().toString()} />;
      })}
    </div>
  );
};

export default Singleitem;

/**
 * Learning : we can import data in App.js and pass that with prop for other component
 * to run map funcn.
 */
