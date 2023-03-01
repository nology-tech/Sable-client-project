import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import NavContainer from "../../containers/NavContainer/NavContainer";
import SettingsCard from "../../components/SettingsCard/SettingsCard";
import "../Settings/Settings.scss";
import Button from "../../components/Button/Button";
import HomeButton from "../../components/HomeButton/HomeButton";
import ConfirmationOverlay from "../../components/ConfirmationOverlay/ConfirmationOverlay";
import React, { useState } from "react";

const Settings = ({ setUser }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setShowOverlay(!showOverlay);
    setIsActive(!isActive);
  };
  // if (showOverlay){
  //   classname += "opacity"
  // }
  // const handleLogout =()=>{
  //   <div className="overlayOneButton overlay">
  //   <div className="overlay-content">
  //     <h1 className="overlay-text">{text}</h1>
  //     <div className="overlay-buttons">
  //       <Button
  //         buttonText={buttonTextOne}
  //         buttonStyle={buttonStyleOne}
  //         handleCLick={setUser}
  //       />
  //     </div>
  //   </div>
  // </div>
  // }

  return (
    <div className="settings-container">
      <NavContainer />
      <Layout>
        <div className={
            isActive
              ? "page-header__content + active"
              : "page-header__content"
          }>
          <PageHeader heading="Settings" headerType="headingOnly" />
        </div>
        {showOverlay && (
          <ConfirmationOverlay
            overlayType="overlayOneButton"
            text="Test"
            buttonStyleOne="isLogoutPopup--logout"
            buttonTextOne="Logout"
            buttonStyleTwo="isLogoutPopup--back"
            buttonTextTwo="Back"
            handleClick={handleToggle}
            setUser={setUser}
            // handleLogout={handleLogout}
          />
        )}
        <div
          className={
            isActive
              ? "settings-page__content + active"
              : "settings-page__content"
          }
        >
          <SettingsCard handleClick={handleToggle} />
          <div className="settings-page__button-container">
            <Button
              className="settings-page__button"
              buttonText="Log out"
              buttonStyle="isLogout"
              handleClick={handleToggle}
            />
          </div>
        </div>
        <div className="home-button-container">
          <HomeButton />
        </div>
      </Layout>
    </div>
  );
};

export default Settings;
