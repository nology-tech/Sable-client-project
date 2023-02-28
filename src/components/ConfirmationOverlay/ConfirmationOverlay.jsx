import React from "react";
import Button from "../Button/Button";
import "./ConfirmationOverlay.scss";

const ConfirmationOverlay = ({
  overlayType,
  text,
  buttonTextOne,
  buttonTextTwo,
  buttonStyleOne,
  buttonStyleTwo,
}) => {
  const overlayOneButtonJSX = () => (
    <div className="overlayOneButton overlay">
      <div className="overlay-content">
        <h1 className="overlay-text">{text}</h1>
        <div className="overlay-buttons">
          <Button buttonText={buttonTextOne} buttonStyle={buttonStyleOne} />
        </div>
      </div>
    </div>
  );

  const overlayTwoButtonsJSX = () => (
    <div className="overlayTwoButtons overlay">
      <div className="overlay-content">
        <h1 className="overlay-text">{text}</h1>
        <div className="overlay-buttons">
          <Button buttonText={buttonTextOne} buttonStyle={buttonStyleOne} />
          <Button buttonText={buttonTextTwo} buttonStyle={buttonStyleTwo} />
        </div>
      </div>
    </div>
  );
  return (
    <>
      {overlayType === "overlayOneButton"
        ? overlayOneButtonJSX()
        : overlayType === "overlayTwoButtons"
        ? overlayTwoButtonsJSX()
        : alert("unknown header")}
    </>
  );
};

export default ConfirmationOverlay;
