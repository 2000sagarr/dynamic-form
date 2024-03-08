import React, { useEffect, useState } from "react";

import "../style/formstyle.css";

import TextInput from "../common/TextInput";
import DropDownInput from "../common/DropDownInput";
import CheckBoxInput from "../common/CheckBoxInput";
import RadioInput from "../common/RadioInput";
import TextAreaInput from "../common/TextAreaInput";

const initializeFormInput = (form) => {
  const FormInput = form.fields.map((item, index) => {
    return {
      name: item["name"],
      ans: null,
      index: index,
    };
  });
  return FormInput;
};

const DynamicForm = ({ formData, setFormJSON }) => {
  const [formInput, setFormInput] = useState(() => {
    return initializeFormInput(formData);
  });

  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    // console.log(formInput);
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

  const onSubmitForm = (event) => {
    event.preventDefault();
    setSubmitClicked(true);
    let isFormComplete = true;
    formInput.forEach((input, index) => {
      if (
        formData["fields"][index]["required"] &&
        (input["ans"] === null || input["ans"] === "")
      ) {
        isFormComplete = false;
      }
    });

    if (isFormComplete) {
      alert("Completed");
      console.log(formInput);
      let JSON = {};
      for (let input of formInput) {
        JSON[input["name"]] = input["ans"];
      }
      setFormJSON(JSON);
    } else {
      alert("Please complete form!");
    }
  };

  const renderFormFields = () => {
    return formData.fields.map((inputItem, index) => {
      // text input
      if (inputItem.type === "text") {
        return (
          <div key={inputItem.name}>
            <TextInput
              name={inputItem.name}
              inputLabel={inputItem.label}
              placeholder={inputItem.placeholder}
              format={inputItem.format ? inputItem.format : "text"}
              onAnswerQuestion={onAnswerQuestion}
              validation={inputItem.validation}
            />

            {/* is required error */}
            {submitClicked &&
              formData["fields"][index]["required"] &&
              (formInput[index].ans === null ||
                formInput[index].ans.trim() === "") && (
                <p className="error">Field is required.</p>
              )}
          </div>
        );
      }

      // textarea
      else if (inputItem.type === "textarea") {
        return (
          <div key={inputItem.name}>
            <TextAreaInput
              name={inputItem.name}
              inputLabel={inputItem.label}
              placeholder={inputItem.placeholder}
              onAnswerQuestion={onAnswerQuestion}
            />
            {/* is required error */}
            {submitClicked &&
              formData["fields"][index]["required"] &&
              (formInput[index].ans === null ||
                formInput[index].ans.trim() === "") && (
                <p className="error">Field is required.</p>
              )}
          </div>
        );
      }

      // radio
      else if (inputItem.type === "radio") {
        return (
          <div key={inputItem.name}>
            <RadioInput
              name={inputItem.name}
              inputLabel={inputItem.label}
              options={inputItem.options}
              onAnswerQuestion={onAnswerQuestion}
            />
            {/* is required error */}
            {submitClicked &&
              formData["fields"][index]["required"] &&
              (formInput[index].ans === null ||
                formInput[index].ans === "") && (
                <p className="error">Field is required.</p>
              )}
          </div>
        );
      }

      // checkbox
      else if (inputItem.type === "checkbox") {
        return (
          <div key={inputItem.name}>
            <CheckBoxInput
              name={inputItem.name}
              inputLabel={inputItem.label}
              options={inputItem.options}
              onAnswerQuestion={onAnswerQuestion}
            />
            {/* is required error */}
            {submitClicked &&
              formData["fields"][index]["required"] &&
              (formInput[index].ans === null || formInput[index].ans == {}) && (
                <p className="error">Field is required.</p>
              )}
          </div>
        );
      }

      // dropdown
      else if (inputItem.type === "dropdown") {
        return (
          <div key={inputItem.name}>
            <DropDownInput
              name={inputItem.name}
              inputLabel={inputItem.label}
              options={inputItem.options}
              onAnswerQuestion={onAnswerQuestion}
            />
            {/* is required error */}
            {submitClicked &&
              formData["fields"][index]["required"] &&
              (formInput[index].ans === null ||
                formInput[index].ans.trim() === "") && (
                <p className="error">Field is required.</p>
              )}
          </div>
        );
      }
    });
  };

  return (
    <div className="form-container">
      <h1>{formData.title ? formData.title : "Form"}</h1>
      <hr />
      {renderFormFields()}
      <form onSubmit={onSubmitForm}>
        <button className="btn" type="submit">
          {formData.submitButtoName ? formData.submitButtoName : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
