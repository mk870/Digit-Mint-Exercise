import React from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import SelectField from "../SelectField/SelectField";
import "./UserInputStyles.css";

const UserInputs = ({
  userData,
  setUserData,
  setChartData,
  chartData,
  inputFieldError,
  setInputFieldError,
}) => {
  const handleNameChange = (e) => {
    setUserData({ ...userData, name: e.target.value });
  };
  const handleDistanceChange = (e) => {
    setUserData({ ...userData, distance: e.target.value });
  };

  const handleSelectionChange = (e) => {
    setUserData({ ...userData, modeOfTransport: e.target.value });
  };
  const handlePost = () => {
    if (
      userData.distance === "" ||
      userData.name === "" ||
      userData.distance === null
    ) {
      setInputFieldError(true);
    } else {
      setInputFieldError(false);
      setChartData([...chartData, userData]);
      setUserData({
        ...userData,
        name: "",
        distance: "",
        modeOfTransport: "bike",
        co2Levels: 0,
      });
    }
  };
  return (
    <div className="user-inputs-wrapper">
      <div className="input-fields">
        <InputField
          label={"Enter your name"}
          inputType="text"
          inputValue={userData.name}
          onChangeFunc={handleNameChange}
        />
        {inputFieldError && (
          <div className="input-error">please enter both name and distance</div>
        )}
        <InputField
          label={"Enter distance in km"}
          inputType="number"
          inputValue={userData.distance}
          onChangeFunc={handleDistanceChange}
        />
        {inputFieldError && (
          <div className="input-error">please enter both name and distance</div>
        )}
      </div>
      <div className="other-fields">
        <div className="select-field">
          <SelectField
            selectValue={userData.modeOfTransport}
            onChangeFunc={handleSelectionChange}
          />
          <div className="co2-levels-container">
            <span className="co2-levels-number">{userData.co2Levels}g</span>
            <p className="co2-levels-label">CO2 Emissions</p>
          </div>
        </div>
        <Button label={"post"} onClickFunc={handlePost} />
      </div>
    </div>
  );
};

export default UserInputs;
