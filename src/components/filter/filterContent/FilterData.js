import React from "react";
import './FilterData.css'

const FilterData = () => {
  return (
    <div>
      <select className="select-filter-drop" name="Years" id="cars">
        <option value="Select" disabled>Select</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default FilterData;
