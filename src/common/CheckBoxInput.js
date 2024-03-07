import React, { useState } from "react";

const CheckBoxInput = ({ name, inputLabel, options, onAnswerQuestion }) => {
  const initialCheckBox = options.reduce((acc, option) => {
    acc[option] = false;
    return acc;
  }, {});

  const [checkboxes, setCheckboxes] = useState(initialCheckBox);

  const onCheckboxChangeHandler = (event) => {
    const newData = {
      ...checkboxes,
      [event.target.name]: event.target.checked,
    };

    setCheckboxes(newData);
    onAnswerQuestion(name, newData);
  };

  return (
    <div className="form-input">
      <label>{inputLabel}</label>

      <div>
        {options.map((option) => {
          return (
            <div key={option}>
              <input
                className="checkbox"
                type="checkbox"
                name={option}
                checked={checkboxes[option]}
                onChange={onCheckboxChangeHandler}
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
