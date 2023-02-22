import React from "react";
import Button from "../Button/Button";
// import Logo from "../../assets/images/logo/logo-white.png";
import "./PageHeader.scss";

const PageHeader = ({ headerType, heading, text, optionsArr }) => {
  const optionsJSX = optionsArr.map((option, index) => {
    return (
      <option value={option} key={index}>
        {option}
      </option>
    );
  });

  const SingleJSX = () => {
    <div className="single-header">
      <h1 className="header__heading">{heading}skjsfdhksd</h1>
    </div>;
    console.log("test");
  };

  const DoubleJSX = () => {
    <div className="double-header">
      <h1 className="header__heading">{heading}</h1>
      <Button buttonText={text} />
    </div>;
  };

  const TripleJSX = () => {
    <div className="double-header">
      <h1 className="header__heading">{heading}ssds</h1>
      <Button buttonText={text} />
      <div>
        <select id="dropdown">
          <option value="">select option</option>
          {optionsJSX}
        </select>
      </div>
    </div>;
    console.log("test");
  };

  return (
    <>
      {headerType === "home"
        ? //   headerType === "book appointment" ||
          //   headerType === "settings" ||
          //   headerType === "edit resource" ||
          //   headerType === "request resource"
          SingleJSX()
        : headerType === "clients"
        ? //   headerType === "resources" ||
          //   headerType === "add client" ||
          //   headerType === "edit client"
          DoubleJSX()
        : headerType === "staff"
        ? TripleJSX()
        : alert("unknown header")}
    </>
  );
};

export default PageHeader;
