import React, { useState } from "react";

const ImageInput = ({
  name,
  inputLabel,
  placeholder,
  onAnswerQuestion,
  validation,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onImageChangeHandker = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      if (file.type.startsWith("image/")) {
        if (file.size >= validation.size * 1000) {
          console.log("not corrrec" + file.size + ">>>>>" + validation.size);

          setError(true);
          setErrorMessage(
            "Image size should be less than " + validation.size + "KB"
          );
        } else {
          console.log("Coorect");
          setSelectedImage(file);
          setError(false);
          setErrorMessage("");
          onAnswerQuestion(name, file);
        }
      } else {
        setSelectedImage(null);
        setError(true);
        setErrorMessage("Please select image.");
      }
    }
  };
  return (
    <div>
      <div className="form-input">
        <label>{inputLabel}</label>
        <input
          placeholder={placeholder ? placeholder : ""}
          type="file"
          accept="image/*"
          onChange={onImageChangeHandker}
          // onBlur={onBlurHanlder}
        />
      </div>
      <div style={{ display: "block" }}>
        {" "}
        {error && <p className="error">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default ImageInput;
