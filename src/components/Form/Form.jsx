import React from "react";
// import Button from "../Button/Button";
import DropdownField from "../DropdownField/DropdownField";
import InputField from "../InputField/InputField";
import "./Form.scss";

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-container__category">
        <DropdownField
          label="Category Name"
          placeholderText="Health"
          id="category"
        />
      </div>
      <div className="form-container__staff">
        <InputField label="Staff Member" />
      </div>
      <div className="form-container__resource">
        <InputField label="Resource Name" placeholderText="Syringe" />
      </div>

      <div className="form-container__checkbox">
        <h2 className="form-container__checkbox--label">Auto-Purchase</h2>
        <div className="form-container__checkboxes">
          <div className="form-container__checkbox--yes">
            <label htmlFor="yes">Yes</label>
            <input type="checkbox" id="yes"></input>
          </div>
          <div className="form-container__checkbox--no">
            <label htmlFor="no">No</label>
            <input type="checkbox" id="no"></input>
          </div>
        </div>
      </div>

      <div className="form-container__auto-purchase">
        <InputField label="Auto-Purchase Level" placeholderText="50" />
      </div>
      <div className="form-container__quantity-remaining">
        <InputField label="Quantity Remaining" placeholderText="500" />
      </div>
    </div>
  );
};

export default Form;
