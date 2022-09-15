import React from "react";
import FilterData from "./filterContent/FilterData";
import "./FilterFinal.css";

const FilterFinal = () => {
  return (
    <div className="filter-container-div">
      <div className="filter-core">
        <FilterData />
      </div>
    </div>
  );
};

export default FilterFinal;
