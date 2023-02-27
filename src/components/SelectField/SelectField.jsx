import React from "react";
import "./SelectFieldStyles.css";

const SelectField = ({ selectValue, onChangeFunc }) => {
  return (
    <div className="select-container">
      <select
      className="select"
      name="discipline"
      value={selectValue}
      onChange={(e) => onChangeFunc(e)}
    >
      <option value="plane">plane</option>
      <option value="car">car</option>
      <option value="motorbike">motorbike</option>
      <option value="walking">walking</option>
      <option value="train">train</option>
      <option value="bike">bike</option>
      <option value="bus">bus</option>
    </select>
    <p className="select-label">Mode of Transport</p>
    </div>
  );
};

export default SelectField;
