import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import NavContainer from "../../containers/NavContainer/NavContainer";
import SettingsCard from "../../components/SettingsCard/SettingsCard";
import "../Settings/Settings.scss";
import Button from "../../components/Button/Button";
import HomeButton from "../../components/HomeButton/HomeButton";
import ConfirmationOverlay from "../../components/ConfirmationOverlay/ConfirmationOverlay";
import React, { useState } from "react";

<<<<<<< HEAD
const Settings = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const handleClick = () => {
    // let classname = ""
    setShowOverlay(!showOverlay);
    // if (showOverlay){
    //   classname += "opacity"
    // }
  };

>>>>>>>>> Temporary merge branch 2
  return (
    <div className="settings-container">
      <NavContainer />
      <Layout>
        <PageHeader heading="Settings" headerType="headingOnly" />
        <div className="settings-page__content">
          <SettingsCard />
          <div className="settings-page__button-container">
            <Button
              className="settings-page__button"
              buttonText="Log out"
              buttonStyle="isLogout"
<<<<<<< HEAD
              handleClick={handleClick}
=======
              handleClick={setUser}
>>>>>>> 3b91afd1b71fae267d2401c2130717ee78b6c9a7
            />
            {showOverlay && (
              <ConfirmationOverlay
                overlayType="overlayTwoButtons"
                text="Are you sure you want to log out?"
                buttonStyleOne="isLogoutPopup--logout"
                buttonTextOne="Logout"
                buttonStyleTwo="isLogoutPopup--back"
                buttonTextTwo="Back"
                />
            )}
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
