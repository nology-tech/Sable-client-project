import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import NavContainer from "../../containers/NavContainer/NavContainer";
//import SettingsCard from "../../components/SettingsCard/SettingsCard";
import "../Settings/Settings.scss";
//import Button from "../../components/Button/Button";
//import HomeButton from "../../components/HomeButton/HomeButton";
import ConfirmationOverlay from "../../components/ConfirmationOverlay/ConfirmationOverlay";

const Settings = () => {
  return (
    <div className="settings-container">
      <NavContainer />
      <Layout>
        <PageHeader heading="Settings" headerType="headingOnly" />
        {/* <div className="settings-page__content">
          <SettingsCard />
          <div className="settings-page__button-container">
            <Button
              className="settings-page__button"
              buttonText="Log out"
              buttonStyle="isLogout"
            />
          </div>
        </div>
        <div className="home-button-container">
          <HomeButton />
        </div> */}
        <ConfirmationOverlay overlayType="overlayOneButton" text="booking" buttonStyleOne="isPurple" buttonTextOne="book" />
      </Layout>
    </div>
  );
};

export default Settings;

// text="booking" buttonStyleOne="isPurple" buttonTextOne="book"
