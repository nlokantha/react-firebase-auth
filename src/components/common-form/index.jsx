import React from "react";
import CommonInput from "../common-input";

const formElementType = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

export default function CommonForm({
  formControls = [],
  buttonText,
  formData,
}) {
  function renderFormElement(getCurrentFormConstrol, getFormData) {
    let element = null;
    switch (getCurrentFormConstrol.componentType) {
      case formElementType.INPUT:
        element = (
          <CommonInput
            type={getCurrentFormConstrol.type}
            placeholder={getCurrentFormConstrol.placeholder}
            value={getFormData[getCurrentFormConstrol.name]}
            name={getCurrentFormConstrol.name}
            onClick={getCurrentFormConstrol.onClick}
          />
        );
        break;

      default:
        element = (
            <CommonInput
              type={getCurrentFormConstrol.type}
              placeholder={getCurrentFormConstrol.placeholder}
              value={getFormData[getCurrentFormConstrol.name]}
              name={getCurrentFormConstrol.name}
              onClick={getCurrentFormConstrol.onClick}
            />
          );
        break;
    }
    return element;
  }
  return (
    <form>
      {formControls.map((singleFromControl) =>
        renderFormElement(singleFromControl, formData)
      )}

      <button type="submit">{buttonText || "Submit"}</button>
    </form>
  );
}
