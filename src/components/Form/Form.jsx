import React from "react";
import Button from "../Button/Button";
import DropdownField from "../DropdownField/DropdownField";
import InputField from "../InputField/InputField";
import "./Form.scss";

const Form = ({
  formPage,
  staff,
  category,
  resourceName,
  optionsArr,
  text,
}) => {
  const editResourceJSX = () => (
    <div className="form-container">
      <div className="form-container__category">
        <InputField
          label="Category Name"
          placeholderText={category}
          readOnly={true}
          id="category"
        />
      </div>
      <div className="form-container__staff">
        <InputField
          label="Staff Member"
          placeholderText={staff}
          readOnly={true}
        />
      </div>
      <div className="form-container__resource">
        <InputField
          label="Resource Name"
          placeholderText={resourceName}
          readOnly={true}
        />
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
      <Button buttonText={text} />
    </div>
  );

  const optionsJSX = optionsArr.map((option, index) => {
    return (
      <option className="option" value={option} key={index}>
        {option}
      </option>
    );
  });

  const requestResourceJSX = () => (
    <div className="form-container">
      <div className="form-container__category">
        <DropdownField
          label="Category Name"
          placeholderText="Health"
          id="category"
          optionsJSX={optionsJSX}
        />
      </div>
      <div className="form-container__staff">
        <InputField
          label="Staff Member"
          placeholderText={staff}
          readOnly={true}
        />
      </div>
      <div className="form-container__resource">
        <DropdownField
          label="Resource Name"
          placeholderText="Syringe"
          optionsJSX={optionsJSX}
        />
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
      <Button buttonText={text} />
    </div>
  );

  return (
    <>
      {formPage === "editResource"
        ? editResourceJSX()
        : formPage === "requestResource"
        ? requestResourceJSX()
        : alert("unknown page")}
    </>
  );
};

export default Form;
