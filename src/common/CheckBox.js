import React from "react";

const CheckBox = ({ name }) => {
  return (
    <div>
      <input
        id="checkbox"
        type="checkbox"
        // checked={isChecked}
        // onChange={handleCheckboxChange}
      />
      <span className="input-name">{name}</span>
    </div>
  );
};

export default CheckBox;
