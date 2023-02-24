import React from "react";
import "./SettingsCard.scss";
import Button from "../Button/Button";
import Sun from "../../assets/images/lightmode/sun-light.png";
import Moon from "../../assets/images/lightmode/moon-light.png";

const Settings = () => {
  return (
    <div className="settings-card-container">
      <div className="settings-card">
        <div className="settings-card__content">
          <div className="settings-card__mode">
            <h1 className="settings-card__option">Light/Dark Mode:</h1>
            <div className="settings-card__toggle-container">
              <img className="settings-card__toggle-sun" src={Sun} alt="Sun" />

              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>

              <img
                className="settings-card__toggle-moon"
                src={Moon}
                alt="Moon"
              />
            </div>
          </div>
          <div className="settings-card__theme">
            <h1 className="settings-card__option">Select Theme:</h1>
            <div className="settings-card__checkbox-container">
              <label
                htmlFor="settings-card__optionOne"
                className="settings-card__checkbox-label"
              >
                Modern
              </label>
              <input
                className="settings-card__checkbox"
                id="settings-card__optionOne"
                type="radio"
              />
              <label
                htmlFor="settings-card__optionTwo"
                className="settings-card__checkbox-label"
              >
                Tech
              </label>
              <input
                className="settings-card__checkbox"
                id="settings-card__optionTwo"
                type="radio"
              />
            </div>
          </div>
        </div>
        <div className="settings-card__button-container">
          <Button buttonText={"Apply"} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
