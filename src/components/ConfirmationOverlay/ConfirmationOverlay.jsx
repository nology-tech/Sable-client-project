import React from "react";
import Button from "../Button/Button";
import "./ConfirmationOverlay.scss";

const ConfirmationOverlay = ({
  overlayType,
  buttonText,
  buttonStyle,
  text,
}) => {
  const overlayOneButtonJSX = () => {
    <div className="overlayOneButton">
      <h1 className="overlay-text">{text}</h1>
      <div>
        <Button buttonText={buttonText} buttonStyle={buttonStyle} />
      </div>
    </div>;
  };

  const overlayTwoButtonsJSX = () => {
    <div className="overlayTwoButtons">
      <h1 className="overlay-text">{text}</h1>
      <div>
        <Button buttonText={buttonText} buttonStyle={buttonStyle} />
        <Button buttonText={buttonText} buttonStyle={buttonStyle} />
      </div>
    </div>;
  };
  return (
    <>
      {overlayType === "overlayOneButton"
        ? overlayOneButtonJSX()
        : overlayType === "overlayTwoButtons"
        ? overlayTwoButtonsJSX()
        : alert("unknown")}
    </>
  );
};

export default ConfirmationOverlay;
