import React, { useState } from "react";

const RadioInput = ({ name, inputLabel, options, onAnswerQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionChangeHanlder = (event) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
    onAnswerQuestion(name, event.target.value);
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
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={onOptionChangeHanlder}
              />
              <span className="input-name">{option}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioInput;
