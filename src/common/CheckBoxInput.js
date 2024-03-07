import React from "react";

const CheckBoxInput = ({ inputLabel, options }) => {
  return (
    <div className="form-input">
      <label>{inputLabel}</label>

      <div>
        {options.map((option) => {
          return (
            <div  key={option}>
              <input
                className="checkbox"
                type="checkbox"
                // checked={isChecked}
                // onChange={handleCheckboxChange}
              />
              <span className="input-name">{option}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckBoxInput;
