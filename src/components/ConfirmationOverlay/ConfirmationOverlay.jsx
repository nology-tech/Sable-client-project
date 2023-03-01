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
  handleCLick,
  setUser,
}) => {
  const overlayOneButtonJSX = () => (
    <div className="overlayOneButton overlay">
      <div className="overlay-content">
        <h1 className="overlay-text">{text}</h1>
        <div className="overlay-buttons">
          <Button
            buttonText={buttonTextOne}
            buttonStyle={buttonStyleOne}
            handleCLick={handleCLick}
          />
        </div>
      </div>
    </div>
  );

  const overlayTwoButtonsJSX = () => (
    <div className="overlayTwoButtons overlay">
      <div className="overlay-content">
        <h1 className="overlay-text">{text}</h1>
        <div className="overlay-buttons">
          <Button
            buttonText={buttonTextOne}
            buttonStyle={buttonStyleOne}
            handleCLick={handleCLick}
          />
          <Button
            buttonText={buttonTextTwo}
            buttonStyle={buttonStyleTwo}
            handleCLick={handleCLick}
          />
        </div>
      </div>
    </div>
  );

  const handleLogout = () => {
    <div className="overlayOneButton overlay">
      <div className="overlay-content">
        <h1 className="overlay-text">{text}</h1>
        <div className="overlay-buttons">
          <Button
            buttonText={buttonTextOne}
            buttonStyle={buttonStyleOne}
            handleCLick={setUser}
          />
        </div>
      </div>
    </div>;
  };
  const overlayLogoutJSX = () => (
    <div className="overlayLogout overlay">
      <div className="overlay-content">
        <h1 className="overlay-text">{text}</h1>
        <div className="overlay-buttons">
          <Button
            buttonText={buttonTextOne}
            buttonStyle={buttonStyleOne}
            handleCLick={handleLogout}
          />
          <Button
            buttonText={buttonTextTwo}
            buttonStyle={buttonStyleTwo}
            handleCLick={handleCLick}
          />
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
        : overlayType === "overlayLogout"
        ? overlayLogoutJSX()
        : alert("unknown overlay")}
    </>
  );
};

export default ConfirmationOverlay;
