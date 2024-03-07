import React from "react";

import "../style/formstyle.css";

import TextInput from "../common/TextInput";
import DropDownInput from "../common/DropDownInput";
import CheckBoxInput from "../common/CheckBoxInput";
import RadioInput from "../common/RadioInput";
import TextAreaInput from "../common/TextAreaInput";

const DynamicForm = () => {
  return (
    <div className="form-container">
      {/* DynamicForm */}
      <TextInput inputLabel={"Name"} placeholder={"Enter your name"} />
      <CheckBoxInput inputLabel={"Type"} />
      <RadioInput inputLabel={"Radio"} />
      <DropDownInput inputLabel={"dropdown"} />
      <TextAreaInput inputLabel={"Name"} placeholder={"Enter your name"} />
    </div>
  );
};

export default DynamicForm;
