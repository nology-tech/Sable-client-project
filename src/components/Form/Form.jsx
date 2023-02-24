import React from "react";
import Button from "../Button/Button";
import DropdownField from "../DropdownField/DropdownField";
import InputField from "../InputField/InputField";
import "./Form.scss";

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-container__left">
        <DropdownField
          label="Category Name"
          placeholderText="Health"
          id="category"
        />
        <InputField label="Staff Member" />
        <InputField label="Resource Name" placeholderText="Syringe" />
      </div>
      <div className="form-container__right">
        <div className="auto-purchase-container">
          <h2 className="auto-purchase-container__label">Auto-Purchase</h2>
          <label htmlFor="yes">Yes</label>
          <input type="checkbox" id="yes"></input>
          <label htmlFor="no">No</label>
          <input type="checkbox" id="no"></input>
        </div>
        <InputField label="Auto-Purchase Level" placeholderText="50" />
        <Button buttonText="Save" />
      </div>
    </div>
  );
};

export default Form;
