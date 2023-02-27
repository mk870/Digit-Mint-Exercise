import React from "react";
import "./InputFieldStyles.css";

const InputField = ({ label, onChangeFunc, inputValue, inputType }) => {
  
  return (
    <div className="input-container">
      <input
        className="input"
        value={inputValue}
        type={inputType}
        placeholder=" "
        spellCheck="false"
        autoCorrect="off"
        autoComplete="off"
        onChange={(e) => onChangeFunc(e)}
      />
      <p className={"label"}>
        {label}
      </p>
    </div>
  );
};

export default InputField;
