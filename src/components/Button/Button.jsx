import React from "react";
import "./ButtonStyles.css";

const Button = ({ label, onClickFunc }) => {
  return (
    <button className="button" onClick={onClickFunc}>
      {label}
    </button>
  );
};

export default Button;
