import React, { useState } from "react";
import SubmitBtn from "../buttons/SubmitBtn";
// import CancelBtn from "../buttons/CancelBtn";
import "./Form.css";

const Form = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const titleChangeHandler = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    // console.log(e.target.value);
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    // console.log(e.target.value);
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("prevented");
    const expenseData = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      description: {
        desc: "1 this is a paragraph which tells us about the details of the product",
        secondDesc: {
          thirdLevel: "A- this is the third level of data description",
        },
      },
    };
    // console.log(expenseData);

    //add prop here
    props.onExpenseAddition(expenseData);

    //clearing formfields
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="form-and-submit-btn-container">
      <form onSubmit={submitHandler} className="form-class">
        <input
          type="text"
          value={enteredTitle}
          placeholder="Title"
          onChange={titleChangeHandler}
        ></input>
        <input
          type="number"
          value={enteredAmount}
          placeholder="Amount"
          onChange={amountChangeHandler}
        ></input>
        <input
          type="date"
          value={enteredDate}
          min="2017-01-01"
          max="2035-12-31"
          onChange={dateChangeHandler}
        ></input>
        {/* <CancelBtn /> */}
        <SubmitBtn type="submit" />
      </form>
    </div>
  );
};

export default Form;
