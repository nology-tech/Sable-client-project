import React from "react";
import Button from "../Button/Button";
// import Logo from "../../assets/images/logo/logo-white.png";
import "./PageHeader.scss";

const PageHeader = ({ headerType, heading, text, optionsArr }) => {
  const optionsJSX = optionsArr.map((option, index) => {
    return (
      <option className="option" value={option} key={index}>
        {option}
      </option>
    );
  });

  const HeadingOnlyJSX = () => (
    <div className="heading-only">
      <h1 className="heading-only__heading">{heading}</h1>
    </div>
  );

  const HeadingButtonJSX = () => (
    <div className="heading-button">
      <h1 className="heading-button__heading">{heading}</h1>
      <Button buttonText={text} />
    </div>
  );

  const HeadingButtonDropdownJSX = () => (
    <div className="heading-button-dropdown">
      <div className="heading-button-dropdown__main">
        <h1 className="heading-button-dropdown__heading">{heading}</h1>
        <Button buttonText={text} />
      </div>

      <div className="heading-button-dropdown__dropdown">
        <select id="dropdown">
          <option className="option" value="">
            Select
          </option>
          {optionsJSX}
        </select>
      </div>
    </div>
  );

  return (
    <>
      {headerType === "headingOnly"
        ? HeadingOnlyJSX()
        : headerType === "headingButton"
        ? HeadingButtonJSX()
        : headerType === "headingButtonDropdown"
        ? HeadingButtonDropdownJSX()
        : alert("unknown header")}
    </>
  );
};

export default PageHeader;
