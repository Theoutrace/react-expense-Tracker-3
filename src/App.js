import "./App.css";
import Header from "./components/header/headerContainer/Header";
import Form from "./components/forms/detailsForm/Form";
import Singleitem from "./components/listItems/itemContainer/singleItem/itemDetails/Singleitem";
import ChartFinal from "./components/chart/ChartFinal";
import { Data } from "./components/data/Data";
import FilterFinal from "./components/filter/FilterFinal";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState(Data);

  const addExpenseHandler = (expenseCollected) => {
    // console.log(expenseCollected);
    setExpenses((old) => {
      // add expenseCollected from form to old dummy array
      return [expenseCollected, ...old];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Form onExpenseAddition={addExpenseHandler} />
      <ChartFinal />
      <div className="filter-container-div">
        <div className="inner-div-containing-filter">
          <FilterFinal />
        </div>
      </div>
      <Singleitem expenseDetails={expenses} />
    </div>
  );
}

export default App;
