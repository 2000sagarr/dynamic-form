import React, { useEffect, useState } from "react";

import "../style/formstyle.css";

import TextInput from "../common/TextInput";
import DropDownInput from "../common/DropDownInput";
import CheckBoxInput from "../common/CheckBoxInput";
import RadioInput from "../common/RadioInput";
import TextAreaInput from "../common/TextAreaInput";

const initializeFormInput = (form) => {
  console.log(form.fields);
  const FormInput = form.fields.map((item, index) => {
    return {
      name: item["name"],
      ans: null,
      index: index,
    };
  });
  console.log(FormInput);
  return FormInput;
};

const DynamicForm = ({ formData }) => {
  const [formInput, setFormInput] = useState(() => {
    initializeFormInput(formData);
  });
  useEffect(() => {
    // console.log(formData);
  }, []);

  const renderFormFields = () => {
    return formData.fields.map((inputItem) => {
      console.log(inputItem);
      if (inputItem.type === "text") {
        console.log(inputItem.format);

        return (
          <TextInput
            key={inputItem.name}
            inputLabel={inputItem.label}
            placeholder={inputItem.placeholder}
            format={inputItem.format ? inputItem.format : "text"}
          />
        );
      } else if (inputItem.type === "textarea") {
        return (
          <TextAreaInput
            key={inputItem.name}
            inputLabel={inputItem.label}
            placeholder={inputItem.placeholder}
          />
        );
      } else if (inputItem.type === "radio") {
        return (
          <RadioInput
            key={inputItem.name}
            inputLabel={inputItem.label}
            options={inputItem.options}
          />
        );
      } else if (inputItem.type === "checkbox") {
        return (
          <CheckBoxInput
            key={inputItem.name}
            inputLabel={inputItem.label}
            options={inputItem.options}
          />
        );
      } else if (inputItem.type === "dropdown") {
        return (
          <DropDownInput
            key={inputItem.name}
            inputLabel={inputItem.label}
            options={inputItem.options}
          />
        );
      }
    });
  };

  return (
    <div className="form-container">
      <h1>{formData.title ? formData.title : "Form"}</h1>
      {renderFormFields()}
      <form>
        <button className="btn" type="submit">
          {formData.submitButtoName ? formData.submitButtoName : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
