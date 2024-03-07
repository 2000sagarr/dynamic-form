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
  return FormInput;
};

const DynamicForm = ({ formData }) => {
  const [formInput, setFormInput] = useState(() => {
    return initializeFormInput(formData);
  });
  useEffect(() => {
    console.log(formInput);
  }, [formInput]);

  const onAnswerQuestion = (name, ans) => {
    setFormInput((prevDataArray) => {
      const newDataArray = [...formInput];
      const index = newDataArray.findIndex((item) => item.name === name);
      if (index !== -1) {
        newDataArray[index].ans = ans;
        return newDataArray;
      }
      return prevDataArray;
    });
  };

  const renderFormFields = () => {
    return formData.fields.map((inputItem, index) => {
      console.log(inputItem);
      if (inputItem.type === "text") {
        console.log(inputItem.format);
        return (
          <TextInput
            name={inputItem.name}
            key={inputItem.name}
            inputLabel={inputItem.label}
            placeholder={inputItem.placeholder}
            format={inputItem.format ? inputItem.format : "text"}
            onAnswerQuestion={onAnswerQuestion}
          />
        );
      } else if (inputItem.type === "textarea") {
        return (
          <TextAreaInput
            name={inputItem.name}
            key={inputItem.name}
            inputLabel={inputItem.label}
            placeholder={inputItem.placeholder}
            onAnswerQuestion={onAnswerQuestion}
          />
        );
      } else if (inputItem.type === "radio") {
        return (
          <RadioInput
            name={inputItem.name}
            key={inputItem.name}
            inputLabel={inputItem.label}
            options={inputItem.options}
            onAnswerQuestion={onAnswerQuestion}
          />
        );
      } else if (inputItem.type === "checkbox") {
        return (
          <CheckBoxInput
            name={inputItem.name}
            key={inputItem.name}
            inputLabel={inputItem.label}
            options={inputItem.options}
            onAnswerQuestion={onAnswerQuestion}
          />
        );
      } else if (inputItem.type === "dropdown") {
        return (
          <DropDownInput
            name={inputItem.name}
            key={inputItem.name}
            inputLabel={inputItem.label}
            options={inputItem.options}
            onAnswerQuestion={onAnswerQuestion}
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
