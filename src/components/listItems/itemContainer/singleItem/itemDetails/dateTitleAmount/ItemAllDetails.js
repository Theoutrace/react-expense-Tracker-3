import React from "react";
import Date from "../../date/Date";
import SingleItemDeleteBtn from "../../itemDeleteBtn/SingleItemDeleteBtn";
import DescriptionDisplay from "./description/DescriptionDisplay";
import "./ItemAllDetails.css";

const ItemAllDetails = (props) => {
  // console.log(props.itm.description);
  return (
    <div>
      <div className="all-details-container-date-title-amt-deletebtn">
        <div className="date-details-container">
          <Date expdate={props.itm.date} />
        </div>
        <div>{props.itm.title}</div>
        <div>{props.itm.amount}</div>
        <div>
          <SingleItemDeleteBtn />
        </div>
      </div>
      <DescriptionDisplay descrip={props.itm.description}/>
    </div>
  );
};

export default ItemAllDetails;
